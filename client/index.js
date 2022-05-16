
if (import.meta.hot) {
  import.meta.hot.accept()
}

const data = await fetch('/api/hello-world').then(res => res.json())

console.log('hello, esm!', data)
