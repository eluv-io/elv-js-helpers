const bs58 = require('bs58')
/**
 * Passthrough for the `encode()` function from the [bs58](https://github.com/cryptocoinjs/bs58) npm package.
 * _(Copyright © 2018 cryptocoinjs, MIT License)_
 *
 * Encodes a `Uint8Array`, `Buffer`, or `Array` of bytes as a [Base58](https://en.wikipedia.org/wiki/Binary-to-text_encoding#Base58) string.
 *
 * Throws an exception on bad input.
 *
 * @function
 * @category Conversion
 * @sig String -> Uint8Array
 * @param {Uint8Array | Buffer | Array} bytes The bytes to encode
 * @returns {String} The base-58 string
 * @example
 *
 * const base58Encode = require('@eluvio/elv-js-helpers/Conversion/base58Encode')
 *
 * const bytes = Uint8Array.from([
 *  0, 60,  23, 110, 101, 155, 234,
 *  15, 41, 163, 233, 191, 120, 128,
 *  193, 18, 177, 179,  27,  77, 200,
 *  38, 38, 129, 135
 * ])
 * base58Encode(bytes)                   //=> '16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS'
 *
 */
const base58Encode = bytes => {
  return bs58.encode(bytes)
}

module.exports = base58Encode
