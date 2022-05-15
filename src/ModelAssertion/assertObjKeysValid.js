const isNil = require('ramda/src/isNil')
const T = require('ramda/src/T')

const _objBadKeyErrMsg = require('./_objBadKeyErrMsg')
const _satisfiesObjKeyCheck = require('../Boolean/passesObjKeyCheck')

/**
 * Returns a 2-element array for use in an [ObjectModel assertion](http://objectmodel.js.org/#doc-assertions)
 *
 * The first element is a function that will take an input and return:
 *
 * * `true` if the input is an object and all the object's keys are valid instances of the specified Model OR **the input is not a Javascript object**
 * * `false` if **the input IS a Javascript object** AND has a key (property name) that violates specified Model
 *
 * This means that the assertion will PASS if the input is not a Javascript object. The purpose
 * of this is to prevent redundant errors, e.g. input is not an Object, property name 'foo' is invalid
 *
 * The second element is a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message if the bounds Validation fails.
 *
 * @function
 * @category ModelAssertion
 * @sig ((Boolean, *, String) -> String) ObjectModelErrMsgFn => Model -> * -> Boolean -> [(* -> Boolean), ObjectModelErrMsgFn | String]
 * @param {Model} keyModel - The Model to check keys against
 * @returns {Array} 2-element array [Function, Function]. See description for details.
 * @example
 *
 * const NonBlankStrModel = require('@eluvio/elv-js-helpers/Model/NonBlankStrModel')
 *
 * const assertObjKeysValid = require('@eluvio/elv-js-helpers/ModelAssertion/assertObjKeysValid')
 *
 * const defBasicModel = require('@eluvio/elv-js-helpers/ModelFactory/defBasicModel')
 *
 * // Note use of spread operator (...) to unpack the array returned by assertObjKeysValid()
 * const NoBlankKeysObjModel = defBasicModel(Object).extend()
 *   .assert(...assertObjKeysValid(NonBlankStrModel))
 *   .as('NoBlankKeysObj')
 *
 * NoBlankKeysObjModel({'  ': 3}) //=>  EXCEPTION: 'invalid property name '  ' (is not a valid NonBlankString)'
 *
 */
const assertObjKeysValid = keyModel =>
  isNil(keyModel) ?
    [T, ''] : // no keyModel passed in, all keys valid
    [
      _satisfiesObjKeyCheck(keyModel),
      _objBadKeyErrMsg(keyModel)
    ]

module.exports = assertObjKeysValid
