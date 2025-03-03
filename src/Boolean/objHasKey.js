'use strict'
const curry = require('../Functional/curry')
const isObject = require('../Boolean/isObject')

/**
 * Returns `true` if item is an object with the specified key.
 * Returns `false` otherwise
 *
 * @function
 * @curried
 * @category Boolean
 * @sig String -> a -> Boolean
 * @param {string} key - The key to check for
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * 'use strict'
 * const objHasKey = require('@eluvio/elv-js-helpers/Boolean/objHasKey')
 *
 * objHasKey('foo', {foo: 'bar'})   //=> true
 *
 * objHasKey('bar', {foo: 'bar'})   //=> false
 *
 * objHasKey('foo', [1, 2, 3])      //=> false
 *
 * objHasKey('1', {1: 42})          //=> true
 *
 * objHasKey(1, {1: 42})            //=> false
 *
 * // function is curried, pass less than full number of arguments to obtain another narrower function
 * const hasFoo = objHasKey('foo')
 *
 * hasFoo({foo: 'bar'})          //=> true
 *
 * hasFoo({bar: 'baz'})          //=> false
 *
 */
const objHasKey = (key, x) => {
  return isObject(x) && Object.keys(x).includes(key)
}

module.exports = curry(objHasKey)
