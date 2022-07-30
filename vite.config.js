import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: new URL('./server/public/', import.meta.url).pathname
  },
  server: {
    middlewareMode: true
  },
  root: new URL('./client/', import.meta.url).pathname,
  publicDir: new URL('./client/public/', import.meta.url).pathname
})
