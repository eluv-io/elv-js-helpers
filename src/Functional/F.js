'use strict'
/**
 * Ignores input and always returns `false`.
 *
 * Used for composing functional workflows, often indicating 'never'.
 *
 * @function
 * @category Functional
 * @sig {} -> a
 * @returns {Boolean} `false`
 * @example
 *
 * 'use strict'
 * const F = require('@eluvio/elv-js-helpers/Functional/F')
 *
 * F(42)   //=> false
 *
 * F()     //=> false
 *
 */
const F = () => false

module.exports = F
