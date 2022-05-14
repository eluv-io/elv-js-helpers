/**
 * Passthrough for the `map()` [Crocks](https://crocks.dev/) function (Copyright © 2016, Ian Hofmann-Hicks, ISC license)
 *
 * Not to be confused with the `map` function from [Ramda](https://ramdajs.com/docs/#), although functionality is similar.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Provides a [pointfree](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch05#pointfree) way to call .map()
 * on a value wrapped in a functional data type.
 *
 * Given a curried function that takes a 'normal' value and returns another 'normal' value, map will convert it into a
 * function that takes a wrapped value and returns a wrapped value.
 *
 * @function
 * @curried
 * @category Functional
 * @sig (a -> b) -> m a -> m b
 * @param {Function} - A curried function that takes a 'normal' value and returns a 'normal' value)
 * @param {Object} - Instance of functional data type to pass into function
 * @returns {*} The wrapped result
 * @example
 *
 * const map = require('@eluvio/elv-js-helpers/map')
 * const curry = require('@eluvio/elv-js-helpers/curry')
 * const Err = require('@eluvio/elv-js-helpers/Err')
 * const Ok = require('@eluvio/elv-js-helpers/Ok')
 *
 * // function has only one input, not need to curry
 * const double = a => a * 2
 *
 * const ok21 = Ok(21)
 * const badNum = Err(['failed to read input'])
 *
 * double(21)                 //=> Ok 21
 *
 * double(ok21)               //=> Ok NaN (double does not know to unwrap value before use)
 *
 * map(double, ok21)          //=> Ok 42 (map asks input wrapper to remove wrapping and pass value to function, and then re-wrap the return value)
 *
 * map(double, badNum)        //=> Err ['failed to read input'] (badNum ignores request to apply double)
 *
 */
const map = require('crocks/pointfree/map')

module.exports = map
