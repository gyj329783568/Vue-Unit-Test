/**
 * 字符串转对象
 * name = abc => {name: abc}
 * @param {String} str
 */
export const parser = (str) => {
  let obj = {}
  str.replace(/([^&=]*)=([^&=]*)/g, function() {
    obj[arguments[1]] = arguments[2]
  })
  return obj
}

/**
 * 对象转字符串
 */
export const stringfy = (obj) => {
  let arr = []
  for(let key in obj) {
    arr.push(`${key}=${obj[key]}`)
  }
  return arr.join('&')
}

console.log(parser('name=123'))