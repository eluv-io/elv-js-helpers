const util = require('util')

// assertionErrMsg :: String -> (String -> a -> String -> String)
// Returns a function that can be used in .assert() to construct a validation error message containing the bad value
// and (if available) field name
//
// In ObjectModel, the 3 params are called (result, obj, path)

/**
 * Returns a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message when a particular assertion fails during
 * validation.
 *
 * Pass in a string describing the condition that was not met, e.g. 'must equal 42', and you will
 * get back a function can be used to generate a full error message at runtime.
 *
 * If the assertion that was passed in as the first argument to `ObjectModel.assert()` fails, the error message
 * generating function will be called with the assertion result (generally `false`), the failing value, and any
 * attribute name(s) that were traversed to access the value.
 *
 * This allows the error message to include the attribute name (if available) and the bad value in the error message,
 * e.g. 'Value must equal 42 (got: 43)'
 *
 * @function
 * @category ModelAssertion
 * @sig String -> ((Boolean, *, String) -> String)
 * @param {String} msg - Error message describing the assertion condition that was not met
 * @returns {Function}
 *
 * @example
 *
 * const AnswerToEverythingModel = NumberModel.extend()
 *   .assert(
 *     x => x === 42,
 *     assertionErrMsg('must equal 42')
 *   )
 *   .as('AnswerToEverything')
 *
 * const myAnswer = AnswerToEverythingModel(43)  //=> EXCEPTION: 'Value must equal 42 (got: 43)'
 *
 */
const assertionErrMsg = msg =>
  (result, value, name) => [
    name === null ? 'Value' : name,
    msg,
    `(got: ${util.format(value)})`
  ].join(' ')

module.exports = assertionErrMsg
