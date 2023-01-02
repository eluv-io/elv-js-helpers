const curry = require('../Functional/curry')

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
 * @category Boolean
 * @sig (* -> *) -> * -> * -> Boolean
 * @param {Function} preprocessFn - function to use to preprocess inputs, to allow them to be compared with `>`
 * @param {*} value1 - the first value to compare
 * @param {*} value2 - the second value to compare
 * @returns {Boolean}
 * @example
 *
 * const isGTCustom = require('@eluvio/elv-js-helpers/Boolean/isGTCustom')
 *
 * const strLength = str => str.length
 * const isLongerThan = isGTCustom(strLength)
 *
 * isLongerThan('a', 'ab')                               //=> true
 *
 * isLongerThan('ab', 'a')                               //=> false
 *
 * // x.length returns undefined for x === 42, undefined > undefined returns false:
 * isLongerThan(42, 42)                                  //=> false
 *
 * isLongerThan(null, undefined)                         //=> EXCEPTION: "Cannot read properties of null (reading 'length')"
 *
 * // function is curried: can call with more than 1 argument
 *
 * // example: call with 2 args
 * const isLongerThan3Chars = isGTCustom(strLength, 'foo')
 *
 * isLongerThan3Chars('bar')                             //=> false
 *
 * isLongerThan3Chars('foobar')                          //=> true
 *
 * // example: call with 3 args
 * isGTCustom(strLength, 'foo', 'bar')                   //=> false
 *
 * isGTCustom(strLength, 'foo', 'foobar')                //=> true
 */
const isGTCustom = curry(
  (preProcessFn, value1, value2) => isGT(preProcessFn(value1), preProcessFn(value2))
)

module.exports = isGTCustom
