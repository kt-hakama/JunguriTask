# じゅんぐりタスク

シーケンシャルループタスク管理アプリ。タスクを順番にこなし、完了したら末尾へ回すことで、考えることなく淡々と進められるフローツールです。

## 特徴

- **シンプル** … 締切・優先度・タグなし。迷わない
- **ループ** … 完了したタスクは末尾へ。列は無限ループ
- **複数グループ** … 最大3つまで、それぞれ独立
- **日本語UI** … やさしい表現でストレスレス

## 起動方法

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで表示されるURL（通常は http://localhost:5173 ）を開いてください。

## ビルド

```bash
npm run build
```

ビルド結果は `dist/` に出力されます。

### ビルド後の動作確認

`npm run build` では **1枚の `dist/index.html` に JS/CSS が埋め込まれた形**で出力されます（`vite-plugin-singlefile`）。

- **`dist/index.html` をダブルクリックして開く**（`file://`）でも、多くの環境で表示されます。
- より確実な確認・開発時は次のとおり。

```bash
npm run preview
```

ブラウザで **http://localhost:4173** が開きます。

- 開発中: `npm run dev`（http://localhost:5173）
- 本番に近い確認: `npm run build` のあと `npm run preview` または `dist/index.html` を直接開く

Windows では **`preview-local.bat`** をダブルクリックしてもプレビューを起動できます。

※ ブラウザや設定によっては `file://` で `localStorage` が制限されることがあります。その場合は `npm run preview` を使うか、本番 URL で確認してください。

## 技術スタック

- React 18 (Hooks)
- Vite
- Tailwind CSS
- localStorage（バックエンドなし）

## 本番デプロイ（ロリポップ）

公開URL: **https://www.digitalsenior.jp/junguritask/**

`main` ブランチへ push すると GitHub Actions（`.github/workflows/deploy-lolipop.yml`）が `dist/` を FTP でアップロードします。

### GitHub Secrets（リポジトリの Settings → Secrets and variables → Actions）

**名前は表のとおり一字一句同じにしてください**（`FTP_USER` や `ftp_username` など別名だと動きません）。

| Name | 内容 |
|------|------|
| `FTP_SERVER` | ロリポップの **FTP サーバー名（ホスト名）** のみ。例: `ftp.lolipop.jp`（`https://` は付けない） |
| `FTP_USERNAME` | **必須。** ロリポップの FTP **ユーザー名**（パネルの「FTP」に表示されるログイン名） |
| `FTP_PASSWORD` | FTP パスワード |
| `FTP_SERVER_DIR` | （任意）アップロード先フォルダ。`www.digitalsenior.jp` 用の **`junguritask/` 公開フォルダ** まで、FTP ログイン直後からの相対パス（末尾 `/`）。例: `junguritask/` または `public_html/junguritask/`（接続先の階層に合わせる）。ログイン直後がもうそのフォルダなら `./` 相当でよい。 |

`username` エラーが出るときは、**`FTP_USERNAME` という名前の Secret が存在するか**、**値が空でないか**を確認してください。

`www` 用の公開（アップロード）フォルダ `junguritask/` の場所は、ロリポップの「ドメイン設定」「ファイルマネージャー」の説明で確認してください。

### 補足

- 本番は **ドメイン直下ではなく `/junguritask/` サブフォルダ** で表示される想定のため、`vite.config.js` の `base` は **`./`（相対パス）** にしています（単一 HTML ビルドと相性がよいです）。
- 初回だけ手動で FTP 接続し、アップロード先フォルダが合っているか確認すると安全です。
