[简体中文](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-CN.md) / [English](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/README.md) / [日本語](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.ja.md) / [한국어](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.ko.md) / [繁體中文](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-TW.md)


<h1 align="center">Fast Note Sync For Obsidian</h1>

<p align="center">
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/releases"><img src="https://img.shields.io/github/release/haierkeys/obsidian-fast-note-sync?style=flat-square" alt="release"></a>
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/releases"><img src="https://img.shields.io/github/v/tag/haierkeys/obsidian-fast-note-sync?label=release-alpha&style=flat-square" alt="alpha-release"></a>
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/LICENSE"><img src="https://img.shields.io/github/license/haierkeys/obsidian-fast-note-sync?style=flat-square" alt="license"></a>
    <img src="https://img.shields.io/badge/Language-TypeScript-00ADD8?style=flat-square" alt="TypeScript">
</p>



<p align="center">
  <strong>高速、安定、効率的、柔軟なデプロイが可能な Obsidian ノート同期＆バックアッププラグイン</strong>
  <br>
  <em>自前デプロイが可能で、Obsidian ユーザーにシームレスでスムーズなマルチデバイス・リアルタイム同期＆バックアップ体験を提供することに注力しています。Mac、Windows、Android、iOS などのプラットフォームをサポートし、多言語対応も提供しています。</em>
</p>

<p align="center">
  独立したサーバーが必要です：<a href="https://github.com/haierkeys/fast-note-sync-service">Fast Note Sync Service</a>
</p>

<div align="center">
    <img src="https://github.com/user-attachments/assets/8e61d99e-6f76-49b1-a03e-c952ad9e21b0" alt="fast-note-sync-service-preview" width="800" />
</div>


## ✨ 機能

- **極限までシンプルな設定**: 複雑な設定は不要です。リモートサービスの設定を貼り付けるだけで、すぐにご利用いただけます。
- **ノートのリアルタイム同期**: Vault（倉庫）内のすべてのノートの作成、更新、削除操作を自動的に監視し、同期します。
- **各種添付ファイルの全面サポート**: 画像、動画、音声などのあらゆる非設定ファイルをリアルタイムで同期します。
    > ⚠️ **注意**: v1.0+、サーバー v0.9+ が必要です。添付ファイルのサイズにご注意ください。大きなファイルは同期の遅延を引き起こす可能性があります。
- **設定同期**: 設定同期機能を提供し、複数のデバイス間での設定同期をサポートします。各デバイスに設定ファイルを手動でコピーする手間から解放されます。
    > ⚠️ **注意**: v1.4+、サーバー v1.0+ が必要です。現在テスト段階ですので、慎重にご利用ください。
- **サーバーバージョンの確認**: サーバーのバージョン情報を表示し、サーバーのステータスを簡単に把握できます。
- **マルチデバイス同期**: Mac、Windows、Android、iOS などのプラットフォームをサポートしています。

## 🗺️ ロードマップ (Roadmap)

継続的に改善を行っています。以下は今後の開発計画です：

- [ ] **ノート履歴**: ノート履歴スナップショット機能を提供します。プラグイン側またはサーバー側のWebGuiから、ノートのバージョン履歴を確認し、以前のバージョンに戻すことができます。
- [ ] **クラウドバックアップステータス**: クラウドストレージのバックアップ状態をいつでも確認できる機能で、最新のバックアップ状況を把握しやすくなります。
- [ ] **ノート共有機能**: クラウド上のノートに共有リンクを生成し、自分の成果を簡単に他人に共有できるようになります。
- [ ] **AIノート**: AI+ノートに関連する革新的な遊び方を探求しています。皆様からの貴重なご意見をお待ちしております。

> **改善の提案や新しいアイデアがありましたら、issue を通じてお気軽にご共有ください。内容を慎重に検討し、適切な提案を採用させていただきます。**

## 💰 価格

- このプラグインが役立つと感じ、継続的な開発をサポートしたい場合は、こちらから私をサポートできます：
[<img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" alt="BuyMeACoffee" width="100">](https://ko-fi.com/haierkeys)


## 🚀 クイックスタート

1. プラグインをインストールする（いずれかを選択）
   - **官方商店**: <s>Obsidian コミュニティプラグイン市場を開き、**Fast Note Sync** を検索してインストールします</s>
        > ⚠️ まだ公式ストアに掲載されていないため、検索できません。手動でインストールしてください。
   - **手動インストール**: https://github.com/haierkeys/obsidian-fast-note-sync/releases にアクセスしてインストールパッケージをダウンロードし、Obsidian のプラグインディレクトリ **.obsidian/plugins** に解凍します。
2. プラグインの設定を開き、「**リモート設定を貼り付け**」ボタンをクリックして、リモートサービスの設定を入力欄に貼り付けます。


## 📦 サーバーのデプロイ

バックエンドサービスの設定については、[Fast Note Sync Service](https://github.com/haierkeys/fast-note-sync-service) を参照してください。
