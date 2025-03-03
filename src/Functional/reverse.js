'use strict'
const _reverse = require('@eluvio/ramda-fork/src/reverse')

/**
 * Passthrough for Ramda's `reverse` function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns a new list or string with the elements or characters in reverse order.
 *
 * @function
 * @category Functional
 * @sig a :: String | Array => a -> a
 * @param {String | Array} x - the item to reverse
 * @returns {String | Array} Reversed string or array
 * @example
 *
 * 'use strict'
 * const reverse = require('@eluvio/elv-js-helpers/Functional/reverse')
 *
 * reverse([1, 2, 3])                 //=> [3, 2, 1]
 *
 * reverse("abc")                 //=> "cba"
 *
 */
const reverse = x => _reverse(x)

module.exports = reverse
