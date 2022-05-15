// noinspection JSValidateTypes

const {ObjectModel} = require('objectmodel')

/**
 * Passthrough for `ObjectModel()` function from [ObjectModel](http://objectmodel.js.org/)
 * _(Copyright © 2015 Sylvain Pollet-Villard, MIT license)_ with name assignment added
 *
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 *  * Satisfies the specified field definitions
 *
 *  Extra fields are allowed.
 *
 * @function
 * @category ModelFactory
 * @sig String -> Object -> (* -> Object | THROW)
 * @param {String} name - the name of the generated Model
 * @param {Object} def - The definition (field structure) of the Model to generate
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * const defObjModel = require('@eluvio/elv-js-helpers/ModelFactory/defObjModel')
 *
 * const PersonNameModel = defObjModel('PersonName', {first: String, last: String})
 *
 * PersonNameModel(-1)                                        //=> EXCEPTION: 'expecting Object, got Number -1'
 *
 * PersonNameModel({first: 'Arthur', last: 'Dent'})           //=> {"first":"Arthur","last":"Dent"} // proxied by ObjectModel
 *
 * PersonNameModel({first: 'Arthur'})                         //=> EXCEPTION: 'expecting last to be String, got undefined'
 *
 * PersonNameModel({first: 'A', last: 'D', species: 'human'}) //=> {first: 'A', last: 'D', species: 'human'} // proxied by ObjectModel
 *
 */
const defObjModel = (name, def)=> ObjectModel(def).as(name)

module.exports = defObjModel
