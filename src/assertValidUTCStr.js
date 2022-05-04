const {DateTime} = require('luxon')

const _assertWithPrecheck = require('./internal/_assertWithPrecheck')
const NonBlankStrModel = require('./NonBlankStrModel')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input can be parsed as UTC datetime string (yyyy:MM:ddThh:mm:ssZ) OR **the input is not a valid instance of NonBlankStrModel**
 * * `false` if the input **is a valid instance of NonBlankStrModel** AND fails to parse as a UTC datetime string.
 *
 * This means that the assertion will PASS if the input is not a valid NonBlankString. The purpose
 * of this is to prevent redundant errors, e.g. 42 is not a String, 42 is not a valid ISO 8601 datetime string.
 *
 * The second element is a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message if the bounds validation fails.
 *
 * @function
 * @private
 * @since v0.0.1
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => () -> [(* -> Boolean), ObjectModelErrMsgFn]
 *
 * @returns {Array} 2-element array [Function, Function]. See description for details.
 *
 * @example
 *
 * const StringModel = require('@eluvio/elv-js-helpers/StringModel')
 *
 * // Note use of spread operator (...) to unpack the array returned by _assertBoundedUpper()
 * const UTCDateTimeStringModel = StringModel.extend()
 *   .assert(...assertValidUTCStr())
 *   .as('UTCDateTimeString')
 *
 */
const assertValidUTCStr = () =>
  _assertWithPrecheck(
    NonBlankStrModel,
    str => (DateTime.fromISO(str).isValid === true),
    'is not a valid UTC datetime string'
  )

module.exports = assertValidUTCStr
