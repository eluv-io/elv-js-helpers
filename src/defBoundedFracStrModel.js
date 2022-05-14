const _throwIfFalse = require('./internal/_throwIfFalse')
const assertBounded = require('./assertBounded')
const checkVsModel = require('./checkVsModel')
const compareFracStr = require('./compareFracStr')
const FractionStrModel = require('./FractionStrModel')
const isNull = require('./isNull')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 *  * In the form of a whole number or fraction 'x', '-x', 'x/y' or '-x/y', y !=0
 *  * Greater than a specified lower bound (if specified) or equal to the lower bound (if lower inclusivity is specified)
 *  * Less than a specified upper bound (if specified) or equal to the upper bound (if upper inclusivity is specified)
 *
 * Note that it is possible to specify no bounds at all, in which case the returned model will only check that input is
 * a number.
 *
 * @function
 * @category ModelFactory
 * @sig String -> (Number | null) -> (Number | null) -> (Boolean | null) ->  (Boolean | null) -> (* -> Model | THROW)
 * @param {String} name - the name of the generated model
 * @param {(String | null)} lowerBound - The lower bound (a string that is a valid FracStringModel) that must be satisfied. If `null`, no lower bound will be checked.
 * @param {(String | null)} upperBound - The upper bound (a string that is a valid FracStringModel) that must be satisfied. If `null`, no upper bound will be checked.
 * @param {(Boolean | null)} lowerInclusive - If `true` (and `lowerBound` is not `null`) then input is allowed to equal `lowerBound`.
 * @param {(Boolean | null)} upperInclusive - If `true` (and `upperBound` is not `null`) then input is allowed to equal `upperBound`.
 * @returns {Model}
 * @example
 *
 * // TODO - supply example
 *
 */
const defBoundedFracStrModel = (name, lowerBound, upperBound, lowerInclusive, upperInclusive) => {
  _throwIfFalse(
    `defBoundedFracStrModel: lowerBound is not valid (${lowerBound})`,
    isNull(lowerBound) || checkVsModel(FractionStrModel, lowerBound)
  )

  _throwIfFalse(
    `defBoundedFracStrModel: upperBound is not valid (${upperBound})`,
    isNull(upperBound) || checkVsModel(FractionStrModel, upperBound)
  )

  return FractionStrModel
    .extend()
    .assert(
      ...assertBounded(
        FractionStrModel,
        lowerBound,
        upperBound,
        lowerInclusive,
        upperInclusive,
        compareFracStr
      )
    )
    .as(name)
}

module.exports = defBoundedFracStrModel
