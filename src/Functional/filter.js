'use strict'
/**
 * Passthrough for Ramda's [`filter`](https://ramdajs.com/docs/#filter) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Tests elements of a list with a function and returns a new list containing the elements where the function evaluates to a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value.
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((*) → *) → [*] → [*]
 * @param {Function} - the test function, accepting a list element and returning a truthy value if the element should be included in result list
 * @param {List} - an iterable list of elements
 * @returns {Array} The elements where function evaluated
 * @example
 *
 * 'use strict'
 * const filter = require('@eluvio/elv-js-helpers/Functional/filter')
 *
 * const arrOfInt = [1, 2, 3, 4, 5]
 *
 * const isEven = a => a % 2 === 0
 *
 * filter(isEven, arrOfInt)      //=> [2, 4]
 *
 * // Function is curried, call with fewer arguments to get a new, more specific function
 *
 * const isOdd = a => a % 2 === 1
 *
 * const filterOdd = filter(isOdd)
 *
 * filterOdd(arrOfInt)           //=> [1, 3, 5]
 *
 */
const filter = require('@eluvio/ramda-fork/src/filter')

module.exports = filter
