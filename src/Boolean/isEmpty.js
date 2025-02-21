/**
 * Passthrough for the [Ramda `isEmpty` function](https://ramdajs.com/docs/#isEmpty) _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns `true` if a value is the empty value for its type, `false` otherwise.
 *
 * @function
 * @curried
 * @category Boolean
 * @sig a -> -> Boolean
 * @param {*} - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isEmpty = require('@eluvio/elv-js-helpers/Boolean/isEmpty')
 *
 * isEmpty([42])                //=> false
 *
 * isEmpty([])                  //=> true
 *
 * isEmpty('')                  //=> true
 *
 * isEmpty(null)                //=> false
 *
 * isEmpty({})                  //=> true
 *
 * isEmpty({foo: 'bar'})        //=> false
 */
const isEmpty = require('@eluvio/ramda-fork/src/isEmpty')

module.exports = isEmpty
