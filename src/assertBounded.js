const isNil = require('ramda/src/isNil')

const _assertBoundedBetween = require('./internal/_assertBoundedBetween')
const _assertBoundedLower = require('./internal/_assertBoundedLower')
const _assertBoundedUpper = require('./internal/_assertBoundedUpper')
const _assertNothing = require('./internal/_assertNothing')

const compare = require('./compare')
const truthTable = require('./truthTable')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input satisfies the specified bound(s) OR **the input is not a valid instance of the specified model to be bounded**
 * * `false` if the input **is a valid instance of the specified model** AND violates the specified bound(s)
 *
 * This means that the assertion will PASS if the input is not a valid instance of the model to be bounded. The purpose
 * of this is to prevent redundant errors, e.g. 'foo' is not a Number, 'foo' must be < 1.
 *
 * The second element is either an error string or a function to generate an error message. If it is a function, it will
 * get called by ObjectModel when it validates a model and fails, passing in the assertion result (generally `false`),
 * the failing value, and any attribute name(s) that were traversed to access the value.
 *
 * @function
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> a -> a -> Boolean -> Boolean -> [(* -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Model} model - The model to be bounded
 * @param {*} lowerBound - The lower bound that must be satisfied. If `null`, no lower bound will be checked.
 * @param {*} upperBound - The upper bound that must be satisfied. If `null`, no upper bound will be checked.
 * @param {Boolean} lowerInclusive - If `true` (and `lowerBound` is not `null`) then input is allowed to equal `lowerBound`.
 * @param {Boolean} upperInclusive - If `true` (and `upperBound` is not `null`) then input is allowed to equal `upperBound`.
 * @param {Function} [comparatorFn=compare] - Function used to compare the input against bound(s).
 * Must accept two values and return -1 if first value is less than the second,
 * 1 if the second value is less than the first, and zero otherwise.
 * This enables adding bounds to a model type that cannot be compared using Javascript's
 * [less than (<)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) operator.
 *
 * @returns {Array} 2-element array [Function, Function | String]. See description for details.
 *
 * @example
 *
 * // Note use of spread operator (...) to unpack the array returned by assertBounded()
 * const NumberBetweenZeroAndOneModel = NumberModel.extend()
 *   .assert(...assertBounded(NumberModel, 0, 1, true, true))
 *   .as('NumberBetweenZeroAndOne')`
 *
 */
const assertBounded = (model, lowerBound, upperBound, lowerInclusive, upperInclusive, comparatorFn = compare) =>
  truthTable(
    [
      _assertBoundedBetween(model, lowerBound, upperBound, lowerInclusive, upperInclusive, comparatorFn), // false,false: both bounds present
      _assertBoundedLower(model, lowerBound, lowerInclusive, comparatorFn), // false,true: only check lower bound
      _assertBoundedUpper(model, upperBound, upperInclusive, comparatorFn), // true,false: only check upper bound
      _assertNothing() // true,true: no bounds passed in, value always valid (allowed for convenience)
    ],
    [isNil(lowerBound), isNil(upperBound)]
  )

module.exports = assertBounded
