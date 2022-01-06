module.exports = function reverse (n) {
  n = n.toString().split('')
  let result = ''
  for(let i = 0; i < n.length; i++){
    result = n[i] + result
  }
  return parseInt(result)
}
