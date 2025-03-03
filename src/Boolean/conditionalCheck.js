'use strict'
const curry = require('../Functional/curry')
const negate = require('../Functional/negate')
const or = require('../Functional/or')

/**
 * Creates a function that:
 *
 * * Returns `true` if `preCheckFn` is `false` or checkFn is `true`.
 * * Returns `false` if `preCheckFn` is `true` and checkFn is `false`
 *
 * The effect is that `checkFn` is only performed if `preCheckFn` is `true`.
 *
 * If `preCheckFn` is `false`, checking is short-circuited and `true` is returned.
 *
 * Generally used to skip irrelevant checks and avoid redundant errors in assertions, e.g. 'foo' is not a number +
 * 'foo' must be > 0
 *
 * @function
 * @category Boolean
 * @sig (* -> Boolean) -> (* -> Boolean) -> (* -> Boolean)
 * @param {Function} preCheckFn - A 1-input function - the precondition for `checkFn` to take place
 * @param {Function} checkFn - A 1-input function - the actual check to perform
 * @returns {Function}
 * @example
 *
 * 'use strict'
 * const conditionalCheck = require('@eluvio/elv-js-helpers/Boolean/conditionalCheck')
 *
 * const isString = require('@eluvio/elv-js-helpers/Boolean/isString')
 *
 * const stringStartsWithF = conditionalCheck(isString, x => x.startsWith('f'))
 *
 * // Skip assertion, value is not a string:
 * stringStartsWithF(1)        //=> true
 *
 * stringStartsWithF('foo')    //=> true
 *
 * stringStartsWithF('bar')    //=> false
 *
 */
const conditionalCheck = curry(
  (preCheckFn, mainCheckFn) => or(negate(preCheckFn), mainCheckFn)
)

module.exports = conditionalCheck
