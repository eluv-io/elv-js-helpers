'use strict'
/**
 * Passthrough for Ramda's [`last`](https://ramdajs.com/docs/#last) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns last element of a list or last character of a string, or `undefined` if there is no last element, and empty
 * string if there is no last character
 *
 * @function
 * @category Functional
 * @sig [*] → * | undefined | EXCEPTION
 * @sig String → String
 * @param {List} - an iterable list of elements
 * @returns {Any | String} Last element of array or last character of string
 * @see head, init, tail
 * @example
 *
 * 'use strict'
 * const last = require('@eluvio/elv-js-helpers/Functional/last')
 *
 * last([1, 2, 3, 4, 5])      //=> 5
 * last([1])                  //=> 1
 * last([])                   //=> undefined
 *
 * last('abc')                //=> 'c'
 * last('a')                  //=> 'a'
 * last('')                   //=> ''
 *
 * // NOTE: bad data types are ignored
 * last(0)                    //=> undefined
 *
 * last({foo: 'bar'})         //=> undefined
 *
 * // undefined will produce an exception
 * last(undefined)            //=> EXCEPTION: 'Cannot read properties of undefined'
 *
 */
const last = require('@eluvio/ramda-fork/src/last')

module.exports = last
