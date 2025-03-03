'use strict'
const isUndefined = require('../Boolean/isUndefined')
const curry = require('../Functional/curry')
const throwError = require('../Misc/throwError')

/**
 * Throws an exception with the specified message if `undefined` is passed in.
 * Otherwise returns the value unchanged.
 *
 * @function
 * @curried
 * @category Validation
 * @sig String -> a -> a | THROW
 * @param {String} message - the error message to use in the exception
 * @param {*} value - the value to check if undefined
 * @returns {Any}
 * @example
 *
 * 'use strict'
 * const throwIfUndefined = require('@eluvio/elv-js-helpers/Validation/throwIfUndefined')
 *
 * let u
 * const x = 0
 * let y = 42
 *
 * throwIfUndefined('value is undefined', u)   //=> EXCEPTION: "value is undefined"
 *
 * throwIfUndefined('value is undefined', x)   //=> 0
 *
 * throwIfUndefined('value is undefined', y)   //=> 42
 *
 * throwIfUndefined('value is undefined')()    //=> EXCEPTION: "value is undefined"
 *
 */
const throwIfUndefined = curry(
  (message, value) => isUndefined(value) ? throwError(message) : value
)

module.exports = throwIfUndefined
