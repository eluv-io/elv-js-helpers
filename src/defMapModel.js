// noinspection JSValidateTypes

const {MapModel} = require('objectmodel')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 *  * Has keys that satisfy a given definition
 *  * Has values that satisfy a given definition
 *
 * @function
 * @since v0.0.1
 * @category ModelFactory
 * @sig String -> Model -> Model -> (* -> Object | THROW)
 * @param {String} name - the name of the generated model
 * @param {Object} keyModel - The definition (field structure) of the model to generate
 * @param {Object} valueModel - The definition (field structure) of the model to generate
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * TODO
 *
 */
const defMapModel = (name, keyModel,valueModel )=> MapModel(keyModel, valueModel).as(name)

module.exports = defMapModel
