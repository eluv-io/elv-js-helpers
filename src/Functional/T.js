/**
 * Ignores input and always returns true.
 *
 * Used for composing functional workflows, often indicating 'always'.
 *
 * @function
 * @category Functional
 * @sig {} -> a
 * @returns {Boolean} true
 * @example
 *
 * const T = require('@eluvio/elv-js-helpers/Functional/T')
 *
 * T(42)   //=> true
 *
 * T()     //=> true
 *
 */
const T = () => {
  return true
}

module.exports = T
