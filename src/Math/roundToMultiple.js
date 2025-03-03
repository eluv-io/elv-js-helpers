'use strict'
const curry = require('../Functional/curry')

// // roundToMultiple :: Number -> Number -> Number
// // Rounds a value to nearest multiple of a specified number
const roundToMultiple = curry(
  (mult, val) => Math.round(val / mult) * mult
)

module.exports = roundToMultiple
