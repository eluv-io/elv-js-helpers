'use strict'
/**
 * Returns a description of an upper bound condition
 *
 * @function
 * @private
 * @category Misc
 * @sig a -> Boolean -> String
 * @param {*} upperBound
 * @param {Boolean} inclusive - Whether values are allowed to equal `upperBound`
 * @returns {String}
 * @example
 *
 * 'use strict'
 * const _boundUpperErrMsg = require('@eluvio/elv-js-helpers/ModelAssertion/_boundUpperErrMsg')
 *
 * _boundUpperErrMsg(42, true)   //=> 'must be <= 42'
 *
 * _boundUpperErrMsg(42, false)  //=> 'must be < 42'
 *
 */
const _boundUpperErrMsg = (upperBound, inclusive) =>
  `must be ${(inclusive ? '<=' : '<')} ${upperBound}`

module.exports = _boundUpperErrMsg
