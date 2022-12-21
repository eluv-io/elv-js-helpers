const isNil = require('@eluvio/ramda-fork/src/isNil')
const T = require('@eluvio/ramda-fork/src/T')

const _objBadValErrMsg = require('./_objBadValErrMsg')
const _satisfiesObjValCheck = require('./_satisfiesObjValCheck')

// assertObjectValuesValid :: ObjectModel -> [(a -> Boolean), String | (Object -> Object -> String)]
// Returns a pair [assertion function, failure message string or function] for use (via JavaScript spread syntax)
// in objectmodel .assert() call, e.g. .assert(...assertObjectValuesValid(PositiveIntegerModel))
// The resulting assertion will check that input is an object, then
// check that all the object's values return truthy values when passed to checkFn
/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if input is an object and all the object's values are valid instances of the specified model OR **the input is not a Javascript object**
 * * `false` if the **the input IS a Javascript object** AND has a value that violates specified model
 *
 * This means that the assertion will PASS if the input is not a Javascript object. The purpose
 * of this is to prevent redundant errors, e.g. input is not an Object, property name 'foo' points to a value that is invalid
 *
 * The second element is a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message if the bounds validation fails.
 *
 * @function
 * @private
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> * -> Boolean -> [(* -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Model} valueModel - The model to check values against
 *
 * @returns {Array} 2-element array [Function, Function]. See description for details.
 *
 * @example
 *
 * const {BasicModel} = require('objectmodel')
 * const NonBlankStrModel = require('../NonBlankStrModel')
 *
 * // Note use of spread operator (...) to unpack the array returned by _assertObjValuesValid()
 * const NoBlankStringValsObjModel = BasicModel(Object).extend()
 *   .assert(..._assertObjValuesValid(NonBlankStrModel))
 *   .as('NoBlankStringValsObj')
 *
 * NoBlankStringValsObjModel({foo: '  '}) //=>  EXCEPTION: 'key 'foo' points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got:   ))'
 *
 */
const _assertObjValuesValid = valueModel =>
  isNil(valueModel) ?
    [T, ''] : // no valueModel passed in, all values valid
    [
      _satisfiesObjValCheck(valueModel),
      _objBadValErrMsg(valueModel)
    ]

module.exports = _assertObjValuesValid
