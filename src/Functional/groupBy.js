'use strict'
/**
 * Passthrough for Ramda's [`groupBy`](https://ramdajs.com/docs/#groupBy) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Groups elements of a list by the return value of a classifier function and returns an object where the keys are the
 * classifier function return values and the values are list of elements that evaluated to those return values.
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((*) → String | Int | Symbol) → [*] → [*]
 * @param {Function} - the classifier function, accepting a list element and returning a valid object key (string, int or symbol)
 * @param {List} - an iterable list of elements
 * @returns {Object} The object containing sublists grouped by return value of the classifier function
 * @example
 *
 * 'use strict'
 * const groupBy = require('@eluvio/elv-js-helpers/Functional/groupBy')
 *
 * const values = [1, 2, [3], 'a', 'b', null]
 *
 * const kind = require('@eluvio/elv-js-helpers/Validation/kind')
 *
 * groupBy(kind, values)      //=> {Array: [[3]], Number: [1, 2], null: [null], String: ['a','b']}
 *
 */
const groupBy = require('@eluvio/ramda-fork/src/groupBy')

module.exports = groupBy
