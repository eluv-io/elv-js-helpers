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
 * const chain = require('@eluvio/elv-js-helpers/Functional/chain')
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const map = require('@eluvio/elv-js-helpers/Functional/map')
 *
 * // function has only one input, not need to curry
 * const reciprocal = a => a === 0 ? Err(['division by zero']) : Ok(1/a)
 *
 * const ok4 = Ok(4)
 * const ok0 = Ok(0)
 * const badNum = Err(['failed to read input'])
 *
 * reciprocal(4).inspect()              //=> 'Ok 0.25'
 *
 * reciprocal(0).inspect()              //=> 'Err [ "division by zero" ]'
 *
 * // passing in a wrapped value results in NaN (reciprocal does not know to unwrap value before use)
 * reciprocal(ok4).inspect()            //=> 'Ok NaN'
 *
 * // chain() asks input wrapper to remove wrapping and pass value to function, then does not re-wrap the (wrapped) return value
 * chain(reciprocal, ok4).inspect()     //=> 'Ok 0.25'
 *
 * // reciprocal gets value 0 and returns Err
 * chain(reciprocal, ok0).inspect()     //=> 'Err [ "division by zero" ]'
 *
 * // badNum ignores request to apply reciprocal()
 * chain(reciprocal, badNum).inspect()  //=> 'Err [ "failed to read input" ]'
 *
 * // compare to map - (which does not specify that result should not be re-wrapped)
 * // return value is wrapped twice, once by reciprocal and once by ok4
 * map(reciprocal, ok4).inspect()       //=> 'Ok Ok 0.25'
 *
 * // chain is curried, it is possible to call with only the first argument to return a new function
 * const wrappedReciprocal = chain(reciprocal)
 *
 * wrappedReciprocal(ok4).inspect()     //=> 'Ok 0.25'
 *
 */
const chain = require('crocks/pointfree/chain')

module.exports = chain
