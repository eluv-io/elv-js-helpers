const assertAfterCheck = require('./assertAfterCheck')

const passesModelCheck = require('../Boolean/passesModelCheck')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input matches the specified regex OR **the input is not a valid instance of the specified Model to be bounded**
 * * `false` if the input **is a valid instance of the specified Model** AND fails to match the specified regex.
 *
 * This means that the assertion will PASS if the input is not a valid instance of the Model to be bounded. The purpose
 * of this is to prevent redundant errors, e.g. 42 is not a String, 42 must match regex /^[a-z]+$/.
 *
 * The second element is a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message if the bounds validation fails.
 *
 * @function
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> RegExp -> [(* -> Boolean), ObjectModelErrMsgFn]
 * @param {Model} model - The Model to add regex validation to
 * @param {RegExp} regex - The regex that must be matched.
 * @param {String} [errMsg] - Optional custom error message
 * @returns {Array} 2-element array [Function, Function]. See description for details.
 * @example
 *
 * const StringModel = require('@eluvio/elv-js-helpers/Model/StringModel')
 *
 * const assertMatchesRegex = require('@eluvio/elv-js-helpers/ModelAssertion/assertMatchesRegex')
 *
 * // Note use of spread operator (...) to unpack the array returned by _assertBoundedUpper()
 * const UUIDStringModel = StringModel.extend()
 *   .assert(
 *     ...assertMatchesRegex(
 *       StringModel,
 *       /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
 *       'is not in UUID format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
 *     )
 *   ).as('UUIDString')
 *
 * UUIDStringModel('12345678-1234-1234-1234-123456789abc')  //=> '12345678-1234-1234-1234-123456789abc' (proxied by ObjectModel)
 *
 * UUIDStringModel('foo')                                   //=> EXCEPTION: 'Value is not in UUID format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (got: "foo")'
 *
 * UUIDStringModel(42)                                      //=> EXCEPTION: 'expecting String, got Number 42'
 *
 */
const assertMatchesRegex = (model, regex, errMsg) =>
  assertAfterCheck(
    passesModelCheck(model),
    regex.test.bind(regex), // need to bind (this), see https://stackoverflow.com/a/20579046
    errMsg || `is not in valid format or contains illegal characters (must match regular expression: ${regex})`
  )

module.exports = assertMatchesRegex
