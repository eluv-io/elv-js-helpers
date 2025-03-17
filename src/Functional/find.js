'use strict'
/**
 * Passthrough for Ramda's [`find`](https://ramdajs.com/docs/#find) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns first element of a list where test function evaluates to a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value.
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((*) → *) → [*] → *
 * @param {Function} - the test function, accepting a list element and returning a truthy value if the element satisfies condition
 * @param {List} - an iterable list of elements
 * @returns {Any} The first element that satisfies condition, or `undefined` if no element does
 * @example
 *
 * 'use strict'
 * const find = require('@eluvio/elv-js-helpers/Functional/find')
 * const isGTE = require('@eluvio/elv-js-helpers/Boolean/isGTE')
 *
 * const arrOfInt = [1, 2, 3, 4, 5]
 *
 * const isEven = a => a % 2 === 0
 * const gte10 = isGTE(10)
 *
 * find(isEven, arrOfInt)      //=> 2
 *
 * find(gte10, arrOfInt)       //=> undefined
 *
 * // Function is curried, call with fewer arguments to get a new, more specific function
 *
 * const isOdd = a => a % 2 === 1
 *
 * const firstOdd = find(isOdd)
 *
 * firstOdd(arrOfInt)          //=> 1
 *
 */
const find = require('@eluvio/ramda-fork/src/find')

module.exports = find
