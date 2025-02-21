const _times = require('@eluvio/ramda-fork/src/times')

const curry = require('./curry')

/**
 * Passthrough for Ramda's `times` function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns a list containing result of passing 0 based index to a function the specified number of times, incrementing index each time.
 *
 * @function
 * @curried
 * @category Functional
 * @sig (Number -> a) -> Number -> [a]
 * @param {function} fn - the function to call with index
 * @param {integer} repeatCount - the number of times to call the function
 * @returns {Array} List with result of function call(s)
 * @example
 *
 * const times = require('@eluvio/elv-js-helpers/Functional/times')
 *
 * const double = x => x * 2
 *
 * times(double, 3)                 //=> [0, 2, 4]
 *
 * // function is curried: call with just first param to obtain a more specialized function
 * const getSquares = times(x => x ** 2)
 *
 * getSquares(4)                    //=> [0, 1, 4, 9]
 *
 */
const times = curry(
  (fn, repeatCount) => _times(fn, repeatCount)
)
module.exports = times