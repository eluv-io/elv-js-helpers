const defBoundedNumModel = require('../ModelFactory/defBoundedNumModel')
const defObjectModel = require('../ModelFactory/defObjectModel')
const PositiveNumModel = require('../Model/PositiveNumModel')
const validateWithModel = require('../Validation/validateWithModel')

const _paramsModel = defObjectModel(
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
 * Returns a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) instance wrapping an array containing error(s) if passed bad inputs.
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
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/resultToPOJO')
 *
 * estTotalDur(21, 0.5).inspect()             //=> 'Ok 42'
 *
 * estTotalDur(42, 1).inspect()               //=> 'Ok 42'
 *
 * const portionBadErr = estTotalDur(42, 0)
 * resultToPOJO(portionBadErr).ok             //=> false
 * resultToPOJO(portionBadErr).errMsgs        // => ['estTotalDur: portionComplete must be > 0 and <= 1 (got: 0)']
 *
 * const elapsedBadErr = estTotalDur(0, .1)
 * resultToPOJO(elapsedBadErr).ok             //=> false
 * resultToPOJO(elapsedBadErr).errMsgs        //=> ['estTotalDur: timeElapsed must be > 0 (got: 0)']
 *
 * const bothBadErr = estTotalDur(0, 0)
 * resultToPOJO(bothBadErr).ok                //=> false
 * resultToPOJO(bothBadErr).errMsgs           //=>['estTotalDur: portionComplete must be > 0 and <= 1 (got: 0)', 'estTotalDur: timeElapsed must be > 0 (got: 0)']
 *
 */
const estTotalDur = (timeElapsed, portionComplete) =>
  validateWithModel(_paramsModel)({timeElapsed, portionComplete}).map(
    p => p.timeElapsed / p.portionComplete
  )
module.exports = estTotalDur
