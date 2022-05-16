import 'dotenv/config'
import express from 'express'

const app = express()

app.use('/api/hello-world', (req, res) => {
  res.json({ hello: 'world!' })
})

if (process.env.NODE_ENV === 'development') {
  const { devMiddleware } = await import('./dev-middleware.js')
  app.use(devMiddleware)
} else {
  const publicPath = new URL('./public', import.meta.url).pathname
  app.use(express.static(publicPath))
}

app.listen(process.env.PORT, () => {
  console.log('app listening on port', process.env.PORT)
})
