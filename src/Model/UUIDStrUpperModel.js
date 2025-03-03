'use strict'
const defRegexMatchedStrModel = require('../ModelFactory/defRegexMatchedStrModel')
const RE_UUID_UPPER_CASE = require('../Validation/RE_UUID_UPPER_CASE')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is a
 * [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) in UUID
 * format e.g. '00000000-0000-0000-0000-000000000000' with only upper case letters for hex digits.
 *
 * (Note that this is non-standard, [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) specifies that both upper and lower
 * case letters are acceptable)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> String | THROW
 * @param {*} - The input to validate
 * @returns {String} The validated input
 * @example
 *
 * 'use strict'
 * const UUIDStrUpperModel = require('@eluvio/elv-js-helpers/Model/UUIDStrUpperModel')
 *
 * UUIDStrUpperModel('0')                                      //=> EXCEPTION: `Value is not in upper case UUID format '00000000-0000-0000-0000-000000000000' (got: "0")`
 *
 * UUIDStrUpperModel('ABCDEF00-0000-0000-0000-000000000000')   //=> 'ABCDEF00-0000-0000-0000-000000000000'
 *
 * UUIDStrUpperModel('abcdef00-0000-0000-0000-000000000000')   //=> EXCEPTION: `Value is not in upper case UUID format '00000000-0000-0000-0000-000000000000' (got: "abcdef00-0000-0000-0000-000000000000")`
 *
 * UUIDStrUpperModel('abcdef00-0000-0000-0000-ABCDEF000000')   //=> EXCEPTION: `Value is not in upper case UUID format '00000000-0000-0000-0000-000000000000' (got: "abcdef00-0000-0000-0000-ABCDEF000000")`
 *
 */
const UUIDStrUpperModel =
  defRegexMatchedStrModel(
    'UUIDUpperCaseString',
    RE_UUID_UPPER_CASE,
    'is not in upper case UUID format \'00000000-0000-0000-0000-000000000000\''
  )

module.exports = UUIDStrUpperModel
