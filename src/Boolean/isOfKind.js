
const curry = require('crocks/helpers/curry')
const kindOf = require('../Validation/kindOf')

/**
 * Returns `true` if value is of the specified type, `false` otherwise.
 *
 * The type is determined using the [kind-of](https://github.com/jonschlinkert/kind-of) package.
 *
 * @function
 * @curried
 * @category Boolean
 * @sig String -> * -> Boolean
 * @param {String} kindName - Lower case string expected when value is passed to [kind-of](https://github.com/jonschlinkert/kind-of).
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isOfKind = require('@eluvio/elv-js-helpers/Boolean/isOfKind')
 *
 * isOfKind('array', [1, 2, 3]) //=> true
 *
 * isOfKind('array', 1, 2, 3)   //=> false
 *
 * isOfKind('array', 'foo')     //=> false
 *
 */
const isOfKind = curry(
  (kindName, x) => kindOf(x) === kindName
)

module.exports = isOfKind
