const defObjModel = require('./defObjModel')


// defSealedObjModel :: String, Object(object -> SealedObjectModel o | *exception*)
// Returns a function that can be used as a model that refuses unrecognized properties
// (i.e. only fields defined within ObjectModelDefinition)
// Note that ramda's assoc function (among others) will return a plain object rather than an objectmodel instance,
// and so will not preserve this protection on the object it returns.
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
 * @since v0.0.1
 * @category ModelFactory
 * @sig String -> Object -> (* -> Object | THROW)
 * @param {String} name - the name of the generated model
 * @param {Object} def - The definition (field structure) of the model to generate
 * @returns {Function} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * const PersonNameModel = defSealedObjModel('PersonName', {first: String, last: String})
 *
 * PersonNameModel(-1)                                        //=> EXCEPTION: 'expecting Object, got Number -1'
 *
 * PersonNameModel({first: 'Arthur', last: 'Dent'})           //=> {"first":"Arthur","last":"Dent"} // proxied by ObjectModel
 *
 * PersonNameModel({first: 'Arthur'})                         //=> EXCEPTION: 'expecting last to be String, got undefined'
 *
 * PersonNameModel({first: 'A', last: 'D', species: 'human'}) //=> EXCEPTION: 'Unrecognized property name(s): species'
 *
 */
const defSealedObjModel = (name, def) => {
  let model = defObjModel(name, def)
  model.sealed = true
  model.extend = () => {
    throw new Error('Sealed models cannot be extended')
  }

  const checkUndeclaredProps = (obj, def, undeclaredProps, path) => {
    Object.keys(obj).forEach(key => {
      let val = obj[key],
        subpath = path ? path + '.' + key : key
      if (!Object.prototype.hasOwnProperty.call(def, key)) {
        undeclaredProps.push(subpath)
      } else if (
        val &&
        typeof val === 'object' &&
        Object.getPrototypeOf(val) === Object.prototype
      ) {
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
    undeclaredProps => `Unrecognized property name(s): ${undeclaredProps}`
  )
}

module.exports = defSealedObjModel
