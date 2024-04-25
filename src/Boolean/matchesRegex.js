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
 * const isThreeDigitNum = matchesRegex(/^[0-9]{3}$/)
 *
 * isThreeDigitNum('123')               //=> true
 *
 * // Javascript does automatic type conversion in this case
 * isThreeDigitNum(123)                 //=> true
 *
 * isThreeDigitNum('foo')               //=> false
 *
 * isThreeDigitNum('001')               //=> true
 *
 * isThreeDigitNum(1)                   //=> false
 *
 */
const matchesRegex = curry((a, b) => a.test(b))

module.exports = matchesRegex
