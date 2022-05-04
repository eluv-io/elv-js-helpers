const {BasicModel} = require('objectmodel')

const _assertObjKeysValid = require('./internal/_assertObjKeysValid')
const _assertObjValuesValid = require('./internal/_assertObjValuesValid')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 *  * Has keys that validate against a model
 *  * Has values that validate against a model
 *
 *  It offers similar validation capabilities as [ObjectModel's MapModel](http://objectmodel.js.org/#doc-map-models)
 *  but the resulting model accepts a Javascript object as input and returns a (proxied) Javascript object as output.
 *
 * @function
 * @since v0.0.1
 * @category ModelFactory
 * @sig String -> Model -> Model -> (* -> Object | THROW)
 * @param {String} name - the name of the generated model
 * @param {Model} keyModel - The model to validate keys against
 * @param {Model} valueModel - The model to validate values against
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * TODO
 *
 */
// noinspection JSCheckFunctionSignatures
const defCheckedKVObjModel = (name, keyModel, valueModel) =>
  BasicModel(Object)
    .extend()
    .assert(..._assertObjKeysValid(keyModel))
    .assert(..._assertObjValuesValid(valueModel))
    .as(name)

module.exports = defCheckedKVObjModel
