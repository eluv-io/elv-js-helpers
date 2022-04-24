
const curry = require('crocks/helpers/curry')
const kindOf = require('kind-of')

/**
 * Returns `true` if value is of the specified type, `false` otherwise.
 *
 * The type is determined using the [kind-of](https://github.com/jonschlinkert/kind-of) package.
 *
 * @function
 * @since v0.0.1
 * @category Logic
 * @sig String -> * -> Boolean
 * @param {String} kindName - Lower case string expected when value is passed to [kind-of](https://github.com/jonschlinkert/kind-of).
 * @param {Any} x - The value to test
 * @returns {Boolean}
 *
 * @example
 *
 * isOfKind('array', [1, 2, 3]) //=> true
 *
 * isOfKind('array', 1, 2, 3) //=> false
 *
 * isOfKind('array', 'foo') //=> false
 *
 */
const isOfKind = curry(
  (kindName, x) => kindOf(x) === kindName
)

module.exports = isOfKind
