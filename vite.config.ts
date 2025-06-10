import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
            return `images/[name][extname]`
          }
          return `assets/[name][extname]`
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  publicDir: 'public'
})
