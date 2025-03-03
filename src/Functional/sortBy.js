'use strict'
const sortBy = require('@eluvio/ramda-fork/src/sortBy')
/**
 * Passthrough for Ramda's `sortBy` function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Sorts a list according the result of calling a function on each element of the list.
 *
 * @function
 * @curried
 * @category Functional
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} - the function to obtain the sort key for each element
 * @param {Array} - the list to sort
 * @returns {Array}
 * @example
 *
 * 'use strict'
 * const sortBy = require('@eluvio/elv-js-helpers/Functional/sortBy')
 *
 * const sortByName = sortBy(x => x.name)
 * const sortByNameCaseInsensitive = sortBy(x => x.name.toLowerCase())
 *
 * sortByName([
 *   {name: "alpha"},
 *   {name: "Bravo"},
 *   {name: "charlie"}
 * ]).map(x => x.name)                //=> ['Bravo', 'alpha', 'charlie']
 *
 * sortByNameCaseInsensitive([
 *   {name: "alpha"},
 *   {name: "Bravo"},
 *   {name: "charlie"}
 * ]).map(x => x.name)                //=> ['alpha', 'Bravo', 'charlie']
 *
 */
module.exports = sortBy
