'use strict'
const kind = require('../Validation/kind')

/**
 * Returns `true` if passed a Number.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * 'use strict'
 * const isNumber = require('@eluvio/elv-js-helpers/Boolean/isNumber')
 *
 * isNumber(1)          //=> true
 *
 * isNumber(Infinity)   //=> true
 *
 * isNumber(NaN)        //=> true
 *
 * isNumber('foo')      //=> false
 *
 */
const isNumber = x => kind(x) === 'Number'

module.exports = isNumber


