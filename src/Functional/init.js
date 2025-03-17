'use strict'
/**
 * Passthrough for Ramda's [`init`](https://ramdajs.com/docs/#init) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns all but the last element of a list or string
 *
 * @function
 * @category Functional
 * @sig [*] → [*]
 * @sig String → String
 * @param {List} - an iterable list of elements
 * @returns {Array | String} Array containing all but the last element, or String containing all but the last character
 * @see last, head, tail
 * @example
 *
 * 'use strict'
 * const init = require('@eluvio/elv-js-helpers/Functional/init')
 *
 * init([1, 2, 3, 4, 5])      //=> [1, 2, 3, 4]
 * init([1])                  //=> []
 * init([])                   //=> []
 *
 * init('abc')                //=> 'ab'
 * init('a')                  //=> ''
 * init('')                   //=> ''
 *
 * // NOTE: bad data types are ignored
 * init(0)                    //=> []
 *
 * init({foo: 'bar'})         //=> []
 *
 * // undefined will produce an exception
 * init(undefined)            //=> EXCEPTION: 'Cannot read properties of undefined'
 *
 */
const init = require('@eluvio/ramda-fork/src/init')

module.exports = init