const nAry = require('crocks/helpers/nAry')
const psi = require('crocks/combinators/psi')

const isGT = require('./isGT')

/**
 * Preprocesses 2 inputs individually using a specified function, then compares them and returns `true` if SECOND input
 * is greater than the FIRST input, `false` otherwise.
 *
 * Note that order of arguments for comparison is the reverse of Ramda's `gt` function, this is to allow more intuitive
 * currying.
 *
 * The preprocessor function needs to make the inputs directly comparable using the standard `>` operator. (i.e. this
 * function does the equivalent of `return preProcessorFn(value1) > preProcessorFn(value2)`
 *
 * If called with fewer than 3 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * @function
 * @curried
 * @category Logic
 * @sig (* -> *) -> * -> * -> Boolean
 * @param {Function} - function to use to preprocess inputs, to allow them to be compared with `>`
 * @param {*} - the first value to compare
 * @param {*} - the second value to compare
 * @returns {Boolean}
 *
 * @example
 *
 * const isGTCustom = require('@eluvio/elv-js-helpers/isGTCustom')
 *
 * const isLongerThan = isGTCustom(str => str.length)
 *
 * isLongerThan('a', 'ab')                               //=> true
 *
 * isLongerThan('ab', 'a')                               //=> false
 *
 * isGT(42, 42)                                          //=> false (x.length returns undefined for x === 42, undefined > undefined returns false)
 *
 * isGT(null, undefined)                                 //=> EXCEPTION: "Cannot read properties of null (reading 'length')"
 *
 * // function is curried: can call with more than 1 argument
 *
 * // example: call with 2 args
 * const isLongerThan3Chars = isGTCustom(strLength, 'foo')
 *
 * console.log(isLongerThan3Chars('bar'))                //=> false
 *
 * console.log(isLongerThan3Chars('foobar'))             //=> true
 *
 * // example: call with 3 args
 * console.log(isGTCustom(strLength, 'foo', 'bar'))      //=> false
 *
 * console.log(isGTCustom(strLength, 'foo', 'foobar'))   //=> true
 */
const isGTCustom = nAry(3, psi(isGT))
// above is pointfree shorthand for curry((preprocessFn, val1, val2) => isGT(preprocessFn(val1), preprocessFn(val2))

module.exports = isGTCustom
