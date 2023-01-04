const assertionErrMsg = require('./assertionErrMsg')

const isEmpty = require('../Boolean/isEmpty')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input is empty
 * * `false` if the input is NOT empty
 *
 * The second element is a fixed error string to return when the input is NOT empty.
 *
 * @function
 * @category ModelAssertion
 * @sig () -> [(* -> Boolean), String]
 * @returns {Array} 2-element array [Function, String]. See description for details.
 * @example
 *
 * const isString = require('@eluvio/elv-js-helpers/Boolean/isString')
 *
 * const StringModel = require('@eluvio/elv-js-helpers/Model/StringModel')
 *
 * const assertAfterCheck = require('@eluvio/elv-js-helpers/ModelAssertion/assertAfterCheck')
 * const assertEmpty = require('@eluvio/elv-js-helpers/ModelAssertion/assertEmpty')
 *
 * // Note use of spread operator (...) to unpack the arrays returned by assertAfterCheck() and assertEmpty()
 * const EmptyStringModel = StringModel.extend()
 *   .assert(
 *     ...assertAfterCheck(
 *       isString,
 *       ...assertEmpty
 *     )
 *   )
 *   .as('EmptyString')
 *
 * EmptyStringModel('foo')  //=> EXCEPTION: 'Value must be empty (got: "foo")'
 *
 * EmptyStringModel('')     //=> ''
 *
 * EmptyStringModel([])     //=> EXCEPTION: 'expecting String, got Array []'
 *
 */
const assertEmpty = [
  isEmpty,
  assertionErrMsg('must be empty')
]

module.exports = assertEmpty
