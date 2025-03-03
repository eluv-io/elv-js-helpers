'use strict'
/**
 * Passthrough for the `either()` [Crocks point-free function](https://crocks.dev/docs/functions/pointfree-functions.html)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * See [https://crocks.dev/docs/crocks/Result.html#either](https://crocks.dev/docs/crocks/Result.html#either)
 * for more details on how to use with the [Result ADT](https://crocks.dev/docs/crocks/Result.html).
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Given two functions, returns a function that takes a Result and:
 *
 *   If the Result is an Err, calls the first function with the value wrapped by the Err
 *   If the Result is an Ok, calls the second function with the value wrapped by the Ok
 *
 * @function
 * @category Functional
 * @sig (errVal -> x) -> (okVal -> x) -> Result errVal okVal -> x
 * @param {Function} - The function to apply to value contained in an Err
 * @param {Function} - The function to apply to value contained in an Ok
 * @returns {Function} Function which takes a Result and returns output of one of the two supplied functions
 * @example
 *
 * 'use strict'
 * const either = require('@eluvio/elv-js-helpers/Functional/either')
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const resultToString = either(
 *   v => `Err result: (${v})`,
 *   v => `Ok result: (${v})`
 * )
 *
 * resultToString(Ok(100))        //=> 'Ok result: (100)'
 * resultToString(Err('fail'))    //=> 'Err result: (fail)'
 *
 */
const either = require('crocks/pointfree/either')

module.exports = either
