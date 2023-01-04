const _boundDescUpper = require('./_boundUpperErrMsg')
const assertAfterCheck = require('./assertAfterCheck')

const satisfiesUpperBound = require('../Boolean/satisfiesUpperBound')
const passesModelCheck = require('../Boolean/passesModelCheck')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input satisfies the specified bound OR **the input is not a valid instance of the specified Model to be bounded**
 * * `false` if the input **is a valid instance of the specified Model** AND violates the specified bound.
 *
 * This means that the assertion will PASS if the input is not a valid instance of the Model to be bounded. The purpose
 * of this is to prevent redundant errors, e.g. 'foo' is not a Number, 'foo' must be < 42.
 *
 * The second element is a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message if the bounds validation fails.
 *
 * @function
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> a -> Boolean -> [(* -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Model} model - The Model to be bounded
 * @param {*} upperBound - The upper bound that must be satisfied.
 * @param {Boolean} inclusive - If `true` (and `upperBound` is not `null`) then input is allowed to equal `upperBound`.
 * @param {Function} comparatorFn - Function used to compare input against `upperBound`.
 * Must accept two values and return -1 if first value is less than the second,
 * 1 if the second value is less than the first, and zero otherwise.
 * This enables adding bounds to a Model type that cannot be compared using Javascript's
 * [less than (<)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) operator.
 * @returns {Array} 2-element array [Function, Function]. See description for details.
 * @example
 *
 * const compare = require('@eluvio/elv-js-helpers/Functional/compare')
 *
 * const IntegerModel = require('@eluvio/elv-js-helpers/Model/IntegerModel')
 *
 * const assertBoundedUpper = require('@eluvio/elv-js-helpers/ModelAssertion/assertBoundedUpper')
 *
 * // Note use of spread operator (...) to unpack the array returned by assertBoundedUpper()
 * const NegativeIntegerModel = IntegerModel
 *   .extend()
 *   .assert(
 *     ...assertBoundedUpper(
 *       IntegerModel,
 *       0,
 *       false,
 *       compare
 *     )
 *   )
 *   .as('NegativeInteger')
 *
 *  NegativeIntegerModel(-1)      //=> -1
 *  NegativeIntegerModel(0)       //=> EXCEPTION: 'Value must be < 0 (got: 0)'
 *  NegativeIntegerModel('foo')   //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const assertBoundedUpper = (model, upperBound, inclusive, comparatorFn) =>
  assertAfterCheck(
    passesModelCheck(model),
    satisfiesUpperBound(upperBound, inclusive, comparatorFn),
    _boundDescUpper(upperBound, inclusive)
  )

module.exports = assertBoundedUpper
