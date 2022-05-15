// noinspection JSValidateTypes

const defArrModel = require('./defArrModel')

const isArray = require('../Boolean/isArray')

const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')
const assertNotEmpty = require('../ModelAssertion/assertNotEmpty')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 *  * Made up of elements that are of the specified type definition(s)
 *
 * @function
 * @category ModelFactory
 * @sig String -> ([Model] | Model) -> (* -> Array | THROW)
 * @param {String} name - the name of the generated Model
 * @param {(Model[] | Model)} def - The type/Model or array of types/Model that elements
 * @returns {Object} Returns an [ObjectModel](http://objectmodel.js.org/) that can be called with an input
 * @example
 *
 * const NonNegativeNumModel = require('@eluvio/elv-js-helpers/Model/NonNegativeNumModel')
 *
 * const defNonEmptyArrModel = require('@eluvio/elv-js-helpers/ModelFactory/defNonEmptyArrModel')
 *
 * const NonEmptyAgeArrayModel = defNonEmptyArrModel('NonEmptyAgeArray', NonNegativeNumModel)
 *
 * NonEmptyAgeArrayModel([42])        //=> [42]  (proxied by ObjectModel)
 *
 * NonEmptyAgeArrayModel([])          //=> EXCEPTION: 'Value must not be an empty array (got: [])'
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
const defNonEmptyArrModel = (name, def) => defArrModel(name, def)
  .extend()
  .assert(
    ...assertAfterCheck(
      isArray,
      ...assertNotEmpty
    )
  )

module.exports = defNonEmptyArrModel
