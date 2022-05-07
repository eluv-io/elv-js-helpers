const _objBadKey = require('./_objBadKey')

/**
 * Returns a function to be [called](https://github.com/sylvainpolletvillard/ObjectModel/blob/9e890fc5ed5ad98e477a2144f1a925d740687ee3/src/object-model.js#L164)
 * by [ObjectModel](http://objectmodel.js.org/) to construct an error message for a key that failed to validate against specified model
 *
 * @function
 * @private
 * @category ModelAssertion
 * @sig Model -> ((Boolean, String) -> String)
 * @param {Model} keyModel - The model to check keys against
 * @returns {Function} Constructs an error message for failed key
 *
 * @example
 *
 * const {BasicModel} = require('objectmodel')
 *
 * const NoBlankKeysObjModel = BasicModel(Object).extend()
 *   .assert(
 *     checkVsModel(NonBlankStrModel),
 *     _objBadKeyErrMsg(NonBlankStrModel)
 *   )
 *   .as('NoBlankKeysObj')
 *
 * NoBlankKeysObjModel({'  ': 3}) //=>  EXCEPTION: 'invalid property name '  ' (is not a valid NonBlankString)'
 *
 */
const _objBadKeyErrMsg = keyModel =>
  // eslint-disable-next-line no-unused-vars
  (result, value) => `invalid property name '${_objBadKey(keyModel, value)}' (is not a valid ${keyModel.name})`

module.exports = _objBadKeyErrMsg
