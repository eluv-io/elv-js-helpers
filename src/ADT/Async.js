/**
 * Passthrough for the `Async` [Crocks Algebraic Data Type](https://crocks.dev/docs/crocks/)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Allows users of `elv-js-helpers` to create [`Async`](https://crocks.dev/docs/crocks/Async.html) objects without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * @function
 * @category ADT
 * @sig ((e -> (), a -> ()) -> ()) -> Async e a
 * @sig ((e -> (), a -> ()) -> (() -> ()) -> Async e a
 * @param {Function} - A binary function that accepts 2 unary functions, and may return a function - if it returns a function, this will be called if the Async is cancelled. The Async will call the binary function, feeding in a reject function and a resolve function, to be called to signal completion of task.
 * @returns {Async}
 * @example
 *
 * const Async = require('@eluvio/elv-js-helpers/ADT/Async')
 *
 *
 *
 */

const Async = require('crocks/Async')

module.exports = Async
