const _boundDescLower = require('./_boundDescLower')
const _satisfiesLowerBound = require('./_satisfiesLowerBound')
const assertAfterCheck = require('../assertAfterCheck')
const checkVsModel = require('../checkVsModel')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input satisfies the specified bound OR **the input is not a valid instance of the specified model to be bounded**
 * * `false` if the input **is a valid instance of the specified model** AND violates the specified bound.
 *
 * This means that the assertion will PASS if the input is not a valid instance of the model to be bounded. The purpose
 * of this is to prevent redundant errors, e.g. 'foo' is not a Number, 'foo' must be > 1.
 *
 * The second element is a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message if the bounds validation fails.
 *
 * @function
 * @private
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> a -> Boolean -> [(* -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Model} model - The model to be bounded
 * @param {*} lowerBound - The lower bound that must be satisfied.
 * @param {Boolean} inclusive - If `true` (and `lowerBound` is not `null`) then input is allowed to equal `lowerBound`.
 * @param {Function} comparatorFn - Function used to compare input against `lowerBound`.
 * Must accept two values and return -1 if first value is less than the second,
 * 1 if the second value is less than the first, and zero otherwise.
 * This enables adding bounds to a model type that cannot be compared using Javascript's
 * [less than (<)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) operator.
 *
 * @returns {Array} 2-element array [Function, Function]. See description for details.
 *
 * @example
 *
 * const compare = require('@eluvio/elv-js-helpers/compare')
 *
 * // Note use of spread operator (...) to unpack the array returned by _assertBoundedLower()
 * const BaseballTeamSizeModel = IntegerModel.extend()
 *   .assert(..._assertBoundedLower(IntegerModel, 9, true, compare)
 *   .as('BaseballTeamSize')
 *
 */
const _assertBoundedLower = (model, lowerBound, inclusive, comparatorFn) =>
  assertAfterCheck(
    checkVsModel(model),
    _satisfiesLowerBound(lowerBound, inclusive, comparatorFn),
    _boundDescLower(lowerBound, inclusive)
  )

module.exports = _assertBoundedLower
