import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-vercel-json',
      closeBundle() {
        copyFileSync('vercel.json', 'dist/vercel.json')
      }
    }
  ],
})
