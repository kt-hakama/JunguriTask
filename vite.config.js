import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

/** file:// で開くとき、type=module がブロックされるブラウザ向けに外す（バンドルは import なしの1塊） */
function scriptWithoutModuleType() {
  return {
    name: 'script-without-module-type',
    enforce: 'post',
    generateBundle(_opts, bundle) {
      for (const name of Object.keys(bundle)) {
        const chunk = bundle[name]
        if (chunk.type === 'asset' && name.endsWith('.html') && typeof chunk.source === 'string') {
          chunk.source = chunk.source.replace(/<script type="module"([^>]*)>/g, '<script$1>')
        }
      }
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteSingleFile({ removeViteModuleLoader: true }),
    scriptWithoutModuleType(),
  ],
})
