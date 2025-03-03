'use strict'
const defRegexMatchedStrModel = require('../ModelFactory/defRegexMatchedStrModel')
const RE_UUID_LOWER_CASE = require('../Validation/RE_UUID_LOWER_CASE')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is a
 * [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) in UUID
 * format e.g. '00000000-0000-0000-0000-000000000000' with only lower case letters for hex digits.
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
 * const UUIDStrLowerModel = require('@eluvio/elv-js-helpers/Model/UUIDStrLowerModel')
 *
 * UUIDStrLowerModel('0')                                      //=> EXCEPTION: `Value is not in lower case UUID format '00000000-0000-0000-0000-000000000000' (got: "0")`
 *
 * UUIDStrLowerModel('ABCDEF00-0000-0000-0000-000000000000')   //=> EXCEPTION: `Value is not in lower case UUID format '00000000-0000-0000-0000-000000000000' (got: "ABCDEF00-0000-0000-0000-000000000000")`
 *
 * UUIDStrLowerModel('abcdef00-0000-0000-0000-000000000000')   //=> 'abcdef00-0000-0000-0000-000000000000'
 *
 * UUIDStrLowerModel('abcdef00-0000-0000-0000-ABCDEF000000')   //=> EXCEPTION: `Value is not in lower case UUID format '00000000-0000-0000-0000-000000000000' (got: "abcdef00-0000-0000-0000-ABCDEF000000")`
 *
 */
const UUIDStrLowerModel =
  defRegexMatchedStrModel(
    'UUIDLowerCaseString',
    RE_UUID_LOWER_CASE,
    'is not in lower case UUID format \'00000000-0000-0000-0000-000000000000\''
  )

module.exports = UUIDStrLowerModel
