const Maybe = require('crocks/Maybe')

/**
 * Passthrough for the `Just` variety of the `Maybe` [Crocks Algebraic Data Type](https://crocks.dev/docs/crocks/)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * See [https://crocks.dev/docs/crocks/Maybe.html](https://crocks.dev/docs/crocks/Maybe.html) for more details.
 *
 * Allows users of `elv-js-helpers` to create `Just` objects without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * There are 2 kinds of `Maybe` objects, `Just` and `Nothing`, that wrap successful and failed value retrievals, respectively.
 *
 * `Maybe` objects are useful for handling errors in Functional pipelines where a value may not be found.
 *
 * Normally, one does not create generic `Maybe` object instances, but rather `Just` or `Nothing` instances.
 *
 * @function
 * @category ADT
 * @sig a -> Just a
 * @param {*} - The value to wrap in a `Just`
 * @returns {Maybe}
 * @example
 *
 * const Just = require('@eluvio/elv-js-helpers/ADT/Just')
 *
 * Just(42).inspect()    //=> 'Just 42'
 */
const Just = Maybe.Just

module.exports = Just
