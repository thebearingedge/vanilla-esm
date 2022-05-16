import './index.css'

if (import.meta.hot) import.meta.hot.accept()

fetch('/api/hello-world')
  .then(res => res.json())
  .then(data => console.log('hello, esm!', data))
