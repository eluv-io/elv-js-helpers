'use strict'
const assertionErrMsg = require('./assertionErrMsg')

const conditionalCheck = require('../Boolean/conditionalCheck')
const isFunction = require('../Boolean/isFunction')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if `assertFn` returns `true` for the input OR **`preCheckFn` returns false**
 * * `false` if `assertFn` returns `false` for the input AND **`preCheckFn` returns true**
 *
 * This means that `assertFn` will only be called if the input first passes `preCheckFn`, otherwise `true`
 * will always be returned (the input is ignored if it fails `preCheckFn`). The purpose of this is to
 * allow prevention redundant errors, e.g. both 'expecting Number, got String "foo"' and 'Value must be an integer (got: "foo")'
 * (by passing in a `preCheckFn` that returns `true` if input is a number - if input is not a number, then integer check is skipped)
 *
 * The second element returned is a function to generate an error message. This function gets called by ObjectModel when
 * it validates a Model and fails, passing in the assertion result (generally `false`), the failing value, and any
 * attribute name(s) that were traversed to access the value.
 *
 * @function
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> (a -> Boolean) -> String -> [(* -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Function} preCheckFn - The preliminary check that must pass in order for `assertFn` to be checked.
 * @param {Function} assertFn - The assertion to check.
 * @param {(String|Function)} msgStrOrFn - An error message string or message generating function to use if assertFn returns `false`.
 * @returns {Array} 2-element array [Function, Function]. See description for details.
 * @example
 *
 * 'use strict'
 * const passesModelCheck = require('@eluvio/elv-js-helpers/Boolean/passesModelCheck')
 *
 * const NumberModel = require('@eluvio/elv-js-helpers/Model/NumberModel')
 *
 * const assertAfterCheck = require('@eluvio/elv-js-helpers/ModelAssertion/assertAfterCheck')
 *
 * const IntegerModel = NumberModel
 *   .extend()
 *   .assert(
 *     ...assertAfterCheck(
 *       passesModelCheck(NumberModel),
 *       n => Number.isInteger(n),
 *       'must be an integer'
 *     )
 *   )
 *   .as('Integer')
 *
 * IntegerModel(42)        //=> 42
 *
 * IntegerModel(4.2)       //=> EXCEPTION: 'Value must be an integer (got: 4.2)'
 *
 * IntegerModel('foo')     //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 * // Compare vs. case where assertAfterCheck is not used:
 *
 * const assertionErrMsg = require('@eluvio/elv-js-helpers/ModelAssertion/assertionErrMsg')
 *
 * const IntegerModelNoPrecheck = NumberModel
 *   .extend()
 *   .assert(
 *     n => Number.isInteger(n),
 *     assertionErrMsg('must be an integer')
 *   )
 *   .as('Integer')
 *
 * IntegerModelNoPrecheck('foo')  //=> EXCEPTION: 'expecting Number, got String "foo"\nValue must be an integer (got: "foo")'
 *
 */
const assertAfterCheck = (preCheckFn, assertFn, msgStrOrFn) =>
  [
    conditionalCheck(preCheckFn, assertFn),
    isFunction(msgStrOrFn) ? msgStrOrFn : assertionErrMsg(msgStrOrFn)
  ]

module.exports = assertAfterCheck
