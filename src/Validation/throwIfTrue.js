'use strict'
const curry = require('../Functional/curry')
const throwError = require('../Misc/throwError')

/**
 * Throws an exception with the specified message if a
 * [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value is passed in.
 * Otherwise returns the [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value unchanged.
 *
 * @function
 * @curried
 * @category Validation
 * @sig String -> a -> a | THROW
 * @param {String} message - the error message to use in the exception
 * @param {*} value - the value to check for truthiness
 * @returns {Any}
 * @example
 *
 * 'use strict'
 * const throwIfTrue = require('@eluvio/elv-js-helpers/Validation/throwIfTrue')
 *
 * const x = 0
 * const y = 42
 *
 * throwIfTrue('division by zero', x === 0) //=> EXCEPTION: "division by zero"
 *
 * throwIfTrue('division by zero', y === 0) //=> false
 *
 * throwIfTrue('foo', null)                 //=> null
 *
 * throwIfTrue('foo', 0)                    //=> 0
 *
 */
const throwIfTrue = curry(
  (message, value) => value && throwError(message)
)

module.exports = throwIfTrue
