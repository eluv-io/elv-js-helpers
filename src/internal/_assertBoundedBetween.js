const _assertWithPrecheck = require('./_assertWithPrecheck')
const _boundDescBetween = require('./_boundDescBetween')
const _satisfiesBetweenBounds = require('./_satisfiesBetweenBounds')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input satisfies the specified bounds OR **the input is not a valid instance of the specified model to be bounded**
 * * `false` if the input **is a valid instance of the specified model** AND violates the specified bounds.
 *
 * This means that the assertion will PASS if the input is not a valid instance of the model to be bounded. The purpose
 * of this is to prevent redundant errors, e.g. 'foo' is not a Number, 'foo' must be > 0 and < 42.
 *
 * The second element is a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message if the bounds validation fails.
 *
 * @function
 * @private
 * @since v0.0.1
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> a -> a -> Boolean -> Boolean -> [(* -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Model} model - The model to be bounded
 * @param {Any} lowerBound - The lower bound that must be satisfied.
 * @param {Any} upperBound - The upper bound that must be satisfied.
 * @param {Boolean} lowerInclusive - If `true` then input is allowed to equal `lowerBound`.
 * @param {Boolean} upperInclusive - If `true` then input is allowed to equal `upperBound`.
 * @param {Function} comparatorFn - Function used to compare input against `lowerBound` and `upperBound`.
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
 * const CartonEggCountModel = IntegerModel.extend()
 *   .assert(..._assertBoundedBetween(IntegerModel, 0, 12, true, true, compare)
 *   .as('CartonEggCount')
 *
 */
const _assertBoundedBetween = (model, lowerBound,upperBound, lowerInclusive,upperInclusive, comparatorFn) =>
  _assertWithPrecheck(
    model,
    _satisfiesBetweenBounds(lowerBound, upperBound, lowerInclusive, upperInclusive, comparatorFn),
    _boundDescBetween(lowerBound,upperBound, lowerInclusive,upperInclusive)
  )

module.exports = _assertBoundedBetween
