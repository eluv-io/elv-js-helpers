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
 * @curried
 * @category Validation
 * @sig Model -> * -> Boolean
 * @param {Model} model - The model to test against
 * @param {*} input - The value to test
 * @returns {Boolean}
 *
 * @example
 *
 * checkVsModel(PositiveIntegerModel, -1) //=> false
 *
 * // function is curried: call with just first param to obtain a narrower function
 * const isPositiveInt = checkVsModel(PositiveIntegerModel)
 *
 * isPositiveInt(1)     //=> true
 *
 * isPositiveInt(0)     //=> false
 *
 * isPositiveInt('foo') //=> false
 *
 */
const checkVsModel = curry(
  (model, input) => validator(model)(input).either(F, T)
)

module.exports = checkVsModel
