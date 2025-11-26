'use strict'
/**
 * Passthrough for Ramda's [`all`](https://ramdajs.com/docs/#all) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Tests elements of a list with a function and returns true if function returns a truthy value for all items in the list
 *
 * Throws an exception if a non-function or non-list is passed in.
 *
 * @function
 * @curried
 * @category Functional
 * @sig (a → Boolean) → [a] → Boolean | EXCEPTION
 * @param {Function} - the test function, accepting a list element and returning a truthy value if the element passes the test
 * @param {list} - an iterable list of elements
 * @returns {Boolean} True if all elements pass test
 * @example
 *
 * 'use strict'
 * const isNumber = require('@eluvio/elv-js-helpers/Boolean/isNumber')
 *
 * all(isNumber, [1, 2, 3, 4, 5])     //=> true
 *
 * all(isNumber, [1, 2, 3, 4, 'a'])   //=> false
 *
 * all(isNumber, null)                //=> EXCEPTION: 'Cannot read properties of null'
 *
 * all(null, [1,2,3])                 //=> EXCEPTION: 'fn is not a function'
 *
 * // Empty array tests as true (none fail)
 * all(isNumber, [])                  //=> true
 *
 *
 * // Function is curried, call with fewer arguments to get a new, more specific function
 *
 * const allNumber = all(isNumber)
 *
 * allNumber([1,2,3])                 //=> true
 *
 */
const all = require('@eluvio/ramda-fork/src/all')

module.exports = all
