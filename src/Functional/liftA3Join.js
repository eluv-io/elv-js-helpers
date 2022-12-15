const chain = require('crocks/pointfree/chain')
const compose = require('crocks/helpers/compose')
const identity = require('crocks/combinators/identity')
const nAry = require('crocks/helpers/nAry')

const liftA3 = require('./liftA3')

/**
 * Converts a function which accepts 3 'normal' values and returns a wrapped value into a  function that takes 3
 * wrapped values and returns a wrapped value.
 *
 * This is similar to the `liftA3` function, except that it works with functions that return a wrapped data type,
 * instead of functions that return a 'normal' value.
 *
 * NOTE: The original function must be curried.
 *
 * Note that the type of the wrapped inputs must be the same as the type of the wrapped output of the function.
 *
 * For example, if the original function returns a `Maybe`, then the inputs fed into the converted function must also be
 * `Maybe`s (i.e. `Just` or `Nothing`)
 *
 * If the original function returns a `Result`, then the inputs fed into the converted function must also be
 * `Result`s (i.e. `Ok` or `Err`)
 *
 * @function
 * @curried
 * @category Functional
 * @sig Function -> Function
 * @param {Function} - A function which takes 3 'normal' values and returns a wrapped value (e.g. a Crocks Result)
 * @returns {Function} New function which takes 3 wrapped values and returns a wrapped value
 * @example
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const curry = require('@eluvio/elv-js-helpers/Functional/curry')
 * const liftA3Join = require('@eluvio/elv-js-helpers/Functional/liftA3Join')
 *
 * const div3 = curry(
 *   (x, y, z) => y === 0 || z === 0 ?
 *     Err(['division by zero']) :
 *     Ok(x / y / z)
 * )
 *
 * const div3Wrapped = liftA3Join(div3)
 *
 * div3Wrapped(
 *   Ok(42),
 *   Ok(3),
 *   Ok(2)
 * )                           //=> Ok 7
 *
 * div3Wrapped(
 *   Ok(42),
 *   Ok(0),
 *   Ok(2)
 * )                           //=> Err [ "division by zero" ]
 *
 * div3Wrapped(
 *   Err(['failed to read x']),
 *   Ok(0),
 *   Ok(2)
 * )                           //=> Err [ "failed to read x" ]
 *
 * div3Wrapped(
 *   Ok(42),
 *   Err(['failed to read y']),
 *   Ok(2)
 * )                           //=> Err [ "failed to read y" ]
 *
 * div3Wrapped(
 *   Err(['failed to read x']),
 *   Err(['failed to read y']),
 *   Err(['failed to read z'])
 * )                           //=> Err [ "failed to read x", "failed to read y", "failed to read z" ]
 */
const liftA3Join = nAry(4, compose(chain(identity), liftA3))

module.exports = liftA3Join
