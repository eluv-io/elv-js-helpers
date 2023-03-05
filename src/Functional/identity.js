/**
 * Given an input, returns that input. Used for composing functional workflows, often indicating 'no-op'.
 *
 * @function
 * @category Functional
 * @sig a -> a
 * @param {*} x - The input value
 * @returns {*} The input value
 * @example
 *
 * const identity = require('@eluvio/elv-js-helpers/Functional/identity')
 *
 * identity(42)   //=> 42
 */
const identity = x => {
  return x
}

module.exports = identity
