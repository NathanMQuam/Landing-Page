import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/landing-page/',
  plugins: [vue()],
  build: {
    outDir: 'build',
    sourcemap: false
  },
  server: {
    port: 3000
  }
})
