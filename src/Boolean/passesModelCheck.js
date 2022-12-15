const curry = require('../Functional/curry')
const F = require('../Functional/F')
const T = require('../Functional/T')

const validateWithModel = require('../Validation/validateWithModel')

/**
 * Returns `true` if the specified Model successfully validates an input, `false` otherwise.
 *
 * Used when the caller does not care about the details of why the input failed validation.
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
 * const PositiveIntModel = require('@eluvio/elv-js-helpers/Model/PositiveIntModel')
 *
 * passesModelCheck(PositiveIntModel, -1) //=> false
 *
 * // function is curried: call with just first param to obtain a narrower function
 * const isPositiveInt = passesModelCheck(PositiveIntModel)
 *
 * isPositiveInt(1)     //=> true
 *
 * isPositiveInt(0)     //=> false
 *
 * isPositiveInt('foo') //=> false
 *
 */
const passesModelCheck = curry(
  (model, input) => validateWithModel(model)(input).either(F, T)
)

module.exports = passesModelCheck
