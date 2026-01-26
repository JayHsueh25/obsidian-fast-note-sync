[简体中文](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-CN.md) / [English](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/README.md) / [日本語](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.ja.md) / [한국어](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.ko.md) / [繁體中文](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-TW.md)

質問がある場合は、[issue](https://github.com/haierkeys/obsidian-fast-note-sync/issues/new)を作成するか、Telegramグループに参加して助けを求めてください: [https://t.me/obsidian_users](https://t.me/obsidian_users)


<h1 align="center">Fast Note Sync For Obsidian</h1>

<p align="center">
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/releases"><img src="https://img.shields.io/github/release/haierkeys/obsidian-fast-note-sync?style=flat-square" alt="release"></a>
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/releases"><img src="https://img.shields.io/github/v/tag/haierkeys/obsidian-fast-note-sync?label=release-alpha&style=flat-square" alt="alpha-release"></a>
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/LICENSE"><img src="https://img.shields.io/github/license/haierkeys/obsidian-fast-note-sync?style=flat-square" alt="license"></a>
    <img src="https://img.shields.io/badge/Language-TypeScript-00ADD8?style=flat-square" alt="TypeScript">
</p>



<p align="center">
  <strong>高速、安定、効率的で、どこにでもデプロイ可能な Obsidian ノート同期＆バックアッププラグイン</strong>
  <br>
  <em>プライベートデプロイが可能で、Obsidian ユーザーに邪魔にならず、シルクのように滑らかで、マルチデバイス間のリアルタイム同期を提供するノート同期＆バックアッププラグイン。Mac、Windows、Android、iOS などのプラットフォームをサポートし、多言語対応を提供します。</em>
</p>

<p align="center">
  独立したサーバーが必要です：<a href="https://github.com/haierkeys/fast-note-sync-service">Fast Note Sync Service</a>
</p>

<div align="center">
    <img src="https://github.com/user-attachments/assets/8e61d99e-6f76-49b1-a03e-c952ad9e21b0" alt="fast-note-sync-service-preview" width="800" />
</div>


## ✨ プラグイン機能

- **最小限の設定**: 煩雑な設定は不要です。リモートサービスの設定を貼り付けるだけで、すぐにお使いいただけます。
- **ノートのリアルタイム同期**: Vault（リポジトリ）内のすべてのノートの作成、更新、削除操作を自動的に監視し、同期します。
- **添付ファイルの完全サポート**: 画像、ビデオ、オーディオなどの各種非設定ファイルをリアルタイムで同期します。
    > ⚠️ **注意**: v1.0+、サーバー v0.9+ が必要です。大きなファイルは同期遅延の原因となる可能性があるため、添付ファイルのサイズを調整してください。
- **設定の同期**: 設定同期機能を提供し、複数のデバイス間での設定同期をサポートします。多端デバイスへの設定ファイルのコピー作業から解放されます。
    > ⚠️ **注意**: v1.4+、サーバー v1.0+ が必要です。現在テスト段階ですので、注意して使用してください。
- **サーバーバージョンの確認**: サーバーのバージョン情報を表示し、サーバーの状態を簡単に把握できます。
- **マルチデバイス同期**: Mac、Windows、Android、iOS などのプラットフォームをサポートします。
- **ノートの履歴**: ノートの履歴機能を提供します。プラグイン側またはサーバーの WebGui から、ノートのすべての変更履歴バージョンを確認できます。変更詳細の確認や履歴バージョンの内容のコピーが可能です。
- **オフラインデバイスのノート衝突の最適化**: オフラインデバイスでのノート変更に対して、衝突解決戦略を追加し、最新の更新のみを保持することによるノート内容の紛失を回避します。
- **バージョン検出**: バージョン検出機能を提供し、プラグイン/サーバーの最新バージョン情報を素早く取得して、スムーズなアップグレードを支援します。
- **添付ファイルのクラウドプレビュー**: 添付ファイルのオンラインプレビュー機能を提供します。添付ファイルをローカルデバイスに同期する必要がなく、ローカルストレージスペースを節約できます。プラグインの除外設定と組み合わせることで、特定の種類の添付ファイルに対して、サーバーを経由せずにサードパーティのリソースライブラリ（WebDav など）を直接使用することができます。

## 🗺️ ロードマップ

継続的に改善を行っています。今後の開発計画は以下の通りです：
- [ ] **ノート共有機能**: クラウドノートの共有リンクを生成し、成果を簡単に他者と共有できるようにします。
- [ ] **エンドツーエンド暗号化**: エンドツーエンド暗号化機能を提供し、ノートデータがどこに保存されても安全であることを保証します。
- [ ] **クラウドストレージバックアップ**: クラウドストレージバックアップ機能を提供し、ノートデータの紛失を防ぎます。

- [ ] **AIノート**: AI+ ノートに関連する革新的な遊び方を模索しています。皆様からの貴重な提案をお待ちしております。

> **改善の提案や新しいアイデアがある場合は、issue を送信して共有してください。適切な提案を検討し、採用させていただきます。**

## 💰 スポンサーとサポート

- このプラグインが非常に役立つと感じ、開発の継続を希望される場合は、以下の方法でサポートをお願いします。オープンソースソフトウェアへのご支援に感謝いたします：

  | Ko-fi *中国以外*                                                                                                     |    | WeChat Pay *中国*                                                  |
  |----------------------------------------------------------------------------------------------------------------------|----|--------------------------------------------------------------------|
  | [<img src="https://ik.imagekit.io/haierkeys/kofi.png" alt="BuyMeACoffee" height="150">](https://ko-fi.com/haierkeys) | or | <img src="https://ik.imagekit.io/haierkeys/wxds.png" height="150"> |

- サポート済みリスト：
  - https://github.com/haierkeys/fast-note-sync-service/blob/master/docs/Support.zh-CN.md


## 🚀 クイックスタート

1. プラグインのインストール（いずれかを選択）
   - **公式ストア**: <s>Obsidian コミュニティプラグイン市場を開き、**Fast Note Sync** を検索してインストールします</s>
        > ⚠️ プラグインはまだ公式ストアに掲載されていないため、検索できません。手動でインストールしてください。
   - **手動インストール**: https://github.com/haierkeys/obsidian-fast-note-sync/releases にアクセスしてインストールパッケージをダウンロードし、Obsidian プラグインディレクトリ **.obsidian/plugins** に展開します。
   - **BRAT** を使用してインストール（モバイル対応）: Obsidian コミュニティプラグイン市場で [BRAT](https://github.com/TfTHacker/obsidian42-brat) プラグインを検索してインストールし、プラグイン設定画面で **Add beta plugin** をクリックして https://github.com/haierkeys/obsidian-fast-note-sync を貼り付けます。
2. プラグイン設定を開き、**Paste Remote Config** ボタンをクリックして、リモートサービスの設定を入力ボックスに貼り付けます。


## 📦 サーバーのデプロイ

バックエンドサーバーの設定については、以下を参照してください：[Fast Note Sync Service](https://github.com/haierkeys/fast-note-sync-service)。
