const assertValidUTCStr = require('../ModelAssertion/assertValidUTCStr')

const defRegexMatchedStrModel = require('../ModelFactory/defRegexMatchedStrModel')

const REGEX_UTC_TIMESTAMP = require('../Datetime/REGEX_UTC_TIMESTAMP')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is:
 *
 * * A [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * * In UTC timestamp format e.g. '2022-01-01T14:00:00Z'
 * * A valid Datetime
 *
 * If input passes Validation, will return the input (proxied by ObjectModel)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> String | THROW
 * @param {*} - The input to validate
 * @returns {String} The validated input, proxied by ObjectModel
 * @example
 *
 * const UTCStrModel = require('@eluvio/elv-js-helpers/Model/UTCStrModel')
 *
 * UTCStrModel('2022-01-01T14:00:00Z') //=> '2022-01-01T14:00:00Z' (proxied by ObjectModel)
 *
 * UTCStrModel('2022-13-01T14:00:00Z') //=> EXCEPTION: 'Value is not a valid UTC Datetime string (got: 2022-13-01T14:00:00Z)'
 *
 * UTCStrModel('foo')                  //=> EXCEPTION: 'Value is not in UTC format 'yyyy-mm-ddThh:mm:ssZ' (got: foo)'
 *
 * UTCStrModel(42)                     //=> EXCEPTION: 'expecting String, got Number 42'
 *
 */
const UTCStrModel =
  defRegexMatchedStrModel(
    'UTCTimestampRegexMatchStr', // intermediate name for the Model that only checks regex
    REGEX_UTC_TIMESTAMP,
    'is not in UTC format \'yyyy-mm-ddThh:mm:ssZ\''
  )
    .extend()
    .assert(...assertValidUTCStr())
    .as('UTCStr') // final name for Model that also checks that string is a valid Datetime

module.exports = UTCStrModel
