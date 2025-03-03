'use strict'
const Result = require('crocks/Result')

/**
 * Passthrough for the `Ok` variety of the `Result` [Crocks Algebraic Data Type](https://crocks.dev/docs/crocks/)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * See [https://crocks.dev/docs/crocks/Result.html](https://crocks.dev/docs/crocks/Result.html) for more details.
 *
 * Allows users of `elv-js-helpers` to create `Ok` objects without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * There are 2 kinds of `Result` objects, `Ok` and `Err`, that wrap successful and failed computations, respectively.
 *
 * `Result` objects are useful for handling errors in Functional pipelines and can collect multiple errors from various
 * branches of a workflow.
 *
 * Normally, one does not create generic `Result` object instances, but rather `Ok` or `Err` instances.
 *
 * @function
 * @category ADT
 * @sig a -> Ok a
 * @param {*} - The value to wrap in an `Ok`
 * @returns {Result}
 * @example
 *
 * 'use strict'
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * Ok(42).inspect()    //=> 'Ok 42'
 *
 */
const Ok = Result.Ok

module.exports = Ok
