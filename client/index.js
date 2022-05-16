import './index.css'
import io from 'socket.io-client'

if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => socket.close())
}

const socket = io('/')

socket.on('hello', data => console.log('hello, socket!', data))

fetch('/api/hello-world')
  .then(res => res.json())
  .then(data => console.log('hello, fetch!', data))
