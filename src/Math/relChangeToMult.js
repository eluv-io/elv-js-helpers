'use strict'
// // multiplier :: Number -> Number
// // Converts a proportional change to a multiplier
// // e.g. 0 -> 1.0, 0.25 -> 1.25, -0.25 -> 0.75
const relChangeToMult = relChangeVal => 1.0 + relChangeVal

module.exports = relChangeToMult
