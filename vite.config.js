import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'antigravitytest' with your actual repository name if deploying to GitHub Pages
  // Example: base: '/my-repo-name/'
  // If you are deploying to a custom domain (e.g. www.barbscakes.com), keep it as '/'
  base: './',
})
