const formatUtil = require('@ladjs/format-util')
const kind = require('../Validation/kind')

/**
 * Passthrough for the `format()` function from [@ladjs/format-util](https://github.com/tmpfs/format-util)
 * _(Copyright © 2015 Freeform Systems and other contributors, MIT license).
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [@ladjs/format-util](https://www.npmjs.com/package/uuid)
 * package as a dependency.
 *
 * Converts input to a string for use in error messages and log statements.
 *
 * Similar to `format()` from the [node:util module](https://nodejs.org/api/util.html) but without the code size
 * overhead of using that module.
 *
 * @function
 * @category Conversion
 * @sig * -> String
 * @param {*} value - The value to format
 * @returns {String}
 * @example
 *
 * const format = require('@eluvio/elv-js-helpers/Conversion/format')
 *
 * format(' ')      //=> '" "'
 *
 * format(42)       //=> '42'
 *
 * format(x => x*2) //=> '[Function (anonymous)]'
 *
 * format(format)   //=> '[Function: format]'
 */
const format = value => {
  switch (kind(value)) {
    case 'Function':
      return formatUtil(value)
    case 'Number':
      return formatUtil('%d', value)
    default:
      return formatUtil('%j', value)
  }
}

module.exports = format
