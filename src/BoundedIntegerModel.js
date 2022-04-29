const assertBounded = require('./assertBounded')
const IntegerModel = require('./IntegerModel')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * An integer
 *  * Greater than a specified lower bound (if specified) or equal to the lower bound (if lower inclusivity is specified)
 *  * Less than a specified upper bound (if specified) or equal to the upper bound (if upper inclusivity is specified)
 *
 * Note that it is possible to specify no bounds at all, in which case the returned model will only check that input is
 * an integer.
 *
 * @function
 * @since v0.0.1
 * @category ModelFactory
 * @sig String -> (Number | null) -> (Number | null) -> (Boolean | null) ->  (Boolean | null) -> (* -> Model | THROW)
 * @param {String} name - the name of the generated model
 * @param {(Number | null)} lowerBound - The lower bound that must be satisfied. If `null`, no lower bound will be checked.
 * @param {(Number | null)} upperBound - The upper bound that must be satisfied. If `null`, no lower bound will be checked.
 * @param {(Boolean | null)} lowerInclusive - If `true` (and `lowerBound` is not `null`) then input is allowed to equal `lowerBound`.
 * @param {(Boolean | null)} upperInclusive - If `true` (and `upperBound` is not `null`) then input is allowed to equal `upperBound`.
 * @returns {Model}
 * @example
 *
 * const CartonEggCountModel = BoundedIntegerModel('CartonEggCount', 0, 12, true, true)
 *
 * CartonEggCountModel(-1)     //=> EXCEPTION: 'Value must be >= 0 (got: -1)'
 *
 * CartonEggCountModel(0)      //=> 0 // Proxied by ObjectModel
 *
 * CartonEggCountModel(4.2)    //=> EXCEPTION: 'Value must be an integer (got: 4.2)'
 *
 * CartonEggCountModel(6)      //=> 6 // Proxied by ObjectModel
 *
 * CartonEggCountModel(42)     //=> EXCEPTION: 'Value must be <= 12 (got: 42)'
 *
 * CartonEggCountModel('foo')  //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */const BoundedIntegerModel = (name, lowerBound, upperBound, lowerInclusive, upperInclusive) =>
  IntegerModel
    .extend()
    .assert(
      ...assertBounded(
        IntegerModel,
        lowerBound,
        upperBound,
        lowerInclusive,
        upperInclusive
      )
    )
    .as(name)

module.exports = BoundedIntegerModel
