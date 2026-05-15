import { useState, useEffect, useRef } from "react";
import { KofiImage, WXImage } from "src/lib/icons";
import { dump } from "src/lib/helps";
import { setIcon } from "obsidian";
import FastSync from "src/main";

import { UserDTO } from "../lib/api";
import { $ } from "../i18n/lang";


async function getClipboardContent(plugin: FastSync): Promise<void> {
  const clipboardReadTipSave = async (api: string, apiToken: string, Vault: string, tip: string) => {
    if (plugin.settings.api != api || plugin.settings.apiToken != apiToken) {
      plugin.wsSettingChange = true
    }
    plugin.settings.api = api
    plugin.settings.apiToken = apiToken
    plugin.settings.vault = Vault
    plugin.clipboardReadTip = tip

    plugin.localStorageManager.clearSyncTime()
    await plugin.saveSettings()
    plugin.settingTab.display()

    window.setTimeout(() => {
      plugin.clipboardReadTip = ""
      plugin.settingTab.display()
    }, 2000)
  }

  //
  const clipboardReadTipTipSave = async (tip: string) => {
    plugin.clipboardReadTip = tip

    await plugin.saveSettings()
    plugin.settingTab.display()

    window.setTimeout(() => {
      plugin.clipboardReadTip = ""
      plugin.settingTab.display()
    }, 2000)
  }

  try {
    // 检查浏览器是否支持 Clipboard API
    if (!navigator.clipboard) {
      return
    }

    // 获取剪贴板文本内容
    const text = await navigator.clipboard.readText()

    // 检查是否为 JSON 格式
    const parsedData = JSON.parse(text) as Record<string, unknown>;
    // 检查是否为对象且包含 api 和 apiToken
    if (typeof parsedData === "object" && parsedData !== null) {
      const hasApi = "api" in parsedData
      const hasApiToken = "apiToken" in parsedData
      const vault = "vault" in parsedData

      if (hasApi && hasApiToken && vault) {
        void clipboardReadTipSave(parsedData.api as string, parsedData.apiToken as string, parsedData.vault as string, $("setting.remote.paste_success"))
        return
      }
    }
    void clipboardReadTipTipSave($("setting.remote.no_config"))
    return
  } catch (err) {
    dump(err)
    void clipboardReadTipTipSave($("setting.remote.no_config"))
    return
  }
}

const handleClipboardClick = (plugin: FastSync) => {
  getClipboardContent(plugin).catch(err => { dump(err); });
};

