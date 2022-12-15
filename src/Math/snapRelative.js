const absRelChange = require('./absRelChange')

const curry = require('../Functional/curry')

// // snapWithinTolerance :: Number -> Number -> Number -> Number
// // Returns returns a standard value if testValue is within a proportional tolerance, measured relative to a
// // standard value, otherwise returns testValue unchanged
// const snapWithinTolerance = (tolerance, standardValue, testValue) =>
//   Math.abs(change(standardValue, testValue)) <= tolerance ?
//     standardValue :
//     testValue
const snapRelative = curry(
  (maxAbsRelChange, snapToValue, testValue) =>
    absRelChange(snapToValue, testValue) <= maxAbsRelChange ?
      snapToValue :
      testValue
)

module.exports = snapRelative
