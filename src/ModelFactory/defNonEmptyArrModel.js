// noinspection JSValidateTypes

const defArrayModel = require('./defArrayModel')

const isArray = require('../Boolean/isArray')

const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')
const assertNotEmpty = require('../ModelAssertion/assertNotEmpty')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 *  * Made up of elements that are of the specified type definition(s)
 *
 *  To define an array that can hold any type of value, pass in [AnyModel](#AnyModel) for `def`.
 *
 * @function
 * @category ModelFactory
 * @sig String -> ([Model] | Model) -> (* -> Array | THROW)
 * @param {String} name - the name of the generated Model
 * @param {(Model[] | Model)} def - The type/Model or array of types/Model that elements
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * const defNonEmptyArrModel = require('@eluvio/elv-js-helpers/ModelFactory/defNonEmptyArrModel')
 *
 * const NonNegativeNumModel = require('@eluvio/elv-js-helpers/Model/NonNegativeNumModel')
 *
 * const NonEmptyAgeArrayModel = defNonEmptyArrModel('NonEmptyAgeArray', NonNegativeNumModel)
 *
 * NonEmptyAgeArrayModel([42])        //=> [42]
 *
 * NonEmptyAgeArrayModel([])          //=> EXCEPTION: 'Value must not be empty (got: [])'
 *
 * NonEmptyAgeArrayModel(-1)          //=> EXCEPTION: 'expecting Array of NonNegativeNumber, got Number -1'
 *
 * NonEmptyAgeArrayModel([-1])        //=> EXCEPTION: 'Array[0] must be >= 0 (got: -1)'
 *
 * NonEmptyAgeArrayModel('')          //=> EXCEPTION: 'expecting Array of NonNegativeNumber, got String ""'
 *
 * NonEmptyAgeArrayModel(['foo'])     //=> EXCEPTION: 'expecting Array[0] to be Number, got String "foo"'
 *
 */
const defNonEmptyArrModel = (name, def) => defArrayModel(name, def)
  .extend()
  .assert(
    ...assertAfterCheck(
      isArray,
      ...assertNotEmpty
    )
  )

module.exports = defNonEmptyArrModel
