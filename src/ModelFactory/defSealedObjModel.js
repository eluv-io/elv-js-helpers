'use strict'
const defObjectModel = require('./defObjectModel')
const isObject = require('../Boolean/isObject')

const throwIfUndefined = require('../Validation/throwIfUndefined')

// TODO: add defaults clause

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 *  * Satisfies the specified field definitions
 *  * Contains no extra fields
 *
 * The object returned by the function will also throw an exception if you attempt to add a field to it that is not
 * in the original definition.
 *
 * NOTE: Copying the object using a function like Ramda's `assoc` function will not preserve this protection for the copy.
 *
 * @function
 * @category ModelFactory
 * @sig String -> Object -> (* -> Object | THROW)
 * @param {String} name - the name of the generated Model
 * @param {Object} def - The definition (field structure) of the Model to generate
 * @returns {Function} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * 'use strict'
 * const defSealedObjModel = require('@eluvio/elv-js-helpers/ModelFactory/defSealedObjModel')
 *
 * const PersonNameModel = defSealedObjModel('PersonName', {first: String, last: String})
 *
 * PersonNameModel(-1)                                        //=> EXCEPTION: 'expecting Object, got Number -1'
 *
 * PersonNameModel({first: 'Arthur', last: 'Dent'})           //=> {"first":"Arthur","last":"Dent"}
 *
 * PersonNameModel({first: 'Arthur'})                         //=> EXCEPTION: 'expecting last to be String, got undefined'
 *
 * PersonNameModel({first: 'A', last: 'D', species: 'human'}) //=> EXCEPTION: 'Unrecognized property name(s): species'
 *
 */
const defSealedObjModel = (name, def) => {
  throwIfUndefined('no model definition supplied', def)

  const model = defObjectModel(name, def)
  model.sealed = true
  model.extend = () => {
    throw new Error('Sealed models cannot be extended')
  }

  // const isPlainObject = obj => typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype
  const checkUndeclaredProps = (obj, def, undeclaredProps, path) => {
    if(!isObject(obj)) return
    Object.keys(obj).forEach(key => {
      let val = obj[key],
        subpath = path ? path + '.' + key : key
      if(isObject(obj) && isObject(def) && !Object.prototype.hasOwnProperty.call(def, key)) {
        undeclaredProps.push(subpath)
      } else if (isObject(val) && isObject(def)) {
        checkUndeclaredProps(val, def[key], undeclaredProps, subpath)
      }
    })
  }

  return model.assert(
    function hasNoUndeclaredProps(obj) {
      if (!model.sealed) return true
      let undeclaredProps = []
      checkUndeclaredProps(obj, this.definition, undeclaredProps)
      return undeclaredProps.length === 0 ? true : undeclaredProps
    },
    undeclaredProps =>
      `Unrecognized property name(s): ${undeclaredProps}`
  )
}

module.exports = defSealedObjModel
