const assertValidUTCStr = require('./assertValidUTCStr')
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
 * @category Model
 * @sig * -> String | THROW
 * @param {*} - The input to validate
 * @returns {String} The validated input, proxied by ObjectModel
 *
 * @example
 *
 * UTCStrModel('2022-01-01T14:00:00Z') //=> '2022-01-01T14:00:00Z' (proxied by ObjectModel)
 *
 * UTCStrModel('2022-13-01T14:00:00Z') //=> EXCEPTION: 'Value is not a valid UTC datetime string (got: 2022-13-01T14:00:00Z)'
 *
 * UTCStrModel('foo')                  //=> EXCEPTION: 'Value is not in UTC format 'yyyy-mm-ddThh:mm:ssZ' (got: foo)'
 *
 * UTCStrModel(42)                     //=> EXCEPTION: 'expecting String, got Number 42'
 *
 */
const UTCStrModel =
  defRegexMatchedStrModel(
    'UTCTimestampRegexMatchStr', // intermediate name for the model that only checks regex
    _REGEX_UTC_TIMESTAMP,
    'is not in UTC format \'yyyy-mm-ddThh:mm:ssZ\''
  )
    .extend()
    .assert(...assertValidUTCStr())
    .as('UTCStr') // final name for model that also checks that string is a valid datetime

module.exports = UTCStrModel
