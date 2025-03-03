'use strict'
const kind = require('../Validation/kind')
const isUndefined = require('../Boolean/isUndefined')
const mapObjValues = require('../Functional/mapObjValues')
const REDACT_PATTERNS = require('./REDACT_PATTERNS')
/**
 * Redacts string values within objects. Used to filter data before logging.
 *
 * If passed an object or array, will recursively traverse it and construct a copy where object string values stored
 * under certain keys are replaced with redacted versions.
 *
 * If an object key is associated with a value that is a string, the key is tested against an array of regular
 * expressions ([REDACT_PATTERNS](#REDACT_PATTERNS), plus any additional patterns passed in). If any match, then the
 * string will be replaced with a redacted version:
 *
 *  * Strings longer than 10 characters are replaced by '[REDACTED ...' + last 4 chars + ']'
 *  * Strings 10 characters long or less are replaced by '[REDACTED]'
 *
 * If passed anything other than an object or array, will return the original value.
 *
 * @function
 * @category Conversion
 * @sig (a, [b], c) -> a
 * @param {*} value - The value to redact
 * @param {RegExp[]} [addlPatterns=[]] - Any additional patters to test keys against
 * @param {string} [parentKey=null] - the key that `value` was stored under, if any
 * @returns {*}
 * @example
 *
 * 'use strict'
 * const redact = require('@eluvio/elv-js-helpers/Conversion/redact')
 *
 * const data = {
 *   user: 'foo',
 *   password: 'my very long password',
 *   key: '1234'
 * }
 *
 * const redacted = JSON.stringify(redact(data))
 *
 * console.log(redacted)    //=> OUTPUT: '{"user":"foo","password":"[REDACTED ...word]","key":"[REDACTED]"}'
 *
 * const arr = [
 *   {password: 'x'},
 *   {PRIVATE_KEY: '1234'},
 *   {foo: 'bar'}
 * ]
 *
 * const redactedArr = JSON.stringify(redact(arr))
 * console.log(redactedArr)    //=> OUTPUT: '[{"password":"[REDACTED]"},{"PRIVATE_KEY":"[REDACTED]"},{"foo":"bar"}]'
 *
 */
const redact = (value, addlPatterns = [], parentKey = null) => {
  const testPatterns = REDACT_PATTERNS.concat(addlPatterns)
  switch(kind(value)) {
    case 'Array':
      return value.map(v => redact(v,addlPatterns))
    case 'Object':
      return mapObjValues((val, key) => redact(val, addlPatterns, key), value)
    case 'String':
      return isUndefined(testPatterns.find(pattern => pattern.test(parentKey)))
        ? value
        : value.length <= 10 ? '[REDACTED]' : `[REDACTED ...${value.slice(-4)}]`
    default:
      return value
  }
}

module.exports = redact
