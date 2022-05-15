/**
 * Throws an exception. Used to allow terser code, e.g. replacing `if`/`else` with a ternary expression.
 *
 * @function
 * @category Misc
 * @sig String -> THROW
 * @param {String} message - Error message for exception
 * @returns {Nothing}
 * @example
 *
 * const throwError = require('@eluvio/elv-js-helpers/Misc/throwError')
 *
 * throwError('clear and helpful error message') //=> EXCEPTION: 'clear and helpful error message'
 *
 */
const throwError = message => {
  throw Error(message)
}

module.exports = throwError
