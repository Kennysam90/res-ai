import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { execFileSync } from 'node:child_process'

// src/styles/icons.css is generated from the icon names used in the code.
// Make sure it exists however Vite is started (npm run dev, npx vite, an editor).
const icons = (): Plugin => ({
  name: 'resbrotherx-icons',
  buildStart() {
    execFileSync(process.execPath, ['scripts/build-icons.ts'], { stdio: 'inherit' })
  },
})

// The site is pre-rendered to static HTML after this build (scripts/prerender.ts),
// so every page ships real content to search engines and AI crawlers.
export default defineConfig({
  plugins: [icons(), react()],
  build: {
    assetsInlineLimit: 1024,
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
  ssr: {
    // Bundle the router into the server build so it shares one React instance.
    noExternal: ['react-router-dom', 'react-router'],
  },
})
