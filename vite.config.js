import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// インライン script はホストの CSP でブロックされうるため、分割バンドルを使う。
// assets/ サブフォルダを作らない（一部の FTP はディレクトリ作成に失敗し JS が上がらない）。
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    assetsDir: '',
  },
})
