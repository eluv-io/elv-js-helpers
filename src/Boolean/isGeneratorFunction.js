const kind = require('../Validation/kind')

/**
 * Returns `true` if passed a GeneratorFunction.
 *
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isGeneratorFunction = require('@eluvio/elv-js-helpers/Boolean/isGeneratorFunction')
 *
 * function* numbersUpTo(x) {
 *   for (let i = 0; i < x; i++) {
 *     yield i
 *   }
 * }
 *
 * isGeneratorFunction(numbersUpTo)      //=> true
 *
 * isGeneratorFunction(Math.round)       //=> false
 *
 * isGeneratorFunction(undefined)        //=> false
 *
 */
const isGeneratorFunction = x => kind(x) === 'GeneratorFunction'

module.exports = isGeneratorFunction


