const isRegExp = require('../Boolean/isRegExp')
const isString = require('../Boolean/isString')

const throwError = require('../Misc/throwError')

const escapeForRegExp = require('./escapeForRegExp')

/**
 * If input value is a regular expression, returns the source (definition) of the expression.
 * If input is a string, returns the string, escaped so that it can be used as to construct an exact match regexp.
 * Otherwise throws an exception.
 *
 * @function
 * @private
 * @category Conversion
 * @sig a -> String | EXCEPTION
 * @param {*} x - The value to inspect
 * @returns {String}
 * @example
 *
 * const _strOrRegExSrc = require('@eluvio/elv-js-helpers/Conversion/_strOrRegExSrc')
 *
 * const RE_UUID_LOWER_CASE = require('@eluvio/elv-js-helpers/Validation/RE_UUID_LOWER_CASE')
 *
 * _strOrRegExSrc(RE_UUID_LOWER_CASE)  //=> '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
 *
 * _strOrRegExSrc('foo')               //=> 'foo'
 *
 * _strOrRegExSrc(3)                   //=> EXCEPTION: 'Value is not a RegExp or string (3)'
 *
 */
const _strOrRegExSrc = x => isRegExp(x)
  ? x.source
  : isString(x)
    ? escapeForRegExp(x)
    : throwError(`Value is not a RegExp or string (${x})`)

module.exports = _strOrRegExSrc