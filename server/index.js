import 'dotenv/config'
import http from 'http'
import express from 'express'
import { Server as IOServer } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new IOServer(server)

app.use('/api/hello-world', (req, res) => {
  res.json({ hello: 'world!' })
})

io.on('connection', socket => {
  console.log('client connected:', socket.id)
  socket.emit('hello', { hello: 'socket' })
  socket.on('disconnect', () => console.log('client disconnected:', socket.id))
})

if (process.env.NODE_ENV === 'development') {
  const { devMiddleware } = await import('./dev-middleware.js')
  app.use(devMiddleware)
} else {
  const publicPath = new URL('./public', import.meta.url).pathname
  app.use(express.static(publicPath))
}

server.listen(process.env.PORT, () => {
  console.log('app listening on port', process.env.PORT)
})
