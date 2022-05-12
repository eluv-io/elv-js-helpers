const curry = require('crocks/helpers/curry')
const throwError = require('../throwError')

/**
 * Throws an exception with the specified message if a
 * [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value is passed in.
 * Otherwise returns the [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value unchanged.
 *
 * @function
 * @curried
 * @private
 * @category Validation
 * @sig String -> a -> a | THROW
 * @param {String} message - the error message to use in the exception
 * @param {*} value - the value to check for truthiness
 * @returns {Any}
 *
 * @example
 *
 * _throwIfTrue('division by zero', x === 0) /=> EXCEPTION: "division by zero"
 *
 */
const _throwIfTrue = curry(
  (message, value) => value && throwError(message)
)

module.exports = _throwIfTrue
