[简体中文](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-CN.md) / [English](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/README.md) / [日本語](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.ja.md) / [한국어](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.ko.md) / [繁體中文](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-TW.md)


<h1 align="center">Fast Note Sync For Obsidian</h1>

<p align="center">
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/releases"><img src="https://img.shields.io/github/release/haierkeys/obsidian-fast-note-sync?style=flat-square" alt="release"></a>
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/releases"><img src="https://img.shields.io/github/v/tag/haierkeys/obsidian-fast-note-sync?label=release-alpha&style=flat-square" alt="alpha-release"></a>
    <a href="https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/LICENSE"><img src="https://img.shields.io/github/license/haierkeys/obsidian-fast-note-sync?style=flat-square" alt="license"></a>
    <img src="https://img.shields.io/badge/Language-TypeScript-00ADD8?style=flat-square" alt="TypeScript">
</p>



<p align="center">
  <strong>빠르고 안정적이며 효율적인 Obsidian 노트 동기화 및 백업 플러그인 (자유로운 배포 가능)</strong>
  <br>
  <em>개인 서버 구축이 가능하며, Obsidian 사용자에게 끊김 없고 매끄러운 다중 기기 실시간 동기화 및 백업 경험을 제공하는 데 집중합니다. Mac, Windows, Android, iOS 등 다양한 플랫폼을 지원하며 다국어를 제공합니다.</em>
</p>

<p align="center">
  별도의 서버 서비스가 필요합니다: <a href="https://github.com/haierkeys/fast-note-sync-service">Fast Note Sync Service</a>
</p>

<div align="center">
    <img src="https://github.com/user-attachments/assets/8e61d99e-6f76-49b1-a03e-c952ad9e21b0" alt="fast-note-sync-service-preview" width="800" />
</div>


## ✨ 주요 기능

- **최소한의 설정**: 번거로운 과정 없이 원격 서비스 설정값만 붙여넣으면 즉시 사용 가능합니다.
- **실시간 노트 동기화**: Vault(보관소) 내 모든 노트의 생성, 수정, 삭제 작업을 자동으로 감지하고 동기화합니다.
- **모든 첨부파일 지원**: 이미지, 비디오, 오디오 등 설정 파일을 제외한 모든 파일을 실시간으로 동기화합니다.
    > ⚠️ **주의**: 플러그인 v1.0+, 서버 v0.9+ 이상이 필요합니다. 첨부파일 크기가 너무 크면 동기화 지연이 발생할 수 있습니다.
- **설정 동기화**: 여러 기기 간의 설정을 동기화하는 기능을 제공합니다. 더 이상 수동으로 설정 파일을 복사할 필요가 없습니다.
    > ⚠️ **주의**: 플러그인 v1.4+, 서버 v1.0+ 이상이 필요합니다. 현재 베타 테스트 중이므로 주의해서 사용해 주세요.
- **서버 버전 확인**: 서버의 버전 정보를 표시하여 서버 상태를 쉽게 파악할 수 있습니다.
- **다중 플랫폼 지원**: Mac, Windows, Android, iOS 등 다양한 플랫폼을 지원합니다.

## 🗺️ 로드맵 (Roadmap)

우리는 지속적으로 기능을 개선하고 있으며, 향후 계획은 다음과 같습니다:

- [ ] **노트 기록**: 노트 스냅샷 기능을 제공합니다. 플러그인이나 서버 WebGui에서 노트 버전 기록을 확인하고 이전 버전으로 되돌릴 수 있습니다.
- [ ] **클라우드 백업 상태**: 언제든지 클라우드 저장소의 백업 상태를 확인할 수 있는 기능을 제공합니다.
- [ ] **노트 공유 기능**: 클라우드에 동기화된 노트에 대한 공유 링크를 생성하여 다른 사람과 쉽게 공유할 수 있습니다.
- [ ] **AI 노트**: AI 기반의 혁신적인 노트 활용 방안을 탐색 중이며, 여러분의 소중한 제안을 기다리고 있습니다.

> **개선 사항이나 새로운 아이디어가 있다면 issue를 통해 공유해 주세요. 소중한 의견을 검토하여 반영하도록 노력하겠습니다.**

## 💰 후원

- 이 플러그인이 유용하고 지속적인 개발을 응원하고 싶다면 여기서 후원하실 수 있습니다:
[<img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" alt="BuyMeACoffee" width="100">](https://ko-fi.com/haierkeys)


## 🚀 빠른 시작

1. 플러그인 설치 (두 가지 방법 중 선택)
   - **공식 스토어**: <s>Obsidian 커뮤니티 플러그인 마켓에서 **Fast Note Sync** 검색 후 설치</s>
        > ⚠️ 아직 공식 스토어에 등록되지 않았으므로 검색이 불가능합니다. 수동으로 설치해 주세요.
   - **수동 설치**: https://github.com/haierkeys/obsidian-fast-note-sync/releases 에서 설치 파일을 다운로드하여 Obsidian 플러그인 디렉터리(**.obsidian/plugins**)에 압축을 풉니다.
2. 플러그인 설정을 열고 **원격 설정 붙여넣기** 버튼을 클릭한 뒤, 원격 서비스 설정을 입력창에 붙여넣습니다.


## 📦 서버 배포

백엔드 서버 설정은 [Fast Note Sync Service](https://github.com/haierkeys/fast-note-sync-service)를 참고하세요.
