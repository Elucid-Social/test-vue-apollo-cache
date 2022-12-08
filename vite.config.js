import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    // VitePWA({
    //   registerType: 'prompt',
    //   devOptions: {
    //     enabled: true
    //   }
    // })
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  server: { port: 1234 },
  preview: { open: true },
  build: { target: 'esnext' }
})
