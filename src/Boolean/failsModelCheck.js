'use strict'
const passesModelCheck = require('./passesModelCheck')

const curry = require('../Functional/curry')

/**
 * Returns `true` if the specified Model fails to validate an input, `false` otherwise.
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
 * 'use strict'
 * const failsModelCheck = require('@eluvio/elv-js-helpers/Boolean/failsModelCheck')
 *
 * const PositiveIntModel = require('@eluvio/elv-js-helpers/Model/PositiveIntModel')
 *
 * failsModelCheck(PositiveIntModel, 1)  //=> false
 *
 * failsModelCheck(PositiveIntModel, -1) //=> true
 *
 * // function is curried: call with just first param to obtain a narrower function
 * const isNotPositiveInt = failsModelCheck(PositiveIntModel)
 *
 * isNotPositiveInt(1)                   //=> false
 *
 * isNotPositiveInt(0)                   //=> true
 *
 * isNotPositiveInt('foo')               //=> true
 *
 */
const failsModelCheck = curry(
  (model, input) => !passesModelCheck(model, input)
)

module.exports = failsModelCheck
