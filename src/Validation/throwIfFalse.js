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
 * const PASSWORD_REGEX_4 = /[A-Z]{4}/
 * const PASSWORD_REGEX_42 = /[A-Z]{42}/
 * const password = 'foobar'
 *
 * throwIfFalse('password must be 42 upper-case letters', PASSWORD_REGEX_42.test(password)) //=> EXCEPTION: 'password must be 42 upper-case letters'
 *
 * throwIfFalse('password must be 4 upper-case letters', PASSWORD_REGEX_4.test(password))   //=> true
 *
 * throwIfFalse('foo', 42)                                                                  //=> 42
 *
 * throwIfFalse('foo', [])                                                                  //=> []
 *
 */
const throwIfFalse = curry(
  (message, value) => value || throwError(message)
)

module.exports = throwIfFalse
