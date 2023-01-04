const defBoundedNumModel = require('../ModelFactory/defBoundedNumModel')
const defObjModel = require('../ModelFactory/defObjModel')
const PositiveNumModel = require('../Model/PositiveNumModel')
const validateWithModel = require('../Validation/validateWithModel')

const _paramsModel = defObjModel(
  'estRemainingDur',
  {
    portionComplete: defBoundedNumModel('portionComplete', 0, 1, false, true),
    timeElapsed: PositiveNumModel
  })

/**
 * Estimates remaining duration based on portion completed expressed as a number between 0 and 1 and Datetime elapsed
 * The function is unit-agnostic, but for most uses timeElapsed would be in seconds.
 *
 * Returns a [Crocks Ok](https://crocks.dev/docs/crocks/Result.html#ok) instance wrapping a number if calculation succeeds.
 * Returns a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) instance wrapping an array containing error(s) if passed bad inputs.
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
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/resultToPOJO')
 *
 * estRemainingDur(21, 0.5).inspect()            //=> 'Ok 21'
 *
 * estRemainingDur(42, 1).inspect()              //=> 'Ok 0'
 *
 * const portionBadErr = estRemainingDur(42, 0)
 * resultToPOJO(portionBadErr).ok                //=> false
 * resultToPOJO(portionBadErr).errMsgs           //=> ['estRemainingDur: portionComplete must be > 0 and <= 1 (got: 0)']
 *
 * const elapsedBadErr = estRemainingDur(0, .1)
 * resultToPOJO(elapsedBadErr).ok                //=> false
 * resultToPOJO(elapsedBadErr).errMsgs           //=> ['estRemainingDur: timeElapsed must be > 0 (got: 0)']
 *
 * const bothBadErr = estRemainingDur(0, 0)
 * resultToPOJO(bothBadErr).ok                   //=> false
 * resultToPOJO(bothBadErr).errMsgs              //=> ['estRemainingDur: portionComplete must be > 0 and <= 1 (got: 0)', 'estRemainingDur: timeElapsed must be > 0 (got: 0)']
 *
 */
const estRemainingDur = (timeElapsed, portionComplete) =>
  validateWithModel(_paramsModel)({timeElapsed, portionComplete}).map(
    p => p.timeElapsed / p.portionComplete - p.timeElapsed
  )
module.exports = estRemainingDur
