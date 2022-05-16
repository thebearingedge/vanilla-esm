/**
 * @type {import('vite').UserConfig}
 */
const config = {
  build: {
    emptyOutDir: true,
    outDir: new URL('./server/public/', import.meta.url).pathname
  },
  root: new URL('./client/', import.meta.url).pathname,
  publicDir: new URL('./client/public/', import.meta.url).pathname
}

export default config
