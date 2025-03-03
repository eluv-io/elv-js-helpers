'use strict'
const curry = require('../Functional/curry')

// roundToPrecision :: Number -> Number -> Number
// Rounds a value to a certain number of significant digits
const roundToPrecision = curry(
  (sigFigs, value) => {

    // Unsafe version, does not protect against value <= 0
    const _roundPosNumToPrec = (sigFigs, value) => {
      const factor = 10 ** (1 + Math.trunc(Math.log10(value)) - sigFigs)
      return Math.round(value / factor) * factor
    }

    switch (Math.sign(value)) {
      case 1:
        return _roundPosNumToPrec(sigFigs, value)
      case -1:
        return -_roundPosNumToPrec(sigFigs, -value)
      default:
        return 0
    }
  }
)

module.exports = roundToPrecision
