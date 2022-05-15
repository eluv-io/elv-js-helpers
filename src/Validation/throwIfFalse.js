const curry = require('crocks/helpers/curry')
const throwError = require('../Misc/throwError')

/**
 * Throws an exception with the specified message if a
 * [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value is passed in.
 * Otherwise returns the [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value unchanged.
 *
 * @function
 * @curried
 * @category Validation
 * @sig String -> a -> a | THROW
 * @param {String} message - the error message to use in the exception
 * @param {*} value - the value to check for falsiness
 * @returns {Any}
 * @example
 *
 * const throwIfFalse = require('@eluvio/elv-js-helpers/Validation/throwIfFalse')
 *
 * const PASSWORD_REGEX = /[A-Z]{42}/
 * const password = 'foo'
 *
 * throwIfFalse('password must be 42 upper-case letters', PASSWORD_REGEX.test(password)) //=> EXCEPTION: 'password must be 42 upper-case letters'
 *
 */
const throwIfFalse = curry(
  (message, value) => value || throwError(message)
)

module.exports = throwIfFalse
