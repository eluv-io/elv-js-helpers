'use strict'
/**
 * Escapes a string for use in a [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
 *
 * Useful if you need to match slashes and other special characters.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
 *
 * @function
 * @category Conversion
 * @sig * -> String
 * @param {string} str - The value to escape
 * @returns {string}
 * @example
 *
 * 'use strict'
 * const escapeForRegExp = require('@eluvio/elv-js-helpers/Conversion/escapeForRegExp')
 *
 * escapeForRegExp('foo')       //=> 'foo'
 *
 * escapeForRegExp('/')         //=> '\/'
 *
 * escapeForRegExp(42)          //=> EXCEPTION: 'str.replace is not a function'
 */
const escapeForRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string

module.exports = escapeForRegExp
