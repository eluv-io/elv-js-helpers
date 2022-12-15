const _max = require('ramda/src/max')
const reduce = require('crocks/pointfree/reduce')

// return max element of array (note that an undefined element in first position will wind up being evaluated as max)
const max = arr => arr.length === 0 ?
  undefined :
  arr.length === 1 ?
    arr[0] :
    reduce(_max, arr[0], arr.slice(1))

module.exports = max
//
// console.log(max([undefined, 1]))
// console.log(max([1, undefined]))
// console.log(max([1, 2, undefined]))
