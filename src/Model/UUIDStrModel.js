const defRegexMatchedStrModel = require('../ModelFactory/defRegexMatchedStrModel')
const RE_UUID = require('../Validation/RE_UUID')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is a
 * [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) in UUID
 * format e.g. '00000000-0000-0000-0000-000000000000'
 *
 * Both upper and lower case letters are accepted for hex digits
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
 * const UUIDStrModel = require('@eluvio/elv-js-helpers/Model/UUIDStrModel')
 *
 * UUIDStrModel('0')                                      //=> EXCEPTION: `Value is not in UUID format '00000000-0000-0000-0000-000000000000' (got: "0")`
 *
 * UUIDStrModel('ABCDEF00-0000-0000-0000-000000000000')   //=> 'ABCDEF00-0000-0000-0000-000000000000'
 *
 * UUIDStrModel('abcdef00-0000-0000-0000-000000000000')   //=> 'abcdef00-0000-0000-0000-000000000000'
 *
 * UUIDStrModel('abcdef00-0000-0000-0000-ABCDEF000000')   //=> 'abcdef00-0000-0000-0000-ABCDEF000000'
 *
 */
const UUIDStrModel =
  defRegexMatchedStrModel(
    'UUIDString',
    RE_UUID,
    'is not in UUID format \'00000000-0000-0000-0000-000000000000\''
  )

module.exports = UUIDStrModel
