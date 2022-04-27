const ifElse = require('crocks/logic/ifElse')
const T = require('ramda/src/T')

const assertionErrMsg = require('../assertionErrMsg')
const test = require('../test')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if `assertFn` returns `true` for the input OR **the input is not a valid instance of `model`**
 * * `false` if the input **is a valid instance of `model`** AND `assertFn` returns `false` for the input
 *
 * This means that `assertFn` will only be called if the input first passes validation for `model`, otherwise `true`
 * will always be returned (the input is ignored if it not a valid instance of `model`). The purpose of this is to
 * prevent redundant errors, e.g. 'foo' is not a Number, 'foo' must be < 1.
 *
 * The second element is either an error string or a function to generate an error message. If it is a function, it will
 * get called by ObjectModel when it validates a model and fails, passing in the assertion result (generally `false`),
 * the failing value, and any attribute name(s) that were traversed to access the value.
 *
 * @function
 * @private
 * @since v0.0.1
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> (a -> Boolean) -> String -> [(* -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Model} model - The model to be bounded
 * @param {Function} assertFn - The lower bound that must be satisfied. If `null`, no lower bound will be checked.
 * @param {String} msg - The upper bound that must be satisfied. If `null`, no upper bound will be checked.
 * @returns {Array} 2-element array [Function, Function | String]. See description for details.
 * @example
 *
 * foo
 *
 *
 */
const _assertWithPrecheck = (model, assertFn, msg) =>
  [
    ifElse(
      test(model),
      assertFn,
      T
    ),
    assertionErrMsg(msg)
  ]

module.exports = _assertWithPrecheck
