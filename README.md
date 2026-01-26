[简体中文](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-CN.md) / [English](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/README.md) / [日本語](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.ja.md) / [한국어](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.ko.md) / [繁體中文](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-TW.md)

If you have any questions, please create an [issue](https://github.com/haierkeys/obsidian-fast-note-sync/issues/new), or join the Telegram group for help: [https://t.me/obsidian_users](https://t.me/obsidian_users)


<h1 align="center">Fast Note Sync For Obsidian</h1>

<p align="center">
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/releases"><img src="https://img.shields.io/github/release/haierkeys/obsidian-fast-note-sync?style=flat-square" alt="release"></a>
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/releases"><img src="https://img.shields.io/github/v/tag/haierkeys/obsidian-fast-note-sync?label=release-alpha&style=flat-square" alt="alpha-release"></a>
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/LICENSE"><img src="https://img.shields.io/github/license/haierkeys/obsidian-fast-note-sync?style=flat-square" alt="license"></a>
    <img src="https://img.shields.io/badge/Language-TypeScript-00ADD8?style=flat-square" alt="TypeScript">
</p>



<p align="center">
  <strong>Fast, stable, efficient, and deployable anywhere Obsidian note sync & backup plugin</strong>
  <br>
  <em>Privately deployable, focusing on providing Obsidian users with an unobtrusive, silky smooth, multi-terminal real-time sync & backup plugin. Supports Mac, Windows, Android, iOS platforms, and provides multi-language support.</em>
</p>

<p align="center">
  Requires an independent server: <a href="https://github.com/haierkeys/fast-note-sync-service">Fast Note Sync Service</a>
</p>

<div align="center">
    <img src="https://github.com/user-attachments/assets/8e61d99e-6f76-49b1-a03e-c952ad9e21b0" alt="fast-note-sync-service-preview" width="800" />
</div>


## ✨ Features

- **Minimal Configuration**: No tedious settings required, just paste the remote service configuration to use it out of the box.
- **Real-time Note Sync**: Automatically listens to and syncs all note creation, update, and deletion operations within the Vault.
- **Full Attachment Support**: Real-time synchronization of various non-setting files such as images, videos, and audio.
    > ⚠️ **Note**: Requires v1.0+, server v0.9+. Please control the attachment file size, as large files may cause synchronization delay.
- **Settings Sync**: Provides configuration synchronization function, supporting configuration synchronization between multiple devices, saying goodbye to the pain of manually copying configuration files to multiple devices.
    > ⚠️ **Note**: Requires v1.4+, server v1.0+. Currently in the testing phase, please use with caution.
- **Server Version Check**: Displays the version information of the server, making it convenient to understand the status of the server.
- **Multi-device Sync**: Supports Mac, Windows, Android, iOS, and other platforms.
- **Note History**: Provides note history function. You can view all historical modified versions of notes on the plugin side or server WebGui, and you can view modification details or copy historical version content.
- **Offline Conflict Optimization**: For note modifications on offline devices, add conflict resolution strategies to avoid loss of note content caused by only keeping the latest updates.
- **Version Detection**: Provides version detection function, you can quickly get the latest version information of the plugin/server for quick upgrade.
- **Cloud Attachment Preview**: Provides online preview function for attachments. Attachments do not need to be synchronized to the local device, thus saving local storage space. Combined with the exclusion settings of the plugin, you can directly use third-party resource libraries (such as WebDav) for certain types of attachments without uploading through the server.

## 🗺️ Roadmap

We are continuously improving, here are the future development plans:
- [ ] **Note Sharing**: Generate share links for your cloud notes to easily share your results with others.
- [ ] **End-to-End Encryption**: Provide end-to-end encryption to ensure your note data is safe wherever it is saved.
- [ ] **Cloud Storage Backup**: Provide cloud storage backup function to protect your note data from loss.

- [ ] **AI Notes**: Explore AI+ note innovations, waiting for your valuable suggestions.

> **If you have suggestions for improvement or new ideas, feel free to share them with us by submitting an issue — we will carefully evaluate and adopt appropriate suggestions.**

## 💰 Sponsorship & Support

- If you find this plugin very useful and want it to continue developing, please support us in the following ways. Thank you for your support of open-source software:

  | Ko-fi *Non-China region*                                                                                             |    | WeChat Pay *China region*                                          |
  |----------------------------------------------------------------------------------------------------------------------|----|--------------------------------------------------------------------|
  | [<img src="https://ik.imagekit.io/haierkeys/kofi.png" alt="BuyMeACoffee" height="150">](https://ko-fi.com/haierkeys) | or | <img src="https://ik.imagekit.io/haierkeys/wxds.png" height="150"> |

- Supported list:
  - https://github.com/haierkeys/fast-note-sync-service/blob/master/docs/Support.zh-CN.md


## 🚀 Quick Start

1. Install Plugin (Choose one)
   - **Official Store**: <s>Open Obsidian Community Plugins, search for **Fast Note Sync** to install</s>
        > ⚠️ Plugin is not yet on the official store and cannot be searched. Please install manually.
   - **Manual Installation**: Visit https://github.com/haierkeys/obsidian-fast-note-sync/releases to download the installation package, extract it to the Obsidian plugin directory **.obsidian/plugins**
   - Use **BRAT** to install (Supports mobile installation): In the Obsidian Community Plugins, search for and install the [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin, go to the plugin settings, click **Add beta plugin** and paste https://github.com/haierkeys/obsidian-fast-note-sync
2. Open plugin settings, click the **Paste Remote Config** button, and paste the remote service configuration into the input box.


## 📦 Server Deployment

For backend service settings, please refer to: [Fast Note Sync Service](https://github.com/haierkeys/fast-note-sync-service).