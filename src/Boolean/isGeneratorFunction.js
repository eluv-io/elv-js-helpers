const kind = require('../Validation/kind')

/**
 * Returns `true` if passed a GeneratorFunction.
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
 *
 */
const isGeneratorFunction = x => kind(x) === 'GeneratorFunction'

module.exports = isGeneratorFunction


