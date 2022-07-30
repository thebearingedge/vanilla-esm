let staticMiddleware

if (process.env.NODE_ENV === 'development') {
  const { createServer } = await import('vite')
  const { default: config } = await import('../vite.config.js')
  ;({ middlewares: staticMiddleware } = await createServer(config))
} else {
  const { default: express } = await import('express')
  const publicPath = new URL('./public', import.meta.url).pathname
  staticMiddleware = express.static(publicPath)
}

export default staticMiddleware
