/**
 * Passthrough for the `liftA3()` [Crocks](https://crocks.dev/) function
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * See [https://crocks.dev/docs/functions/helpers.html#lifta3](https://crocks.dev/docs/functions/helpers.html#lifta3)
 * for more details.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * [Lifting](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch10#bro-do-you-even-lift) converts a function
 * that works with 'normal' values as inputs and outputs and converts it into a function that works with values
 * that are wrapped in a Functional data type (ADT) like `Ok`, `Err`, `List`, and `Pair`. The converted function will
 * also return a value wrapped in a Functional data type.
 *
 * This adapts the function to be able to compose into Functional workflows, making it easier to add things like
 * input Validation, error collection, and asynchronous event handling to the function cleanly.
 *
 * `liftA3` specifically converts 3-input curried functions.
 *
 * @function
 * @curried
 * @category Functional
 * @sig Applicative m => (a -> b -> c -> d) -> m a -> m b -> m c -> m d
 * @param {Function} - The 3-input curried function to lift
 * @returns {Function} The lifted function
 * @example
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/resultToPOJO')
 *
 * const curry = require('@eluvio/elv-js-helpers/Functional/curry')
 * const liftA3 = require('@eluvio/elv-js-helpers/Functional/liftA3')
 *
 * const mult3 = (a, b, c) => a * b * c                            // function that takes and returns 'normal' values
 *
 * mult3(42, 42, 42)                                               // 74088
 *
 * const liftedMult3 = liftA3(curry(mult3))                        //=> convert function 'mult3' into one that works with values wrapped in Functional data types
 *
 * const okObject = Ok(42)                                         //=> Ok 42
 *
 * const errObject1 = Err('failed to obtain first input')          //=> Err ['failed to obtain first input'] (automatically converted to 1-element array)
 *
 * const errObject2 = Err(['failed to obtain second input'])       //=> Err ['failed to obtain second input']
 *
 * const errObject3 = Err(['failed to obtain third input'])        //=> Err ['failed to obtain third input']
 *
 * const goodResult = liftedMult3(okObject, okObject, okObject)    //=> Ok 74088
 *
 * console.log(resultToPOJO(goodResult))
 * '{ ok: true, result: 74088 }'
 *
 * const badResult1 = liftedMult(errObject1, okObject, okObject)   //=> Err ['failed to obtain first input']
 *
 * const badResult2 = liftedMult(okObject, errObject2, okObject)   //=> Err ['failed to obtain second input']
 *
 * const badResult3 = liftedMult(errObject1, errObject2, okObject) //=> Err ['failed to obtain first input', 'failed to obtain second input']
 *
 * console.log(resultToPOJO(badResult3))
 * `{
 *   ok: false,
 *   errors: [ 'failed to obtain first input', 'failed to obtain second input' ],
 *   errorDetails: [ 'failed to obtain first input', 'failed to obtain second input' ]
 * }`
 *
 * // liftA3 itself is curried, it can be called with 1-4 arguments as desired. If called with 4 arguments, it will
 * // immediately return the final result instead of returning a function.
 * liftA3(curry(mult), okObject, okObject, okObject)               //=> Ok 74088
 *
 */
const liftA3 = require('crocks/helpers/liftA3')

module.exports = liftA3
