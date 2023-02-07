const {ArrayModel, BasicModel, ObjectModel} = require('objectmodel')

/**
 * Returns `true` if passed in a validation Model, `false` otherwise.
 *
 * Note that a ModelFactory is not a Model, but the output of a ModelFactory is.
 *
 * @function
 * @category Boolean
 * @sig * -> Boolean
 * @param {*} x - the item to check
 * @returns {Boolean}
 * @example
 *
 * const isModel = require('@eluvio/elv-js-helpers/Boolean/isModel')
 *
 * const defObjectModel = require('@eluvio/elv-js-helpers/ModelFactory/defObjectModel')
 * const NonBlankStrModel = require('@eluvio/elv-js-helpers/Model/NonBlankStrModel')
 *
 * isModel(42)                           //=> false
 *
 * isModel(NonBlankStrModel)             //=> true
 *
 * isModel(defObjectModel)               //=> false
 *
 * const PersonModel = defObjectModel('PersonName', {first: String, last: String})
 *
 * isModel(PersonModel)                  //=> true
 *
 * const validatedPerson = PersonModel({
 *   first: 'Arthur',
 *   last: 'Dent'
 * })
 *
 * isModel(validatedPerson)              //=> false
 *
 */
const isModel = x =>  (x instanceof ObjectModel) || (x instanceof BasicModel) || (x instanceof ArrayModel)

module.exports = isModel
