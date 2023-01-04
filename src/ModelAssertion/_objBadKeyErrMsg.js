const _objBadKey = require('../Validation/objBadKey')

/**
 * Returns a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message for a key that failed to validate against specified Model
 *
 * @function
 * @private
 * @category ModelAssertion
 * @sig Model -> ((Boolean, String) -> String)
 * @param {Model} keyModel - The Model to check keys against
 * @returns {Function} Constructs an error message for failed key
 * @example
 *
 * const _objBadKeyErrMsg = require('@eluvio/elv-js-helpers/ModelAssertion/_objBadKeyErrMsg')
 *
 * const defBasicModel = require('@eluvio/elv-js-helpers/ModelFactory/defBasicModel')
 * const NonBlankStrModel = require('@eluvio/elv-js-helpers/Model/NonBlankStrModel')
 * const passesModelCheck = require('@eluvio/elv-js-helpers/Boolean/passesModelCheck')
 *
 * const NoBlankKeysObjModel = defBasicModel('NoBlankKeysObj', Object).extend()
 *   .assert(
 *     passesModelCheck(NonBlankStrModel),
 *     _objBadKeyErrMsg(NonBlankStrModel)
 *   )
 *
 * NoBlankKeysObjModel({'  ': 3})                      //=> EXCEPTION: 'invalid property name "  " (is not a valid NonBlankString)'
 *
 */
const _objBadKeyErrMsg = keyModel =>
  // eslint-disable-next-line no-unused-vars
  (result, value) => `invalid property name "${_objBadKey(keyModel, value)}" (is not a valid ${keyModel.name})`

module.exports = _objBadKeyErrMsg
