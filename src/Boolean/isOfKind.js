const curry = require('../Functional/curry')
const kind = require('../Validation/kind')

/**
 * Returns `true` if value is of the specified type, `false` otherwise.
 *
 * The type is determined using the [kind](#kind) function.
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
 * isOfKind('Array', [1, 2, 3]) //=> true
 *
 * isOfKind('Array', 1, 2, 3)   //=> false
 *
 * isOfKind('Array', 'foo')     //=> false
 *
 */
const isOfKind = curry(
  (kindName, x) => kind(x) === kindName
)

module.exports = isOfKind
