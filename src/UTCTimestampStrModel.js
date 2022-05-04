const assertValidUTCString = require('./assertValidUTCString')
const defRegexMatchedStrModel = require('./defRegexMatchedStrModel')

const _REGEX_UTC_TIMESTAMP = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z$/

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is:
 *
 * * A [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * * In UTC timestamp format e.g. '2022-01-01T14:00:00Z'
 * * A valid datetime
 *
 * If input passes validation, will return the input (proxied by ObjectModel)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @since v0.0.1
 * @category Model
 * @sig * -> String | THROW
 * @param {Any} - The input to validate
 * @returns {String} The validated input, proxied by ObjectModel
 *
 * @example
 *
 * UTCTimestampStrModel('2022-01-01T14:00:00Z') //=> '2022-01-01T14:00:00Z' (proxied by ObjectModel)
 *
 * UTCTimestampStrModel('2022-13-01T14:00:00Z') //=> EXCEPTION: 'Value is not a valid ISO 8601 datetime string (got: 2022-13-01T14:00:00Z)'
 *
 * UTCTimestampStrModel(42) //=> EXCEPTION: 'expecting String, got Number 42'
 *
 */
const UTCTimestampStrModel =
  defRegexMatchedStrModel(
    'UTCTimestampRegexMatchString', // intermediate name for the model that only checks regex
    _REGEX_UTC_TIMESTAMP
  )
    .extend()
    .assert(...assertValidUTCString())
    .as('UTCTimestampString') // final name for model that also checks that string is a valid datetime

module.exports = UTCTimestampStrModel
