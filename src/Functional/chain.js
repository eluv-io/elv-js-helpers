/**
 * Passthrough for the `chain()` [Crocks](https://crocks.dev/) function
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Provides a [pointfree](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch05#pointfree) way to call .chain()
 * on a value wrapped in a Functional data type.
 *
 * Given a curried function that takes a 'normal' value and returns a wrapped value, chain will convert it into a function
 * that takes a wrapped value. The returned value will not gain an extra layer of wrapping from the input.
 *
 * @function
 * @curried
 * @category Functional
 * @sig (a -> m b) -> m a -> m b
 * @param {Function} - A curried function that takes a 'normal' value and returns a wrapped value)
 * @param {Object} - Instance of Functional data type to pass into function
 * @returns {*} The wrapped result
 * @example
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const chain = require('@eluvio/elv-js-helpers/Functional/chain')
 * const curry = require('@eluvio/elv-js-helpers/Functional/curry')
 *
 * // function has only one input, not need to curry
 * const reciprocal = a => a === 0 ? Err(['division by zero']) : Ok(1/a)
 *
 * const ok4 = Ok(4)
 * const ok0 = Ok(0)
 * const badNum = Err(['failed to read input'])
 *
 * reciprocal(4)              //=> Ok 0.25
 *
 * reciprocal(0)              //=> Ok 0.25
 *
 * reciprocal(ok4)            //=> Ok NaN (reciprocal does not know to unwrap value before use)
 *
 * chain(reciprocal, ok4)     //=> Ok 0.25 (chain asks input wrapper to remove wrapping and pass value to function, and not re-wrap the return value)
 *
 * chain(reciprocal, ok0)     //=> Err ['division by zero'] (reciprocal gets value 0 and returns Err)
 *
 * chain(reciprocal, badNum)  //=> Err ['failed to read input'] (badNum ignores request to apply reciprocal)
 *
 * // compare vs map, which does not specify that result should not be re-wrapped
 * const map = require('@eluvio/elv-js-helpers/Functional/map')
 *
 * map(reciprocal, ok4)       //=> Ok Ok 0.25 (return value is wrapped twice, once by reciprocal and once by ok4)
 *
 * // chain is curried, it is possible to call with only the first argument to return a new function
 * const wrappedReciprocal = chain(reciprocal)
 *
 * wrappedReciprocal(ok4)     //=> Ok 0.25
 *
 */
const chain = require('crocks/pointfree/chain')

module.exports = chain
