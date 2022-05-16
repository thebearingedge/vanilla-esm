import vite from 'vite'
import config from '../vite.config.js'

export const { middlewares: devMiddleware } = await vite.createServer({
  ...config,
  server: {
    middlewareMode: 'html'
  }
})
