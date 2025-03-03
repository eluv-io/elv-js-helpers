'use strict'
const StringModel = require('../Model/StringModel')

const assertMatchesRegex = require('../ModelAssertion/assertMatchesRegex')

const throwIfUndefined = require('../Validation/throwIfUndefined')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 *  * Matches the specified regex
 *
 * @function
 * @category ModelFactory
 * @sig (String, RexExp, String | undefined) -> (* -> String | THROW)
 * @param {String} name - the name of the generated Model
 * @param {RegExp} regex - The regex that must be matched
 * @param {String} [errMsg] - Optional custom error message string (if omitted, regex will be included as part of standard error message)
 * @returns {Function} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * 'use strict'
 * const defRegexMatchedStrModel = require('@eluvio/elv-js-helpers/ModelFactory/defRegexMatchedStrModel')
 *
 * const UUIDStringModel = defRegexMatchedStrModel('UUIDString', /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
 *
 * UUIDStringModel('12345678-90ab-cdef-0123-4567890abcde')  //=> '12345678-90ab-cdef-0123-4567890abcde'
 *
 * UUIDStringModel('foo')                                   //=> EXCEPTION: 'Value is not in valid format or contains illegal characters (must match regular expression: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/) (got: "foo")'
 *
 * UUIDStringModel(42)                                      //=> EXCEPTION: 'expecting String, got Number 42'
 *
 * // supply a nicer error message
 * const UUIDStringModel2 = defRegexMatchedStrModel(
 *    'UUIDString',
 *    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
 *    'is not in UUID format "xxxxxxxx-xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"'
 *  )
 *
 * UUIDStringModel2('foo')  //=> EXCEPTION: 'Value is not in UUID format "xxxxxxxx-xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" (got: "foo")'
 */
const defRegexMatchedStrModel = (name, regex, errMsg) => {
  throwIfUndefined('no regex supplied', regex)
  return StringModel
    .extend()
    .assert(
      ...assertMatchesRegex(
        StringModel,
        regex,
        errMsg
      )
    )
    .as(name)
}


module.exports = defRegexMatchedStrModel
