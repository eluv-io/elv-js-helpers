const _assertWithPrecheck = require('./internal/_assertWithPrecheck')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input matches the specified regex OR **the input is not a valid instance of the specified model to be bounded**
 * * `false` if the input **is a valid instance of the specified model** AND fails to match the specified regex.
 *
 * This means that the assertion will PASS if the input is not a valid instance of the model to be bounded. The purpose
 * of this is to prevent redundant errors, e.g. 42 is not a String, 42 must match regex /^[a-z]+$/.
 *
 * The second element is a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message if the bounds validation fails.
 *
 * @function
 * @private
 * @since v0.0.1
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> RegExp -> [(* -> Boolean), ObjectModelErrMsgFn]
 * @param {Model} model - The model to add regex validation to
 * @param {RegExp} regex - The regex that must be matched.
 *
 * @returns {Array} 2-element array [Function, Function]. See description for details.
 *
 * @example
 *
 * const StringModel = require('@eluvio/elv-js-helpers/StringModel')
 *
 * // Note use of spread operator (...) to unpack the array returned by _assertBoundedUpper()
 * const UUIDStringModel = StringModel.extend()
 *   .assert(...assertMatchesRegex(StringModel, /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
 *   .as('UUIDString')
 *
 */
const assertMatchesRegex = (model, regex) =>
  _assertWithPrecheck(
    model,
    regex.test.bind(regex), // need to bind (this), see https://stackoverflow.com/a/20579046
    `is not in valid format or contains illegal characters (must match regular expression: ${regex})`
  )

module.exports = assertMatchesRegex
