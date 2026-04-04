# じゅんぐりタスク

シーケンシャルループタスク管理アプリ。タスクを順番にこなし、完了したら末尾へ回すことで、考えることなく淡々と進められるフローツールです。

## 特徴

- **シンプル** … 締切・優先度・タグなし。迷わない
- **ループ** … 完了したタスクは末尾へ。リストは無限ループ
- **複数リスト** … 最大3つまで、それぞれ独立
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

## 技術スタック

- React 18 (Hooks)
- Vite
- Tailwind CSS
- localStorage（バックエンドなし）

## 本番デプロイ（ロリポップ）

公開URL: **https://junguritask.digitalsenior.jp/**

`main` ブランチへ push すると GitHub Actions（`.github/workflows/deploy-lolipop.yml`）が `dist/` を FTP でアップロードします。

### GitHub Secrets（リポジトリの Settings → Secrets and variables → Actions）

| Name | 内容 |
|------|------|
| `FTP_SERVER` | ロリポップの FTP サーバー名（コントロールパネル表記） |
| `FTP_USERNAME` | FTP ユーザー名 |
| `FTP_PASSWORD` | FTP パスワード |
| `FTP_SERVER_DIR` | （任意）アップロード先フォルダ。FTP でログインしたときの **junguritask のドキュメントルート** までのパス。例: サブドメイン用フォルダが `public_html/junguritask.digitalsenior.jp/` ならその相対パス。ログイン直後がもうそのフォルダなら空のままか、パネルの案内に従ってください。 |

サブドメインのドキュメントルートはロリポップの「ドメイン設定」「ファイルマネージャー」の説明で確認してください。

### 補足

- このURLはサブドメインの **ルート** で表示される想定のため、`vite.config.js` の `base` は `/` のままです。
- 初回だけ手動で FTP 接続し、アップロード先フォルダが合っているか確認すると安全です。
