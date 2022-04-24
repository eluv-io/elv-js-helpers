const assertBounded = require('./assertBounded')
const NumberModel = require('./NumberModel')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *  * Is greater than a specified lower bound (if specified) or is equal to the lower bound (if inclusivity is specified)
 *  * Is less than a specified upper bound (if specified) or is equal to the upper bound (if inclusivity is specified)
 *
 * Note that it is possible to specify no bounds at all, in which case the returned model will only check that input is
 * a number.
 *
 * @function
 * @since v0.0.1
 * @category ModelFactory
 * @sig String -> (Number | null) -> (Number | null) -> (Boolean | null) ->  (Boolean | null) -> (* -> Model | THROW)
 * @param {String} name - the name of the generated model
 * @param {(Number | null)} lowerBound -
 * @param {(Number | null)} upperBound -
 * @param {(Boolean | null)} lowerInclusive -
 * @param {(Boolean | null)} upperInclusive -
 * @returns {Model}
 * @example
 *
 * const HumanHeightMetersModel = BoundedNumberModel('HumanHeightMeters', 0, 3, false, true)
 *
 * HumanHeightMetersModel(0)     //=> EXCEPTION: 'HumanHeightMeters: Value must be > 0 (got: 0)'
 *
 * HumanHeightMetersModel(1.5)   //=> 1.5 // Proxied by ObjectModel
 *
 * HumanHeightMetersModel(4)     //=> EXCEPTION: 'HumanHeightMeters: Value must be <= 3 (got: 4)'
 *
 * HumanHeightMetersModel('foo') //=> EXCEPTION: 'HumanHeightMeters: expecting Number, got String "foo"'
 *
 */
const BoundedNumberModel = (name, lowerBound, upperBound, lowerInclusive, upperInclusive) =>
  NumberModel
    .extend()
    .assert(...assertBounded(NumberModel, lowerBound, upperBound, lowerInclusive, upperInclusive))
    .as(name)

module.exports = BoundedNumberModel