export const SettingsView = ({ plugin }: { plugin: FastSync }) => {
  const [isConnected, setIsConnected] = useState<boolean>(plugin.websocket.isConnected());
  const [userInfo, setUserInfo] = useState<UserDTO | null>(null);
  const [loadingUserInfo, setLoadingUserInfo] = useState<boolean>(false);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const listener = (status: boolean) => {
      setIsConnected(status);
    };

    plugin.websocket.addStatusListener(listener);
    return () => {
      plugin.websocket.removeStatusListener(listener);
    };
  }, [plugin.websocket]);

  useEffect(() => {
    if (isConnected && !userInfo && !loadingUserInfo) {
      setLoadingUserInfo(true);
      plugin.api.getUserInfo()
        .then(data => {
          setUserInfo(data);
          setLoadingUserInfo(false);
        })
        .catch(err => {
          dump("Failed to fetch user info:", err);
          setLoadingUserInfo(false);
        });
    } else if (!isConnected && (userInfo || loadingUserInfo)) {
      setUserInfo(null);
      setLoadingUserInfo(false);
    }
  }, [isConnected, plugin.api, userInfo, loadingUserInfo]);

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.empty();
      setIcon(iconRef.current, isConnected ? "wifi" : "wifi-off");
    }
  }, [isConnected]);

  // 现代化的 Markdown 表格渲染，移动端自动转为卡片列表
  const renderMarkdownTable = (content: string) => {
    const lines = content.split('\n');
    const tableData = lines.filter(line => line.trim().startsWith('|') && line.trim().endsWith('|'));
    if (tableData.length < 2) return null;

    const parseRow = (row: string) => row.split('|').filter((_, i, arr) => i > 0 && i < arr.length - 1).map(s => s.trim());
    parseRow(tableData[0]);
    const bodyRows = tableData.slice(2).map(parseRow);

    // 解析链接并在新窗口打开
    const handleMethodClick = (htmlContent: string) => {
      const match = htmlContent.match(/href=['"]([^'"]+)['"]/);
      if (match && match[1]) {
        window.open(match[1], '_blank');
      }
    };

    return (
      <div className="fns-setup-methods">
        {bodyRows.map((row, i) => (
          <div key={i} className="fns-method-card" onClick={() => handleMethodClick(row[1])}>
            <div className="fns-method-icon">
              <span dangerouslySetInnerHTML={{ __html: i === 0 ? "🛠️" : "☁️" }} />
            </div>
            <div className="fns-method-info">
              <div className="fns-method-title">{row[0]}</div>
              <div className="fns-method-desc" dangerouslySetInnerHTML={{ __html: row[1] }} />
            </div>
            <div className="fns-method-arrow">→</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="fns-remote-config-container">
      <div className="fns-setup-group-card">
        <div className="fns-setup-content">
          {renderMarkdownTable($("setting.remote.setup_table"))}

          <div className="fns-action-group">
            <button className="fns-premium-btn" onClick={() => handleClipboardClick(plugin)}>
              <span className="fns-btn-icon">📋</span>
              {$("setting.remote.paste_config")}
            </button>

            <div className={`fns-status-pill ${isConnected ? 'is-connected' : 'is-disconnected'}`}>
              <div className="fns-status-dot" />
              <span className="fns-status-label">
                {isConnected ? $("setting.remote.connected") : $("setting.remote.disconnected")}
              </span>
              {isConnected && userInfo && (
                <div className="fns-status-account">
                  <span className="fns-sep">/</span>
                  <span className="fns-account-name">{userInfo.username}</span>
                  <span className="fns-uid-badge">ID:{userInfo.uid}</span>
                </div>
              )}
            </div>

            {plugin.clipboardReadTip && (
              <div className="fns-paste-toast">{plugin.clipboardReadTip}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}



export const SupportView = ({ plugin }: { plugin: FastSync }) => {
  return (
    <div className="fns-support-view-wrapper">
      <div className="fns-support-header-desc">
        {$("setting.support.desc")}
      </div>
      
      <div className="fns-support-cards-container">
        {/* Ko-fi Card */}
        <div className="fns-support-card fns-kofi-card">
          <div className="fns-support-card-header">
            <span className="fns-support-card-icon">☕</span>
            <span className="fns-support-card-title">{$("setting.support.kofi")}</span>
          </div>
          <div className="fns-support-card-body">
            <a href="https://ko-fi.com/haierkeys" target="_blank" rel="noreferrer" className="fns-support-link">
              <img src={KofiImage} className="fns-support-img-kofi" alt="Ko-fi" />
            </a>
          </div>
        </div>

        {/* WeChat Pay Card */}
        <div className="fns-support-card fns-wechat-card">
          <div className="fns-support-card-header">
            <span className="fns-support-card-icon">🧧</span>
            <span className="fns-support-card-title">{$("setting.support.wechat")}</span>
          </div>
          <div className="fns-support-card-body">
            <div className="fns-wechat-qr-wrapper">
              <img src={WXImage} className="fns-support-img-wechat" alt="WeChat Pay" />
            </div>
          </div>
        </div>
      </div>

      {/* Supporters List Section */}
      <div className="fns-supporters-list-card">
        <div className="fns-supporters-list-header">
          <span className="fns-supporters-icon">🏆</span>
          <span className="fns-supporters-title">{$("setting.support.list")}</span>
        </div>
        <div className="fns-supporters-content">
          <a href="https://github.com/haierkeys/fast-note-sync-service/blob/master/docs/Support.zh-CN.md" target="_blank" rel="noreferrer" className="fns-supporters-github-link">
            <span className="fns-github-icon">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </span>
            <span>{$("setting.support.list_link")}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
