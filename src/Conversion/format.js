const formatUtil = require('@ladjs/format-util')
const kindOf = require('../Validation/kindOf')

/**
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
  switch (kindOf(value)) {
    case 'function':
      return formatUtil(value)
    case 'number':
      return formatUtil('%d', value)
    default:
      return formatUtil('%j', value)
  }
}

module.exports = format
