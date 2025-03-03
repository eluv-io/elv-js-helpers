'use strict'
const kind = require('../Validation/kind')

/**
 * Returns `true` if passed an object.
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
 * const isObject = require('@eluvio/elv-js-helpers/Boolean/isObject')
 *
 * isObject([1, 2, 3])         //=> false
 *
 * // extra argument ignored:
 * isObject(1, {foo: 'bar'})   //=> false
 *
 * isObject('foo')             //=> false
 *
 * isObject({})                //=> true
 *
 * // extra argument ignored:
 * isObject({foo: 'bar'}, 3)   //=> true
 *
 */
const isObject = x => kind(x) === 'Object'

module.exports = isObject
