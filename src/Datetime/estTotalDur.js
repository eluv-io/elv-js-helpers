const defBoundedNumModel = require('../ModelFactory/defBoundedNumModel')
const defObjModel = require('../ModelFactory/defObjModel')
const PositiveNumModel = require('../Model/PositiveNumModel')
const validator = require('../Validation/validator')

const _paramsModel = defObjModel(
  'estTotalDur',
  {
    portionComplete: defBoundedNumModel('portionComplete', 0, 1, false, true),
    timeElapsed: PositiveNumModel
  })

/**
 * Estimates total duration based on portion completed expressed as a number between 0 and 1 and Datetime elapsed
 * The function is unit-agnostic, but for most uses timeElapsed is in seconds.
 *
 * Returns a [Crocks Ok](https://crocks.dev/docs/crocks/Result.html#ok) instance wrapping a number if calculation succeeds.
 * Returns a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) instance wrapping an array containing error string(s) if passed bad inputs.
 *
 * @function
 * @category Datetime
 * @sig Number -> Number -> Result [String] Number
 * @param {number} timeElapsed The amount of Datetime taken so far
 * @param {number}  portionComplete A number between 0 and 1 (inclusive) representing progress
 * @returns {number}
 * @example
 *
 * const estTotalDur = require('@eluvio/elv-js-helpers/Datetime/estTotalDur')
 *
 * estTotalDur(21, 0.5)   //=> Ok 42
 *
 * estTotalDur(42, 1)     //=> Ok 42
 *
 * estTotalDur(42, 0)     //=> Err ['estTotalDur: portionComplete must be > 0 and <= 1 (got: 0)']
 *
 * estTotalDur(0, .1)     //=> Err ['estTotalDur: timeElapsed must be > 0 (got: 0)']
 *
 * estTotalDur(0, 0)      //=> Err ['estTotalDur: portionComplete must be > 0 and <= 1 (got: 0)', 'estTotalDur: timeElapsed must be > 0 (got: 0)']
 *
 * estTotalDur(-1, .1)    //=> Err ['estTotalDur: timeElapsed must be > 0 (got: -1)']
 *
 * estTotalDur(42, 42)    //=> Err ['estTotalDur: portionComplete must be > 0 and <= 1 (got: 42)']
 *
 */
const estTotalDur = (timeElapsed, portionComplete) =>
  validator(_paramsModel)({timeElapsed, portionComplete}).map(
    p => p.timeElapsed / p.portionComplete
  )
module.exports = estTotalDur
