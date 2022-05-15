// noinspection JSValidateTypes

const {ArrayModel} = require('objectmodel')

/**
 * Passthrough for `ArrayModel()` function from [ObjectModel](http://objectmodel.js.org/)
 * _(Copyright © 2015 Sylvain Pollet-Villard, MIT license)_ with name assignment added.
 *
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 *  * Made up of elements that are of the specified type definition(s)
 *
 * @function
 * @category ModelFactory
 * @sig String -> ([Model] | Model) -> (* -> Array | THROW)
 * @param {String} name - the name of the generated Model
 * @param {(Model[] | Model)} def - The type/Model or array of types/Model that are valid for elements
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * const NonNegativeNumModel = require('@eluvio/elv-js-helpers/Model/NonNegativeNumModel')
 *
 * const defArrModel = require('@eluvio/elv-js-helpers/ModelFactory/defArrModel')
 *
 * const AgeArrayModel = defObjModel('AgeArray', NonNegativeNumModel)
 *
 * AgeArrayModel([42])        //=> [42]  (proxied by ObjectModel)
 *
 * AgeArrayModel([])          //=> []  (proxied by ObjectModel)
 *
 * AgeArrayModel(-1)          //=> EXCEPTION: 'expecting Array of NonNegativeNumber, got Number -1'
 *
 * AgeArrayModel([-1])        //=> EXCEPTION: 'Array[0] must be >= 0 (got: -1)'
 *
 * AgeArrayModel('foo')       //=> EXCEPTION: 'expecting Array of NonNegativeNumber, got String "foo"'
 *
 * AgeArrayModel(['foo'])     //=> EXCEPTION: 'expecting Array[0] to be Number, got String "foo"'
 *
 */
const defArrModel = (name, def)=> ArrayModel(def).as(name)

module.exports = defArrModel
