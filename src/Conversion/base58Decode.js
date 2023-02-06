const bs58 = require('bs58')
/**
 * Passthrough for the `decode()` function from the [bs58](https://github.com/cryptocoinjs/bs58) npm package.
 * _(Copyright © 2018 cryptocoinjs, MIT License)_
 *
 * Decodes a base-58 string to a Uint8Array of the original bytes.
 *
 * Throws an exception on bad input.
 *
 * @function
 * @category Conversion
 * @sig String -> Uint8Array
 * @param {String} str The base-58 string to decode
 * @returns {Uint8Array} The decoded bytes
 * @example
 *
 * const base58Decode = require('@eluvio/elv-js-helpers/Conversion/base58Decode')
 *
 * const bytes = base58Decode('2PDzvA279deFCZe2SV1B6NQQkDE')
 * const hexString = Buffer.from(bytes).toString('hex')
 * console.log(hexString)                                   //=> OUTPUT: '01b6368fd21198ff5f97b00dc3918d6215bca039'
 *
 */
const base58Decode = str => {
  return bs58.decode(str)
}

module.exports = base58Decode

