import { Notice, moment } from "obsidian";

import { syncReceiveMethodHandlers, SyncAllFiles } from "./fs";
import { dump, isWsUrl } from "./helps";
import FastSync from "../main";


// WebSocket 连接常量
const WEBSOCKET_RETRY_DELAY = 5000 // 重试延迟 (毫秒)
const MAX_RECONNECT_ATTEMPTS = 15 // 最大重连次数
const RECONNECT_BASE_DELAY = 3000 // 重连基础延迟 (毫秒)
const CONNECTION_CHECK_INTERVAL = 3000 // 连接检查间隔 (毫秒)


export class WebSocketClient {
  private ws: WebSocket
  private wsApi: string
  private plugin: FastSync
  public isOpen: boolean = false
  public isAuth: boolean = false
  public checkConnection: number
  public checkReConnectTimeout: number
  public timeConnect = 0
  public count = 0
  //同步全部文件时设置
  public isSyncAllFilesInProgress: boolean = false
  public isRegister: boolean = false
  constructor(plugin: FastSync) {
    this.plugin = plugin
    this.wsApi = plugin.settings.wsApi
      .replace(/^http/, "ws")
      .replace(/\/+$/, '') // 去除尾部斜杠
  }

  public isConnected(): boolean {
    return this.isOpen
  }

  public register() {
    if ((!this.ws || this.ws.readyState !== WebSocket.OPEN) && isWsUrl(this.wsApi)) {
      this.isRegister = true
      this.ws = new WebSocket(this.wsApi + "/api/user/sync?lang=" + moment.locale() + "&count=" + this.count)
      this.count++
      this.ws.onerror = (error) => {
        dump("WebSocket error:", error)
      }
      this.ws.onopen = (e: Event): void => {
        this.timeConnect = 0
        this.isOpen = true
        dump("Service connected")
        this.Send("Authorization", this.plugin.settings.apiToken)
        dump("Service authorization")
        this.OnlineStatusCheck()
      }
      this.ws.onclose = (e) => {
        this.isAuth = false
        this.isOpen = false
        window.clearInterval(this.checkConnection)
        if (e.reason == "AuthorizationFaild") {
          new Notice("Remote Service Connection Closed: " + e.reason)
        } else if (e.reason == "ClientClose") {
          new Notice("Remote Service Connection Closed: " + e.reason)
        }
        if (this.isRegister && (e.reason != "AuthorizationFaild" && e.reason != "ClientClose")) {
          this.checkReConnect()
        }
        dump("Service close")
      }
      this.ws.onmessage = (event) => {
        // 使用字符串的 indexOf 找到第一个分隔符的位置
        let msgData: string = event.data
        let msgAction: string = ""
        const index = event.data.indexOf("|")
        if (index !== -1) {
          msgData = event.data.slice(index + 1)
          msgAction = event.data.slice(0, index)
        }
        const data = JSON.parse(msgData)
        if (msgAction == "Authorization") {
          if (data.code == 0 || data.code > 200) {
            new Notice("Service Authorization Error: Code=" + data.code + " Msg=" + data.msg + data.details)
            return
          } else {
            this.isAuth = true
            dump("Service authorization success")
            this.StartHandle()
          }
        }
        if (data.code == 0 || data.code > 200) {
          new Notice("Service Error: Code=" + data.code + " Msg=" + data.msg + data.details)
        } else {
          const handler = syncReceiveMethodHandlers.get(msgAction)
          if (handler) {
            handler(data.data, this.plugin)
          }
        }
      }
    }
  }
  public unRegister() {
    window.clearInterval(this.checkConnection)
    window.clearTimeout(this.checkReConnectTimeout)
    this.isOpen = false
    this.isAuth = false
    this.isRegister = false
    if (this.ws) {
      this.ws.close(1000, "unRegister")
    }
    dump("Service unregister")
  }

  //ddd
  public checkReConnect() {
    window.clearTimeout(this.checkReConnectTimeout)
    if (this.timeConnect > MAX_RECONNECT_ATTEMPTS) {
      return
    }
    if (this.ws && this.ws.readyState === WebSocket.CLOSED) {
      this.timeConnect++
      this.checkReConnectTimeout = window.setTimeout(() => {
        dump("Service waiting reconnect: " + this.timeConnect)
        this.register()
      }, RECONNECT_BASE_DELAY * this.timeConnect)
    }
  }
  public StartHandle() {
    SyncAllFiles(this.plugin)
  }

  public OnlineStatusCheck() {
    // 检查 WebSocket 连接是否打开
    this.checkConnection = window.setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    }, CONNECTION_CHECK_INTERVAL)
  }

  public async MsgSend(action: string, data: unknown, type: string = "text", isSync: boolean = false) {
    // 循环检查 WebSocket 连接是否打开
    while (this.isAuth != true) {
      if (!this.isRegister) return
      dump("Service not auth, msgsend waiting...")
      await sleep(WEBSOCKET_RETRY_DELAY) // 每隔一秒重试一次
    }
    // 检查是否有同步任务正在进行中
    while (isSync == false && this.isSyncAllFilesInProgress == true) {
      dump(action)
      if (!this.isRegister) {
        return
      }
      dump("Sync task inprogress, msgsend waiting...")
      await sleep(WEBSOCKET_RETRY_DELAY) // 每隔一秒重试一次
    }
    this.Send(action, data, type)
  }

  public async Send(action: string, data: unknown, type: string = "text") {
    while (this.ws.readyState !== WebSocket.OPEN) {
      if (!this.isRegister) return
      dump("Service not connected, msgsend waiting...")
      await sleep(WEBSOCKET_RETRY_DELAY) // 每隔一秒重试一次
    }
    if (type == "text") {
      this.ws.send(action + "|" + data)
    } else if (type == "json") {
      this.ws.send(action + "|" + JSON.stringify(data))
    }
  }
}