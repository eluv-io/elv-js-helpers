'use strict'
const base58Decode = require('../Conversion/base58Decode')
const throwsException = require('./throwsException')

/**
 * Returns `true` if passed a valid [Base58](https://en.wikipedia.org/wiki/Binary-to-text_encoding#Base58) string.
 * Returns `false` if passed anything else.
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * 'use strict'
 * const isBase58String = require('@eluvio/elv-js-helpers/Boolean/isBase58String')
 *
 * isBase58String('foo')            //=> true
 *
 * isBase58String('FOO')            //=> false
 *
 * isBase58String(1, 2, 3)          //=> false
 *
 * // extra arguments are ignored
 * isBase58String('foo', 2, 3)      //=> true
 *
 */
const isBase58String = x => {
  return !throwsException(() => base58Decode(x))
}

module.exports = isBase58String
