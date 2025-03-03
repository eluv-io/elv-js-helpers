'use strict'
/**
 * Returns a description of a lower bound condition
 *
 * @function
 * @private
 * @category Misc
 * @sig a -> Boolean -> String
 * @param {*} lowerBound
 * @param {Boolean} inclusive - Whether values are allowed to equal `lowerBound`
 * @returns {String}
 * @example
 *
 * 'use strict'
 * const _boundLowerErrMsg = require('@eluvio/elv-js-helpers/ModelAssertion/_boundLowerErrMsg')
 *
 * _boundLowerErrMsg(42, true)   //=> 'must be >= 42'
 *
 * _boundLowerErrMsg(42, false)  //=> 'must be > 42'
 *
 */
const _boundLowerErrMsg = (lowerBound, inclusive) =>
  `must be ${(inclusive ? '>=' : '>')} ${lowerBound}`

module.exports = _boundLowerErrMsg
