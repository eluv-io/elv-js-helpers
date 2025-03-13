'use strict'
/**
 * Passthrough for Ramda's [`reduce`](https://ramdajs.com/docs/#reduce) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns a value created by iterating through a list with an accumulator and a function, successively calling the
 * function with the updated accumulator and next element as the arguments.
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((a, b) → a) → a → [b] → a
 * @param {Function} - the iterator function, accepting an accumulator (a) and the current list element (b) and returning an updated value for accumulator
 * @param {*} - initial value for accumulator
 * @returns {*} final value of accumulator
 * @example
 *
 * 'use strict'
 * const reduce = require('@eluvio/elv-js-helpers/Functional/reduce')
 *
 * const arrOfInt = [1, 2, 3, 4, 5]
 *
 * const add = (a,b) => a+b
 * const mult = (a,b) => a*b
 *
 * reduce(add, 0, arrOfInt)      //=> 15
 *
 * reduce(mult, 1, arrOfInt)     //=> 120
 *
 * // note that choosing proper initial value for accumulator is important!
 * reduce(mult, 0, arrOfInt)     //=> 0
 *
 * const append = (a,b) => a.concat([b])
 *
 * reduce(append, [], arrOfInt)  //=> [1, 2, 3, 4, 5]
 *
 */
const reduce = require('@eluvio/ramda-fork/src/reduce')

module.exports = reduce

