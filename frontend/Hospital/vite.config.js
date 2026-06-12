import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],
    // This fixes your local /dashboard routing while keeping Django happy in production
    base: command === 'build' ? '/static/' : '/',
    resolve: {
      dedupe: ["react", "react-dom"],
    },
  }
})