const compose = require('ramda/src/compose')
const isEmpty = require('ramda/src/isEmpty')
const not = require('ramda/src/not')

const assertionErrMsg = require('../assertionErrMsg')

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
 * @private
 * @category ModelAssertion
 * @sig () -> [(* -> Boolean), String]
 * @returns {Array} 2-element array [Function, String]. See description for details.
 * @example
 *
 * const _assertNotEmpty = require('@eluvio/elv-js-helpers/internal/_assertNotEmpty')
 * const _assertWithPrecheck = require('@eluvio/elv-js-helpers/internal/_assertWithPrecheck')
 * const isString = require('@eluvio/elv-js-helpers/isString')
 * const StringModel = require('@eluvio/elv-js-helpers/StringModel')
 *
 * // Note use of spread operator (...) to unpack the arrays returned by _assertWithPrecheck() and _assertNotEmpty()
 * const NonEmptyStringModel = StringModel.extend()
 *   .assert(
 *     ..._assertWithPrecheck(
 *       isString,
 *       ..._assertNotEmpty
 *     )
 *   .as('NonEmptyString')
 *
 * NonEmptyStringModel('')   //=> EXCEPTION: 'Value must not be empty (got: "")'
 *
 * NonEmptyStringModel([])   //=> EXCEPTION: 'expecting String, got Array []'
 *
 */
const _assertNotEmpty = [
  compose(not, isEmpty),
  assertionErrMsg('must not be empty')
]

module.exports = _assertNotEmpty
