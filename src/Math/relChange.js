const curry = require('../Functional/curry')

// // change :: Number -> Number -> Number
// // Return change between two numbers, expressed as a proportion of the first value
// // e.g. returns 0 if the values are the same, 0.5 if the second value is 50% larger
// // Note that 0 is invalid for oldValue, the relative change is Infinity in that case
const relChange = curry(
  (oldValue, newValue) => (newValue - oldValue) / Math.abs(oldValue)
)

module.exports = relChange
