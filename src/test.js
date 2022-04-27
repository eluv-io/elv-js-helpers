const curry = require('crocks/helpers/curry')

const F = require('ramda/src/F')
const T = require('ramda/src/T')

const validator = require('./validator')

/**
 * Returns `true` if the specified model successfully validates an input, `false` otherwise.
 *
 * Used when the caller does not care about the details of why the input failed validation.
 *
 * @function
 * @since v0.0.1
 * @category Validation
 * @sig Model -> * -> Boolean
 * @param {Model} model - The model to test against
 * @param {Any} input - The value to test
 * @returns {Boolean}
 *
 * @example
 *
 * test(PositiveIntegerModel, -1) //=> false
 *
 * const isPositive = test(PositiveIntegerModel)
 *
 * isPositive(1) //=> true
 *
 * isPositive(0) //=> false
 *
 */
const test = curry(
  (model, input) => validator(model)(input).either(F, T)
)

module.exports = test
