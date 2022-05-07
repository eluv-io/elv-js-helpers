const chain = require('crocks/pointfree/chain')
const compose = require('crocks/helpers/compose')
const identity = require('crocks/combinators/identity')
const liftA2 = require('crocks/helpers/liftA2')
const nAry = require('crocks/helpers/nAry')

/**
 * Converts a function which accepts 2 'normal' values and returns a wrapped value into a
 * function that takes 2 wrapped values and returns a wrapped value.
 *
 * NOTE: The original function must be curried.
 *
 * Note that the type of the wrapped inputs must be the same as the type of the wrapped output of the function.
 *
 * For example, if the original function returns a Maybe, then the inputs fed into the converted function must also be
 * Maybes (i.e. Just or Nothing)
 *
 * If the original function returns a Result, then the inputs fed into the converted function must also be
 * Results (i.e. Ok or Err)
 *
 * @function
 * @curried
 * @category Functional
 * @sig Function -> Function
 * @param {Function} - A function which takes 2 'normal' values and returns a wrapped value (e.g. a Crocks Result)
 * @returns {Function} New function which takes 2 wrapped values and returns a wrapped value
 *
 * @example
 *
 * const {Ok, Err} = require('crocks/Result')
 * const curry = require('crocks/helpers/curry')
 *
 * const liftA2Join = require('@eluvio/elv-js-helpers/liftA2Join')
 *
 * const div = curry(
 *   (x, y) => y === 0 ?
 *     Err(['division by zero']) :
 *     Ok(x / y)
 * )
 *
 * divWrapped = liftA2Join(div)
 *
 * divWrapped(
 *   Ok(42),
 *   Ok(2)
 * )                           //=> Ok 21
 *
 * divWrapped(
 *   Ok(42),
 *   Ok(0)
 * )                           //=> Err [ "division by zero" ]
 *
 * divWrapped(
 *   Err(['failed to read x']),
 *   Ok(0)
 * )                           //=> Err [ "failed to read x" ]
 *
 * divWrapped(
 *   Ok(42),
 *   Err(['failed to read y'])
 * )                           //=> Err [ "failed to read y" ]
 *
 * divWrapped(
 *   Err(['failed to read x']),
 *   Err(['failed to read y'])
 * )                           //=> Err [ "failed to read x", "failed to read y" ]
 */
const liftA2Join = nAry(3, compose(chain(identity), liftA2))

module.exports = liftA2Join
