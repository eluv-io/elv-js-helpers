const nAry = require('crocks/helpers/nAry')
const psi = require('crocks/combinators/psi')

const flip = require('./flip')

const addPreprocessFn2 = nAry(4, flip(psi))
// Above is pointfree shorthand for:
// curry(
//   (preprocessorFn, binaryFn) =>
//     curry(
//       (val1, val2) => binaryFn(preprocessorFn(val1), preprocessorFn(val2))
//     )
// )

module.exports = addPreprocessFn2
