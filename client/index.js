import io from 'socket.io-client'
import renderData from './render-data.js'

if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => socket.close())
}

const $fetchData = document.querySelector('#fetch-data')
const $socketData = document.querySelector('#socket-data')

fetch('/api/hello-world')
  .then(res => res.json())
  .then(data => {
    $fetchData.innerHTML = ''
    $fetchData.append(renderData(data))
    console.log('hello, fetch!', data)
  })

const socket = io('/').on('hello', data => {
  $socketData.innerHTML = ''
  $socketData.append(renderData(data))
  console.log('hello, websocket!', data)
})
