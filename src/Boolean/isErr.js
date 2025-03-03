const either = require('../Functional/either')
const F = require('../Functional/F')
const T = require('../Functional/T')

const isResult = require('./isResult')

/**
 * Returns `true` if passed a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) instance.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * 'use strict'
 * const isErr = require('@eluvio/elv-js-helpers/Boolean/isErr')
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * isErr(Err(['invalid query'])) //=> true
 *
 * isErr(Ok(42))                 //=> false
 *
 * isErr('foo')                  //=> false
 *
 */
const isErr = x => isResult(x) && either(T, F, x)

module.exports = isErr
