const assertAfterCheck = require('./assertAfterCheck')

const isArray = require('../Boolean/isArray')
const neighborsPass = require('../Boolean/neighborsPass')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element returned is a function that will take an input and return:
 *
 * * `true` if the input is ordered OR **the input is not array**
 * * `false` if the input **is an array** AND is not ordered.
 *
 * This means that the assertion will PASS if the input is not a valid array. The purpose
 * of this is to prevent redundant errors, e.g. 'foo' is not an Array, 'foo' is not sorted.
 *
 * The second element returned is a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message if the bounds validation fails.
 *
 * Whether the array is ordered or not is determined by `orderingFn`, a function that takes two inputs and returns
 * `true` if the inputs are in order or `false` otherwise.
 *
 * Note that this function is equivalent to `assertNeighborsPass`, but with `checkFn` renamed to `orderingFn`.
 *
 * @function
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => ((*, *) -> Boolean) -> (Function | String) -> [([*] -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Function} orderingFn - A 2-input function that returns `true` if the inputs are considered to be in order,
 * `false` otherwise. Note that this function could check for ascending or descending order, and allow or disallow duplicates.
 * It could also check for any arbitrary pair-wise condition to be considered 'ordered', but the most common case is
 * checking whether an array is sorted or not.
 * @param {(Function | String)} errStrOrFn - Error message to use when ordering check fails.
 * @returns {Array} 2-element array [Function, Function]. See description for details.
 * @example
 *
 * const assertOrdered = require('@eluvio/elv-js-helpers/ModelAssertion/assertOrdered')
 *
 * const defArrModel = require('@eluvio/elv-js-helpers/ModelFactory/defArrModel')
 *
 * // Note use of spread operator (...) to unpack the array returned by assertOrdered()
 * const OrderedNumArrayModel = defArrModel('OrderedArray', Number).extend()
 *   .assert(
 *     ...assertOrdered(
 *       (x, y) => x <= y,
 *       'is not in ascending order'
 *     )
 *   ).as('OrderedNumArray')
 *
 * OrderedNumArrayModel([1, 2, 3])     //=> [1, 2, 3]
 *
 * OrderedNumArrayModel([])            //=> []
 *
 * OrderedNumArrayModel([3, 2])        //=> EXCEPTION: 'Value is not in ascending order (got: [3,2])'
 *
 * OrderedNumArrayModel('foo')         //=> EXCEPTION: 'expecting Array of Number, got String "foo"'
 *
 */
const assertOrdered = (orderingFn, errStrOrFn) =>
  assertAfterCheck(
    isArray,
    neighborsPass(orderingFn),
    errStrOrFn
  )

module.exports = assertOrdered
