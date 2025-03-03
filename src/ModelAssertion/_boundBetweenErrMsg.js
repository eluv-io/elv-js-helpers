'use strict'
/**
 * Returns an error message for a failed upper bound condition
 *
 * @function
 * @private
 * @category Misc
 * @sig a -> a -> Boolean -> Boolean -> String
 * @param {*} lowerBound
 * @param {*} upperBound
 * @param {Boolean} lowerInclusive - Whether values are allowed to equal `lowerBound`
 * @param {Boolean} upperInclusive - Whether values are allowed to equal `upperBound`
 * @returns {String}
 * @example
 *
 * 'use strict'
 * const _boundBetweenErrMsg = require('@eluvio/elv-js-helpers/ModelAssertion/_boundBetweenErrMsg')
 *
 * _boundBetweenErrMsg(0, 42, true, true)     //=> 'must be >= 0 and <= 42'
 *
 * _boundBetweenErrMsg(0, 42, false, false)   //=> 'must be > 0 and < 42'
 *
 */
const _boundBetweenErrMsg = (lowerBound, upperBound, lowerInclusive, upperInclusive) =>
  `must be ${(lowerInclusive ? '>=' : '>')} ${lowerBound} and ${(upperInclusive ? '<=' : '<')} ${upperBound}`

module.exports = _boundBetweenErrMsg
