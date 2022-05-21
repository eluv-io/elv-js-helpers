const isNull = require('../Boolean/isNull')
const passesModelCheck = require('../Boolean/passesModelCheck')

const compareFracStr = require('../Functional/compareFracStr')

const FractionStrModel = require('../Model/FractionStrModel')

const assertBounded = require('../ModelAssertion/assertBounded')

const _throwIfFalse = require('../Validation/throwIfFalse')

/**
 * Returns an [ObjectModel](http://objectmodel.js.org/) which will validate that an input is:
 *
 *  * A [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 *  * In the form of a whole number or fraction 'x', '-x', 'x/y' or '-x/y', y !=0
 *  * Greater than a specified lower bound (if specified) or equal to the lower bound (if lower inclusivity is specified)
 *  * Less than a specified upper bound (if specified) or equal to the upper bound (if upper inclusivity is specified)
 *
 * Note that it is possible to specify no bounds at all, in which case the returned Model will only check that input is
 * a string representing a whole number or fraction.
 *
 * Also note that bounds must be **strings**, e.g. `'0'`, `'22/7'`, `'-42'`.
 *
 * @function
 * @category ModelFactory
 * @sig String -> (Number | null) -> (Number | null) -> (Boolean | null) ->  (Boolean | null) -> (* -> Model | THROW)
 * @param {String} name - the name of the generated Model
 * @param {(String | null)} lowerBound - The lower bound (a string that is a valid FracStringModel) that must be satisfied. If `null`, no lower bound will be checked.
 * @param {(String | null)} upperBound - The upper bound (a string that is a valid FracStringModel) that must be satisfied. If `null`, no upper bound will be checked.
 * @param {(Boolean | null)} lowerInclusive - If `true` (and `lowerBound` is not `null`) then input is allowed to equal `lowerBound`.
 * @param {(Boolean | null)} upperInclusive - If `true` (and `upperBound` is not `null`) then input is allowed to equal `upperBound`.
 * @returns {Model}
 * @example
 *
 * const defBoundedFracStrModel = require('@eluvio/elv-js-helpers/ModelFactory/defBoundedFracStrModel')
 *
 * const PositiveFracModel = defBoundedFracStrModel(
 *   'PositiveFraction',
 *   '0',
 *   null,
 *   false,
 *   null
 * )
 *
 * PositiveFracModel('42')       //=> '42'
 *
 * PositiveFracModel('22/7')     //=> '22/7'
 *
 * PositiveFracModel('0')        //=> EXCEPTION: 'Value must be > 0 (got: "0")'
 *
 * PositiveFracModel('-42')      //=> EXCEPTION: 'Value must be > 0 (got: "-42")'
 *
 * PositiveFracModel('foo')      //=> EXCEPTION: 'Value must be a string in the form of a whole number or a fraction (got: "foo")'
 *
 * PositiveFracModel(42)         //=> EXCEPTION: 'expecting String, got Number 42'
 *
 * const NegativeFracModel = defBoundedFracStrModel(
 *   'NegativeFraction',
 *   null,
 *   '0',
 *   null,
 *   false
 * )
 *
 * NegativeFracModel('42')       //=> EXCEPTION: 'Value must be < 0 (got: "42")'
 *
 * NegativeFracModel('0')        //=> EXCEPTION: 'Value must be < 0 (got: "0")'
 *
 * NegativeFracModel('-22/7')    //=> '-22/7'
 *
 * NegativeFracModel('-42')      //=> '-42'
 *
 * const FracZeroToOneModel = defBoundedFracStrModel(
 *   'FractionZeroToOne',
 *   '0',
 *   '1',
 *   true,
 *   true
 * )
 *
 * FracZeroToOneModel('1/2')     //=> '1/2'
 *
 */
const defBoundedFracStrModel = (name, lowerBound, upperBound, lowerInclusive, upperInclusive) => {
  _throwIfFalse(
    `defBoundedFracStrModel: lowerBound is not valid (${lowerBound})`,
    isNull(lowerBound) || passesModelCheck(FractionStrModel, lowerBound)
  )

  _throwIfFalse(
    `defBoundedFracStrModel: upperBound is not valid (${upperBound})`,
    isNull(upperBound) || passesModelCheck(FractionStrModel, upperBound)
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
