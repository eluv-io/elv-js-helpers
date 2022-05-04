const defBoundedNumModel = require('./defBoundedNumModel')
const defObjModel = require('./defObjModel')
const PositiveNumModel = require('./PositiveNumModel')
const validator = require('./validator')

const _paramsModel = defObjModel(
  'estTotalDurationParams',
  {
    portionComplete: defBoundedNumModel('portionComplete', 0, 1, false, true),
    timeElapsed: PositiveNumModel
  })

/**
 * Estimates total duration based on portion completed expressed as a number between 0 and 1 and time elapsed
 * The function is unit-agnostic, but for most uses timeElapsed is in seconds.
 *
 * Returns a [Crocks Ok](https://crocks.dev/docs/crocks/Result.html#ok) instance wrapping a number if calculation succeeds.
 * Returns a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) instance wrapping an array containing error string(s) if passed bad inputs.
 *
 * @function
 * @since v0.0.1
 * @category Time
 * @sig Number -> Number -> Result [String] Number
 * @param {number} timeElapsed The amount of time taken so far
 * @param {number}  portionComplete A number between 0 and 1 (inclusive) representing progress
 * @returns {number}
 * @example
 *
 * estTotalDuration(21, 0.5)   //=> Ok 42
 *
 * estTotalDuration(42, 1)     //=> Ok 42
 *
 * etaDurationStr(42, 0)       //=> Err ['estTotalDuration: portionComplete must be > 0 and <= 1 (got: 0)']
 *
 * etaDurationStr(0, .1)       //=> Err ['estTotalDuration: timeElapsed must be > 0 (got: 0)']
 *
 * etaDurationStr(0, 0)        //=> Err ['estTotalDuration: timeElapsed must be > 0 (got: 0)', 'estTotalDuration: portionComplete must be > 0 and <= 1 (got: 0)' ]
 *
 * etaDuration(-1, .1)         //=> Err ['estTotalDuration: timeElapsed must be > 0 (got: -1)']
 *
 * etaDuration(42, 42)        //=> Err ['"estTotalDuration: portionComplete must be > 0 and <= 1 (got: 42)']
 *
 */
const estTotalDuration = (timeElapsed, portionComplete) =>
  validator(_paramsModel)({timeElapsed, portionComplete}).map(
    p => p.timeElapsed / p.portionComplete
  )
module.exports = estTotalDuration
