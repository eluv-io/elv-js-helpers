/**
 * Passthrough for the `Pair` [Crocks Algebraic Data Type](https://crocks.dev/docs/crocks/).
 *
 * See [https://crocks.dev/docs/crocks/Pair.html](https://crocks.dev/docs/crocks/Pair.html) for more details.
 *
 * Allows users of `elv-js-helpers` to create `Pair` objects without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * `Pair` objects are useful for creating functional pipelines where an original value and a derived value both need to
 * be carried forward. They can also be useful for manipulating key-value pairs, or any situation where a value needs
 * an accompanying tag.
 *
 * @function
 * @category ADT
 * @sig (a, b) -> Pair a b
 * @param {*} - The first (left) value to wrap in a `Pair`
 * @param {*} - The second (right) value to wrap in a `Pair`
 * @returns {Pair}
 * @example
 *
 * const Pair = require('@eluvio/elv-js-helpers/Pair')
 *
 * const p = Pair(1,2)    //=> Pair(1, 2)
 *
 * p.fst()                //=> 1
 *
 * p.snd()                //=> 2
 *
 * Pair(42)               //=> EXCEPTION: 'Pair: Must provide a first and second value'
 *
 */
const Pair = require('crocks/Pair')

module.exports = Pair
