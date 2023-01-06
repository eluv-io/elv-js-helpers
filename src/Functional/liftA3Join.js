const chain = require('./chain')
const compose = require('crocks/helpers/compose')
const identity = require('./identity')
const setArity = require('./setArity')

const liftA3 = require('./liftA3')

/**
 * Converts a function which accepts 3 'normal' values and returns a **wrapped** value (i.e. an ADT) into a  function
 * that takes 3 wrapped values and returns a wrapped value.
 *
 * This is similar to the `liftA3` function, except that it avoids adding an extra layer of wrapping to the returned value.
 *
 * NOTE: The original function must be curried.
 *
 * Note that the wrapper type of the inputs must be the same as the wrapper type returned by the function.
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
 * const liftA3Join = require('@eluvio/elv-js-helpers/Functional/liftA3Join')
 *
 * const curry = require('@eluvio/elv-js-helpers/Functional/curry')
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * // define a function that accepts 'normal' types as inputs and returns a wrapped type (an ADT)
 * const div3 = curry(
 *   (x, y, z) => y === 0 || z === 0 ?
 *     Err(['division by zero']) :
 *     Ok(x / y / z)
 * )
 *
 * // convert into a function that accepts wrapped types as inputs instead (and still returns a wrapped type)
 * const div3Wrapped = liftA3Join(div3)
 *
 * div3Wrapped(
 *   Ok(42),
 *   Ok(3),
 *   Ok(2)
 * ).inspect()                           //=> 'Ok 7'
 *
 * div3Wrapped(
 *   Ok(42),
 *   Ok(0),
 *   Ok(2)
 * ).inspect()                           //=> 'Err [ "division by zero" ]'
 *
 * div3Wrapped(
 *   Err(['failed to read x']),
 *   Ok(0),
 *   Ok(2)
 * ).inspect()                           //=> 'Err [ "failed to read x" ]'
 *
 * div3Wrapped(
 *   Ok(42),
 *   Err(['failed to read y']),
 *   Ok(2)
 * ).inspect()                           //=> 'Err [ "failed to read y" ]'
 *
 * div3Wrapped(
 *   Err(['failed to read x']),
 *   Err(['failed to read y']),
 *   Err(['failed to read z'])
 * ).inspect()                           //=> 'Err [ "failed to read x", "failed to read y", "failed to read z" ]'
 */
const liftA3Join = setArity(4, compose(chain(identity), liftA3))

module.exports = liftA3Join
