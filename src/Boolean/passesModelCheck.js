const curry = require('crocks/helpers/curry')

const F = require('ramda/src/F')
const T = require('ramda/src/T')

const validator = require('../Validation/validator')

/**
 * Returns `true` if the specified Model successfully validates an input, `false` otherwise.
 *
 * Used when the caller does not care about the details of why the input failed Validation.
 *
 * @function
 * @curried
 * @category Boolean
 * @sig Model -> * -> Boolean
 * @param {Model} Model - The Model to test against
 * @param {*} input - The value to test
 * @returns {Boolean}
 * @example
 *
 * const passesModelCheck = require('@eluvio/elv-js-helpers/Boolean/passesModelCheck')
 *
 * const PositiveIntegerModel = require('@eluvio/elv-js-helpers/Model/PositiveIntegerModel')
 *
 * passesModelCheck(PositiveIntegerModel, -1) //=> false
 *
 * // function is curried: call with just first param to obtain a narrower function
 * const isPositiveInt = passesModelCheck(PositiveIntegerModel)
 *
 * isPositiveInt(1)     //=> true
 *
 * isPositiveInt(0)     //=> false
 *
 * isPositiveInt('foo') //=> false
 *
 */
const passesModelCheck = curry(
  (model, input) => validator(model)(input).either(F, T)
)

module.exports = passesModelCheck
