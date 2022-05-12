// noinspection JSValidateTypes

const {BasicModel} = require('objectmodel')

/**
 * Passthrough for `BasicModel()` function from [ObjectModel](http://objectmodel.js.org/) (Copyright © 2015 Sylvain Pollet-Villard, MIT license)
 * with name assignment added.
 *
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is of the specified type(s)
 *
 * @function
 * @category ModelFactory
 * @sig String -> ([Model] | Model) -> (* -> Array | THROW)
 * @param {String} name - the name of the generated model
 * @param {(Model[] | Model)} def - The type/model or array of types/models that are valid for input
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * const defBasicModel = require('@eluvio/elv-js-helpers/defBasicModel')
 *
 */
const defBasicModel = (name, def)=> BasicModel(def).as(name)

module.exports = defBasicModel
