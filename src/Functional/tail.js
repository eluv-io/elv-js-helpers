'use strict'
/**
 * Passthrough for Ramda's [`tail`](https://ramdajs.com/docs/#tail) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns all but the first element of a list or string
 *
 * @function
 * @category Functional
 * @sig [*] → [*] | EXCEPTION
 * @sig String → String
 * @param {List} - an iterable list of elements
 * @returns {Array | String} Array containing all but the first element, or String containing all but the first character
 * @see head, init, last
 * @example
 *
 * 'use strict'
 * const tail = require('@eluvio/elv-js-helpers/Functional/tail')
 *
 * tail([1, 2, 3, 4, 5])      //=> [2, 3, 4, 5]
 * tail([1])                  //=> []
 * tail([])                   //=> []
 *
 * tail('abc')                //=> 'bc'
 * tail('a')                  //=> ''
 * tail('')                   //=> ''
 *
 * // NOTE: bad data types are ignored
 * tail(0)                    //=> []
 *
 * tail({foo: 'bar'})         //=> []
 *
 * // undefined will produce an exception
 * tail(undefined)            //=> EXCEPTION: 'Cannot read properties of undefined'
 *
 */
const tail = require('@eluvio/ramda-fork/src/tail')

module.exports = tail
