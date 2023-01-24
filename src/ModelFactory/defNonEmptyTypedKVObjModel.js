const defTypedKVObjModel = require('./defTypedKVObjModel')
const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')
const isObject = require('../Boolean/isObject')
const isNotEmpty = require('../Boolean/isNotEmpty')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 *  * Has keys that validate against a Model
 *  * Has values that validate against a Model
 *  * Has at least one key
 *
 * @function
 * @category ModelFactory
 * @sig String -> Model -> Model -> (* -> Object | THROW)
 * @param {String} name - the name of the generated Model
 * @param {Model} keyModel - The Model to validate keys against
 * @param {Model} valueModel - The Model to validate values against
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @see defTypedKVObjModel
 * @example
 *
 * const defNonEmptyTypedKVObjModel = require('@eluvio/elv-js-helpers/ModelFactory/defNonEmptyTypedKVObjModel')
 *
 * const defObjectModel = require('@eluvio/elv-js-helpers/ModelFactory/defObjectModel')
 * const NonBlankStrModel = require('@eluvio/elv-js-helpers/Model/NonBlankStrModel')
 *
 * const NonEmptyNonBlankKVModel = defNonEmptyTypedKVObjModel(
 *   'NonEmptyNonBlankKV',
 *   NonBlankStrModel,
 *   NonBlankStrModel
 * )
 *
 * NonEmptyNonBlankKVModel({})               //=> EXCEPTION: 'Value must have at least one entry (got: {})'
 *
 * NonEmptyNonBlankKVModel({foo: 'bar'})     //=> {foo: 'bar'}
 *
 * NonEmptyNonBlankKVModel({foo: ' '})       //=> EXCEPTION: 'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: " "))'
 *
 * NonEmptyNonBlankKVModel({' ': 'bar'})     //=> EXCEPTION: 'invalid property name " " (is not a valid NonBlankString)'
 *
 * NonEmptyNonBlankKVModel({foo: 42})        //=> EXCEPTION: 'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: expecting String, got Number 42)'
 *
 * NonEmptyNonBlankKVModel(42)               //=> EXCEPTION: 'expecting Object, got Number 42'
 *
 * // When used for a field in an object, the error message will include the name of the field:
 *
 * const MediaFileModel = defObjectModel(
 *   "MediaFile",
 *   {
 *     streams: defNonEmptyTypedKVObjModel(
 *       "streamsMap",
 *       NonBlankStrModel,
 *       defObjectModel(
 *         "stream",
 *         {
 *           type: ["audio", "subtitle", "video"]
 *         }
 *       )
 *     )
 *   }
 * )
 *
 * MediaFileModel({streams: {}})             //=> EXCEPTION: 'streams must have at least one entry (got: {})'
 *
 */
const defNonEmptyTypedKVObjModel = (name, keyModel, valueModel) => {
  return defTypedKVObjModel(name, keyModel, valueModel)
    .extend()
    .assert(
      ...assertAfterCheck(
        isObject,
        isNotEmpty,
        'must have at least one entry'
      )
    )
}

module.exports = defNonEmptyTypedKVObjModel
