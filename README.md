[简体中文](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-CN.md) / [English](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/README.md) / [日本語](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.ja.md) / [한국어](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.ko.md) / [繁體中文](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-TW.md)


<h1 align="center">Fast Note Sync For Obsidian</h1>

<p align="center">
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/releases"><img src="https://img.shields.io/github/release/haierkeys/obsidian-fast-note-sync?style=flat-square" alt="release"></a>
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/releases"><img src="https://img.shields.io/github/v/tag/haierkeys/obsidian-fast-note-sync?label=release-alpha&style=flat-square" alt="alpha-release"></a>
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/LICENSE"><img src="https://img.shields.io/github/license/haierkeys/obsidian-fast-note-sync?style=flat-square" alt="license"></a>
    <img src="https://img.shields.io/badge/Language-TypeScript-00ADD8?style=flat-square" alt="TypeScript">
</p>



<p align="center">
  <strong>Fast, stable, efficient, and flexible Obsidian Note Sync & Backup Plugin</strong>
  <br>
  <em>Supports self-hosting, providing Obsidian users with a seamless, smooth, multi-platform real-time sync & backup experience. Supports Mac, Windows, Android, iOS, and more, with multi-language support.</em>
</p>

<p align="center">
  Requires a standalone server: <a href="https://github.com/haierkeys/fast-note-sync-service">Fast Note Sync Service</a>
</p>

<div align="center">
    <img src="https://github.com/user-attachments/assets/8e61d99e-6f76-49b1-a03e-c952ad9e21b0" alt="fast-note-sync-service-preview" width="800" />
</div>


## ✨ Features

- **Minimal Configuration**: No complex setup required. Just paste the remote service configuration and you're good to go.
- **Real-time Note Sync**: Automatically listens to and syncs all note creation, updates, and deletions within the Vault.
- **Full Attachment Support**: Syncs images, videos, audio, and other non-setting files in real-time.
    > ⚠️ **Note**: Requires v1.0+, server v0.9+. Please keep attachment file sizes under control; large files may cause sync delays.
- **Config Sync**: Provides a configuration synchronization feature that supports syncing settings across multiple devices, eliminating the hassle of manually copying configuration files.
    > ⚠️ **Note**: Requires v1.4+, server v1.0+. Currently in beta; please use with caution.
- **Server Version Check**: Displays server version information to keep you informed about the server status.
- **Multi-platform Sync**: Supports Mac, Windows, Android, iOS, and more.

## 🗺️ Roadmap

We are continuously improving. Here are our future plans:

- [ ] **Note History**: Provides note history snapshots. You can view note version history and rollback to previous versions from the plugin or the server WebGui.
- [ ] **Cloud Backup Status**: View cloud storage backup status anytime to stay updated with the latest backup information.
- [ ] **Note Sharing**: Generate shareable links for your cloud notes to easily share your work with others.
- [ ] **AI Notes**: Explore innovative AI-powered note-taking features. We look forward to your suggestions.

> **If you have suggestions for improvement or new ideas, feel free to share them with us by submitting an issue—we will carefully evaluate and adopt suitable suggestions.**

## 💰 Price

- If you find this plugin useful and want to support its continued development, you can support me here:
[<img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" alt="BuyMeACoffee" width="100">](https://ko-fi.com/haierkeys)


## 🚀 Quick Start

1. Install the plugin (choose one):
   - **Official Store**: <s>Open Obsidian community plugin market, search for **Fast Note Sync** to install</s>
        > ⚠️ The plugin is not yet listed on the official store; please install manually.
   - **Manual Installation**: Visit https://github.com/haierkeys/obsidian-fast-note-sync/releases to download the installation package, and extract it to the Obsidian plugin directory **.obsidian/plugins**.
2. Open plugin settings, click the **Paste Remote Config** button, and paste your remote service configuration into the input box.


## 📦 Server Deployment

For backend service setup, please refer to: [Fast Note Sync Service](https://github.com/haierkeys/fast-note-sync-service).