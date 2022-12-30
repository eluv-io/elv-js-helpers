const aperture = require('@eluvio/ramda-fork/src/aperture')
const find = require('@eluvio/ramda-fork/src/find')

const curry = require('../Functional/curry')

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
 * const neighborsPass = require('@eluvio/elv-js-helpers/Boolean/neighborsPass')
 *
 * const xGTEy = (x,y) => x <= y
 *
 * neighborsPass(xGTEy, [1, 2, 2, 3])   //=> true
 *
 * neighborsPass(xGTEy, [1])            //=> true (single element, has no pairs to check)
 *
 * neighborsPass(xGTEy, [3, 2, 2, 1])   //=> false
 *
 * neighborsPass(xGTEy, 'abcde')        //=> true (strings support indexed access via [])
 *
 * neighborsPass(xGTEy, 5)              //=> true (non-array, has no pairs to check)
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
 * isOrdered('abcde')                         //=> true (strings support indexed access via [])
 *
 * isOrdered(5)                               //=> true (non-array, has no pairs to check)
 */
const neighborsPass = curry(
  (checkFn, array) => find(
    pair => !checkFn(pair[0], pair[1]),
    aperture(2, array)
  ) === undefined
)

module.exports = neighborsPass
