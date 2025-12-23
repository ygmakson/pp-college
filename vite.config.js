import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import SvgLoader from 'vite-svg-loader'
import path from 'path'


export default defineConfig({
  base: '/pp-college/',
  plugins: [
    vue(),
    SvgLoader()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {

      }
    }
  }
})