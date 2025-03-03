'use strict'
const chain = require('./chain')
const compose = require('crocks/helpers/compose')
const identity = require('./identity')
const liftA2 = require('./liftA2')
const setArity = require('./setArity')

/**
 * Converts a function which accepts 2 'normal' values and returns a **wrapped** value (i.e. an ADT) into a  function
 * that takes 2 wrapped values and returns a wrapped value.
 *
 * This is similar to the `liftA2` function, except that it avoids adding an extra layer of wrapping to the returned value.
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
 * @param {Function} - A function which takes 2 'normal' values and returns a wrapped value (e.g. a Crocks Result)
 * @returns {Function} New function which takes 2 wrapped values and returns a wrapped value
 * @example
 *
 * 'use strict'
 * const liftA2Join = require('@eluvio/elv-js-helpers/Functional/liftA2Join')
 *
 * const curry = require('@eluvio/elv-js-helpers/Functional/curry')
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * // define a function that accepts 'normal' types as inputs and returns a wrapped type (an ADT)
 * const div = curry(
 *   (x, y) => y === 0 ?
 *     Err(['division by zero']) :
 *     Ok(x / y)
 * )
 *
 * // convert into a function that accepts wrapped types as inputs instead (and still returns a wrapped type)
 * const divWrapped = liftA2Join(div)
 *
 * divWrapped(
 *   Ok(42),
 *   Ok(2)
 * ).inspect()                          //=> 'Ok 21'
 *
 * divWrapped(
 *   Ok(42),
 *   Ok(0)
 * ).inspect()                          //=> 'Err [ "division by zero" ]'
 *
 * divWrapped(
 *   Err(['failed to read x']),
 *   Ok(0)
 * ).inspect()                          //=> 'Err [ "failed to read x" ]'
 *
 * divWrapped(
 *   Ok(42),
 *   Err(['failed to read y'])
 * ).inspect()                          //=> 'Err [ "failed to read y" ]'
 *
 * divWrapped(
 *   Err(['failed to read x']),
 *   Err(['failed to read y'])
 * ).inspect()                          //=> 'Err [ "failed to read x", "failed to read y" ]'
 */
const liftA2Join = setArity(3, compose(chain(identity), liftA2))

module.exports = liftA2Join
