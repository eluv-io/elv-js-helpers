const compose = require('@eluvio/ramda-fork/src/compose')
const isEmpty = require('@eluvio/ramda-fork/src/isEmpty')
const not = require('@eluvio/ramda-fork/src/not')

const assertionErrMsg = require('./assertionErrMsg')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input is NOT empty
 * * `false` if the input is empty
 *
 * The second element is a fixed error string to return when the input is empty.
 *
 * @function
 * @category ModelAssertion
 * @sig () -> [(* -> Boolean), String]
 * @returns {Array} 2-element array [Function, String]. See description for details.
 * @example
 *
 *  const isString = require('@eluvio/elv-js-helpers/Boolean/isString')
 *
 * const StringModel = require('@eluvio/elv-js-helpers/Model/StringModel')
 *
 * const assertAfterCheck = require('@eluvio/elv-js-helpers/ModelAssertion/assertAfterCheck')
 * const assertNotEmpty = require('@eluvio/elv-js-helpers/ModelAssertion/assertNotEmpty')
 *
 * // Note use of spread operator (...) to unpack the arrays returned by assertAfterCheck() and assertNotEmpty()
 * const NonEmptyStringModel = StringModel.extend()
 *   .assert(
 *     ...assertAfterCheck(
 *       isString,
 *       ...assertNotEmpty
 *     )
 *   .as('NonEmptyString')
 *
 * NonEmptyStringModel('')   //=> EXCEPTION: 'Value must not be empty (got: "")'
 *
 * NonEmptyStringModel([])   //=> EXCEPTION: 'expecting String, got Array []'
 *
 */
const assertNotEmpty = [
  compose(not, isEmpty),
  assertionErrMsg('must not be empty')
]

module.exports = assertNotEmpty
