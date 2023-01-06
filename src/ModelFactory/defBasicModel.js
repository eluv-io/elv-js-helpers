// noinspection JSValidateTypes

const {BasicModel} = require('objectmodel')

/**
 * Passthrough for `BasicModel()` function from [ObjectModel](http://objectmodel.js.org/)
 * _(Copyright © 2015 Sylvain Pollet-Villard, MIT license)_ with name assignment added.
 *
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is of the specified type(s)
 *
 * @function
 * @category ModelFactory
 * @sig String -> ([Model] | Model) -> (* -> Array | THROW)
 * @param {String} name - the name of the generated Model
 * @param {(Model[] | Model)} def - The type/Model or array of types/Model that are valid for input
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * const defBasicModel = require('@eluvio/elv-js-helpers/ModelFactory/defBasicModel')
 *
 */
const defBasicModel = (name, def)=> BasicModel(def).as(name)

module.exports = defBasicModel
