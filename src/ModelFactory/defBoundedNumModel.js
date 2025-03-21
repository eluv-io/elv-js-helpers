'use strict'
const NumberModel = require('../Model/NumberModel')

const assertBounded = require('../ModelAssertion/assertBounded')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *  * Greater than a specified lower bound (if specified) or equal to the lower bound (if lower inclusivity is specified)
 *  * Less than a specified upper bound (if specified) or equal to the upper bound (if upper inclusivity is specified)
 *
 * Note that it is possible to specify no bounds at all, in which case the returned Model will only check that input is
 * a number.
 *
 * @function
 * @category ModelFactory
 * @sig String -> (Number | null) -> (Number | null) -> (Boolean | null) ->  (Boolean | null) -> (* -> Model | THROW)
 * @param {String} name - the name of the generated Model
 * @param {(Number | null)} lowerBound - The lower bound that must be satisfied. If `null`, no lower bound will be checked.
 * @param {(Number | null)} upperBound - The upper bound that must be satisfied. If `null`, no upper bound will be checked.
 * @param {(Boolean | null)} lowerInclusive - If `true` (and `lowerBound` is not `null`) then input is allowed to equal `lowerBound`.
 * @param {(Boolean | null)} upperInclusive - If `true` (and `upperBound` is not `null`) then input is allowed to equal `upperBound`.
 * @returns {Model}
 * @example
 *
 * 'use strict'
 * const defBoundedNumModel = require('@eluvio/elv-js-helpers/ModelFactory/defBoundedNumModel')
 *
 * const HumanHeightMetersModel = defBoundedNumModel('HumanHeightMeters', 0, 3, false, true)
 *
 * HumanHeightMetersModel(0)     //=> EXCEPTION: 'Value must be > 0 and <= 3 (got: 0)'
 *
 * HumanHeightMetersModel(1.5)   //=> 1.5
 *
 * HumanHeightMetersModel(4)     //=> EXCEPTION: 'Value must be > 0 and <= 3 (got: 4)'
 *
 * HumanHeightMetersModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const defBoundedNumModel = (name, lowerBound, upperBound, lowerInclusive, upperInclusive) =>
  NumberModel
    .extend()
    .assert(
      ...assertBounded(
        NumberModel,
        lowerBound,
        upperBound,
        lowerInclusive,
        upperInclusive
      )
    )
    .as(name)

module.exports = defBoundedNumModel
