const curry = require('crocks/helpers/curry')

const boolsToInt = require('../Conversion/boolsToInt')

/**
 * Returns an item from an array of choices, making the choice based on a separate array of booleans.
 *
 * Used to express multilevel if-then control flows in a more Functional style.
 *
 * @function
 * @curried
 * @category Functional
 * @sig [*] -> [Boolean] -> *
 * @param {Array} choiceArray An array of items to choose from
 * @param {Boolean[]} boolArray An array of booleans used to determine which element to return from choiceArray
 * @returns {Any}
 * @example
 *
 * // Given the following table:
 *
 * // | isChild | isMale | result  |
 * // |---------|--------|---------|
 * // |    F    |    F   | 'woman' |
 * // |    F    |    T   |  'man'  |
 * // |    T    |    F   |  'girl' |
 * // |    T    |    T   |  'boy'  |
 *
 * const truthTable = require('@eluvio/elv-js-helpers/Functional/truthTable')
 *
 * let isChild = false
 * let isMale = false
 *
 * truthTable(['woman','man','girl','boy'],[isChild, isMale]) //=> "woman"
 *
 * // For comparison - expressed using if/then
 * if(isChild) {
 *   if(isMale) {
 *     return 'boy'
 *   } else {
 *     return 'girl'
 *   }
 * } else {
 *   if(isMale) {
 *     return 'man'
 *   } else {
 *     return 'woman'
 *   }
 * }
 *
 */
const truthTable = curry(
  (choiceArray, boolArray) => choiceArray[boolsToInt(boolArray)]
)

module.exports = truthTable
