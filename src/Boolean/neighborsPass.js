'use strict'
const aperture = require('@eluvio/ramda-fork/src/aperture')

const curry = require('../Functional/curry')
const find = require('../Functional/find')

/**
 * Returns true if all pairs of neighbors in `array` return true when fed into `checkFn`.
 *
 * Can be used to verify ordering, e.g. if `checkFn` is `(x,y) => x <= y` then `array` must be in ascending order.
 *
 * @function
 * @curried
 * @category Boolean
 * @sig ((a, a) -> Boolean) -> Array -> Boolean
 * @param {Function} checkFn - 2-input function that returns `true` if the inputs pass check, `false` otherwise
 * @param {Array} array - Array or other iterable with elements to check
 * @returns {Boolean}
 * @example
 *
 * 'use strict'
 * const neighborsPass = require('@eluvio/elv-js-helpers/Boolean/neighborsPass')
 *
 * const xGTEy = (x,y) => x <= y
 *
 * neighborsPass(xGTEy, [1, 2, 2, 3])   //=> true
 *
 * // single element, has no pairs to check:
 * neighborsPass(xGTEy, [1])            //=> true
 *
 * neighborsPass(xGTEy, [3, 2, 2, 1])   //=> false
 *
 * // strings support indexed access via []:
 * neighborsPass(xGTEy, 'abcde')        //=> true
 *
 * // non-array, has no pairs to check:
 * neighborsPass(xGTEy, 5)              //=> true
 *
 * // function is curried: call with 1 arg to obtain a narrower function
 * const isOrdered = neighborsPass(xGTEy)
 *
 * isOrdered([1, 2, 2, 3])                    //=> true
 *
 * isOrdered([1])                             //=> true
 *
 * isOrdered([3, 2, 2, 1])                    //=> false
 *
 * // strings support indexed access via []:
 * isOrdered('abcde')                         //=> true
 *
 * // non-array, has no pairs to check:
 * isOrdered(5)                               //=> true
 */
const neighborsPass = curry(
  (checkFn, array) => find(
    pair => !checkFn(pair[0], pair[1]),
    aperture(2, array)
  ) === undefined
)

module.exports = neighborsPass
