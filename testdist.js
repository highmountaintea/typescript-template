// test webpack built distribution file to make sure it works

let dist = require('./dist/index')

console.log(dist.adder(3, 5))
console.log(dist.div(7, 3))
