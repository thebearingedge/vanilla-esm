export default {
  build: {
    emptyOutDir: true,
    outDir: new URL('./server/public/', import.meta.url).pathname
  },
  server: {
    middlewareMode: 'html'
  },
  root: new URL('./client/', import.meta.url).pathname,
  publicDir: new URL('./client/public/', import.meta.url).pathname
}
