function timeout(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms)
  })
}

async function divasync(x, y, ms) {
  if (ms) await timeout(ms)
  return x / y
}

function divider(x, y, ms, callback) {
  divasync(x, y, ms)
    .then(callback)
}

export { divider }
