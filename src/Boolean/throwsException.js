'use strict'
/**
 * Returns `true` if `fn()` throws an exception when called.
 * Returns `false` otherwise.
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {Function} fn - The function to test
 * @returns {Boolean}
 * @example
 *
 * 'use strict'
 * const throwsException = require('@eluvio/elv-js-helpers/Boolean/throwsException')
 *
 * throwsException(() => Object().foo.bar)  //=> true
 *
 * throwsException(() => 42/42)             //=> false
 *
 * // returns `true` if passed something that cannot be called.
 * throwsException(0)                       //=> true
 *
 */
const throwsException = fn => {
  try {
    fn()
    return false
  } catch {
    return true
  }
}

module.exports = throwsException
