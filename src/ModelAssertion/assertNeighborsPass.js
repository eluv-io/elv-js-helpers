const assertAfterCheck = require('./assertAfterCheck')

const isArray = require('../Boolean/isArray')
const neighborsPass = require('../Boolean/neighborsPass')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element returned is a function that will take an input and return:
 *
 * * `true` if all neighboring elements in input return `true` when fed into `checkFn` OR **the input is not array**
 * * `false` if the input **is an array** AND has at least one pair of neighboring elements that cause `checkFn` to return `false`.
 *
 * This means that the assertion will PASS if the input is not a valid Array. The purpose
 * of this is to prevent redundant errors, e.g. 'foo' is not an Array, 'foo' has neighbors that are not compatible.
 *
 * The second element returned is a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message if the bounds validation fails.
 *
 * Note that this function is equivalent to `assertOrdered`, but with `orderingFn` renamed to `checkFn`.
 *
 * @function
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => ((*, *) -> Boolean) -> (Function | String) -> [([*] -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Function} checkFn - A 2-input function that returns `true` if the inputs are considered to be compatible,
 * `false` otherwise.
 * @param {(Function | String)} errStrOrFn - Error message to use when ordering check fails.
 * @returns {Array} 2-element array [Function, Function]. See description for details.
 * @example
 *
 * const assertNeighborsPass = require('@eluvio/elv-js-helpers/ModelAssertion/assertNeighborsPass')
 *
 * const defBasicModel = require('@eluvio/elv-js-helpers/ModelFactory/defBasicModel')
 * const kind = require('@eluvio/elv-js-helpers/Validation/kind')
 *
 * // Note use of spread operator (...) to unpack the array returned by assertNeighborsPass()
 * const ArrayAllSameKindModel = defBasicModel('ArrayAllSameKindModel', Array).extend()
 *   .assert(
 *     ...assertNeighborsPass(
 *       (x, y) => kind(x) === kind(y),
 *       'elements are not all of the same kind'
 *     )
 *   )
 *
 * ArrayAllSameKindModel([1, 2, 3])     //=> [1, 2, 3] (proxied by ObjectModel)
 *
 * ArrayAllSameKindModel([])            //=> [] (proxied by ObjectModel)
 *
 * ArrayAllSameKindModel([42, 'a'])     //=>  EXCEPTION: 'Value elements are not all of the same kind (got: [42,"a"])'
 *
 * ArrayAllSameKindModel('foo')         //=> EXCEPTION: 'expecting Array, got String "foo"'
 *
 */
const assertNeighborsPass = (checkFn, errStrOrFn) =>
  assertAfterCheck(
    isArray,
    neighborsPass(checkFn),
    errStrOrFn
  )

module.exports = assertNeighborsPass
