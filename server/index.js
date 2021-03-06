import 'dotenv/config'
import http from 'http'
import express from 'express'
import { Server as SocketIO } from 'socket.io'
import staticMiddleware from './static-middleware.js'

const app = express()
const server = http.createServer(app)
const io = new SocketIO(server)

app.use('/api/hello-world', (req, res) => {
  res.json({ hello: 'fetch!' })
})

io.on('connection', socket => {
  console.log('client connected:', socket.id)
  socket.emit('hello', { hello: 'websocket!' })
  socket.on('disconnect', () => console.log('client disconnected:', socket.id))
})

app.use(staticMiddleware)

server.listen(process.env.PORT, () => {
  console.log(`\napp listening on port ${process.env.PORT}\n`)
})
