const defBoundedNumModel = require('../ModelFactory/defBoundedNumModel')
const defObjModel = require('../ModelFactory/defObjModel')
const PositiveNumModel = require('../Model/PositiveNumModel')
const validator = require('../Validation/validator')

const _paramsModel = defObjModel(
  'estRemainingDur',
  {
    portionComplete: defBoundedNumModel('portionComplete', 0, 1, false, true),
    timeElapsed: PositiveNumModel
  })

/**
 * Estimates remaining duration based on portion completed expressed as a number between 0 and 1 and Datetime elapsed
 * The function is unit-agnostic, but for most uses timeElapsed is in seconds.
 *
 * Returns a [Crocks Ok](https://crocks.dev/docs/crocks/Result.html#ok) instance wrapping a number if calculation succeeds.
 * Returns a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) instance wrapping an array containing error string(s) if passed bad inputs.
 *
 * @function
 * @category Datetime
 * @sig Number -> Number -> Result [String] Number
 * @param {number} timeElapsed - The amount of Datetime taken so far
 * @param {number} portionComplete - A number between 0 and 1 (inclusive) representing progress
 * @returns {number}
 * @example
 *
 * const estRemainingDur = require('@eluvio/elv-js-helpers/Datetime/estRemainingDur')
 *
 * estRemainingDur(21, 0.5)   //=> Ok 21
 *
 * estRemainingDur(42, 1)     //=> Ok 0
 *
 * estRemainingDur(42, 0)     //=> Err [(ObjectModel error, message="portionComplete must be > 0 and <= 1 (got: 0)")]
 *
 * estRemainingDur(0, .1)     //=> Err [(ObjectModel error, message="timeElapsed must be > 0 (got: 0)")]
 *
 * estRemainingDur(0, 0)      //=> Err [(ObjectModel error, message="portionComplete must be > 0 and <= 1 (got: 0)"), (ObjectModel error, message="timeElapsed must be > 0 (got: 0)")]
 *
 * estRemainingDur(-1, .1)    //=> Err [(ObjectModel error, message="timeElapsed must be > 0 (got: -1)")]
 *
 * estRemainingDur(42, 42)    //=> Err [(ObjectModel error, message="portionComplete must be > 0 and <= 1 (got: 42)")]
 *
 */
const estRemainingDur = (timeElapsed, portionComplete) =>
  validator(_paramsModel)({timeElapsed, portionComplete}).map(
    p => p.timeElapsed / p.portionComplete - p.timeElapsed
  )
module.exports = estRemainingDur
