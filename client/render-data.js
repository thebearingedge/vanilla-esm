export default function renderData(data) {
  const $pre = document.createElement('pre')
  $pre.textContent = JSON.stringify(data, null, 2)
  return $pre
}
