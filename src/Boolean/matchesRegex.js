const curry = require('../Functional/curry')

/**
 * Returns `true` if second input is matches regex in first input, `false` otherwise.
 *
 * If called with fewer than 2 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * @function
 * @curried
 * @category Boolean
 * @sig RegExp -> * -> Boolean
 * @param {RegExp} re - the regexp to use to test
 * @param {*} value - the value to test
 * @returns {Boolean}
 * @example
 *
 * const matchesRegex = require('@eluvio/elv-js-helpers/Boolean/matchesRegex')
 *
 * matchesRegex(/a/, 'abc')             //=> true
 *
 * matchesRegex(/a/, 'def')             //=> false
 *
 * matchesRegex(/a/, 0)                 //=> false
 *
 * // function is curried: can call with fewer params to obtain a narrower function
 * const isFourDigitNumString = matchesRegex(/^[0-9]{4}$/)
 *
 * isFourDigitNumString('1234')         //=> true
 *
 * isFourDigitNumString('0001')         //=> true
 *
 * isFourDigitNumString('foo')          //=> false
 *
 * isFourDigitNumString(1234)           //=> false
 *
 */
const matchesRegex = curry((a, b) => a.test(b))

module.exports = matchesRegex
