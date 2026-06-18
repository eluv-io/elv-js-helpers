'use strict'

const _max = require('@eluvio/ramda-fork/src/max')
const reduce = require('crocks/pointfree/reduce')


/**
 * Returns max element of array.
 *
 * Any `undefined` elements will be removed first.
 *
 * Uses Ramda's [`max`](https://ramdajs.com/docs/#max) function _(Copyright © Scott Sauyet and Michael Hurley)_
 * for comparisons.
 *
 * Note that mixing types in a single array is not recommended, it can result in non-intuitive behavior.
 *
 * @function
 * @category Functional
 * @sig [] -> *
 * @param {Array} arr - Array of items to compare
 * @returns Any - Max value or undefined
 * @example
 *
 * 'use strict'
 * const max = require('@eluvio/elv-js-helpers/Functional/max')
 *
 * max([1, 2, 3])                       //=> 3
 *
 * max([1, Infinity])                   //=> Infinity
 *
 * max([])                              //=> undefined
 *
 * max([undefined])                     //=> undefined
 *
 * // undefined elements are removed before processing
 * max([undefined, 1])                  //=> 1
 *
 * max([1, undefined])                  //=> 1
 *
 * max([1, 2, undefined])               //=> 2
 *
 * // NaN contaminates comparisons, causing it to take precedence against other numbers
 * max([1, NaN])                        //=> NaN
 * max([1, NaN, Infinity])              //=> NaN
 *
 * // arrays are compared element-wise
 * max([[1], [2]])                      //=> [2]
 * max([[2], [1]])                      //=> [2]
 * max([[1], [1, 2]])                   //=> [1, 2]
 * max([[2], [1, 2]])                   //=> [2]
 * max([[13], [1, 2]])                  //=> [13]
 *
 * // string comparison is based on ASCII/Unicode values and are treated as arrays of characters
 * max(['a', 'b'])                      //=> 'b'
 * max(['a', 'aa', 'ab'])               //=> 'ab'
 * max(['a', 'A'])                      //=> 'a'
 * max(['©', 'A'])                      //=> '©'
 *
 * // mixing types can generate unexpected results
 * max([1, [1]])                        //=> [1]
 * max([1, [1], ''])                    //=> [1]
 * max([1, [1], 'x'])                   //=> 'x'
 * max(['x', NaN])                      //=> 'x'
 *
 */
const max = arr => {
  // remove undefined values to prevent returning undefined from comparison with any other value
  const definedElems = arr.filter(item => item !== undefined)
  return definedElems.length === 0 ?
    undefined :
    definedElems.length === 1 ?
      definedElems[0] :
      reduce(_max, definedElems[0], definedElems.slice(1))
}

module.exports = max