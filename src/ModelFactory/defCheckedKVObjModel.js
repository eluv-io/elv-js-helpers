const defBasicModel = require('./defBasicModel')

const isObject = require('../Boolean/isObject')

const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')
const assertObjKeysValid = require('../ModelAssertion/assertObjKeysValid')
const assertObjValuesValid = require('../ModelAssertion/assertObjValuesValid')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 *  * Has keys that validate against a Model
 *  * Has values that validate against a Model
 *
 *  It offers similar Validation capabilities as [ObjectModel's MapModel](http://objectmodel.js.org/#doc-map-models)
 *  but the resulting Model accepts a Javascript object as input and returns a (proxied) Javascript object as output.
 *
 * @function
 * @category ModelFactory
 * @sig String -> Model -> Model -> (* -> Object | THROW)
 * @param {String} name - the name of the generated Model
 * @param {Model} keyModel - The Model to validate keys against
 * @param {Model} valueModel - The Model to validate values against
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * TODO
 * const defCheckedKVObjModel = require('@eluvio/elv-js-helpers/ModelFactory/defCheckedKVObjModel')
 *
 *
 */
// noinspection JSCheckFunctionSignatures
const defCheckedKVObjModel = (name, keyModel, valueModel) =>
  defBasicModel(name, Object)
    .extend()
    .assert(
      ...assertAfterCheck(
        isObject,
        ...assertObjKeysValid(keyModel)
      )
    )
    .assert(
      ...assertAfterCheck(
        isObject,
        ...assertObjValuesValid(valueModel)
      )
    )

module.exports = defCheckedKVObjModel
