// noinspection JSValidateTypes
'use strict'
const {ObjectModel} = require('objectmodel')

const assocComputed = require('../Functional/assocComputed')

const throwIfUndefined = require('../Validation/throwIfUndefined')

/**
 * Passthrough for `ObjectModel()` function from [ObjectModel](http://objectmodel.js.org/)
 * _(Copyright © 2015 Sylvain Pollet-Villard, MIT license)_ with name assignment added
 *
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 *  * Satisfies the specified field definitions
 *
 *  Extra (i.e. unrecognized) fields are allowed. Use `defSealedObjModel()` instead if you wish to disallow.
 *
 * @function
 * @category ModelFactory
 * @sig String -> Object -> (* -> Object | THROW)
 * @param {String} name - the name of the generated Model
 * @param {Object} def - The definition (field structure) of the Model to generate
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * 'use strict'
 * const defObjectModel = require('@eluvio/elv-js-helpers/ModelFactory/defObjectModel')
 *
 * const PersonNameModel = defObjectModel('PersonName', {first: String, last: String})
 *
 * PersonNameModel(-1)                                        //=> EXCEPTION: 'expecting Object, got Number -1'
 *
 * PersonNameModel({first: 'Arthur', last: 'Dent'})           //=> {"first":"Arthur","last":"Dent"}
 *
 * PersonNameModel({first: 'Arthur'})                         //=> EXCEPTION: 'expecting last to be String, got undefined'
 *
 * PersonNameModel({first: 'A', last: 'D', species: 'human'}) //=> {first: 'A', last: 'D', species: 'human'}
 *
 */
const defObjectModel = (name, def) => {
  throwIfUndefined('no model definition supplied', def)
  const newModel = ObjectModel(def).as(name)
  newModel.errorCollector = errors => {
    ObjectModel.prototype.errorCollector(
      errors.map(
        assocComputed(
          'message',
          e => e.message.replace(/^expecting {[^$}]+^}/gm, 'expecting Object')
        )
      )
    )
  }

  return newModel
}

module.exports = defObjectModel
