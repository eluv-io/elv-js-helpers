'use strict'
/**
 * Passthrough for Ramda's [`head`](https://ramdajs.com/docs/#head) function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns first element of a list or last character of a string, or `undefined` if there is no first element,
 * and empty string if there is no last character
 *
 * @function
 * @category Functional
 * @sig [*] → * | undefined | EXCEPTION
 * @sig String → String
 * @param {List} - an iterable list of elements
 * @returns {Any | String | undefined} First element of array or first character of string
 * @see init, last, tail
 * @example
 *
 * 'use strict'
 * const head = require('@eluvio/elv-js-helpers/Functional/head')
 *
 * head([1, 2, 3, 4, 5])      //=> 1
 * head([1])                  //=> 1
 * head([])                   //=> undefined
 *
 * head('abc')                //=> 'a'
 * head('a')                  //=> 'a'
 * head('')                   //=> ''
 *
 * // NOTE: bad data types are ignored
 * head(0)                    //=> undefined
 *
 * head({foo: 'bar'})         //=> undefined
 *
 * // undefined will produce an exception
 * head(undefined)            //=> EXCEPTION: 'Cannot read properties of undefined'
 *
 */
const head = require('@eluvio/ramda-fork/src/head')

module.exports = head
