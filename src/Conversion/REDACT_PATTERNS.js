/**
 * Array of [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
 * used by `redact()` to decide whether a particular object attribute should have its value redacted.
 *
 * @constant
 * @default
 * @type {RegExp[]}
 * @category Constant
 * @example
 *
 * const REDACT_PATTERNS = require('@eluvio/elv-js-helpers/Conversion/REDACT_PATTERNS')
 *
 * const shouldRedact = x => REDACT_PATTERNS.find(pattern => pattern.test(x)) !== undefined;
 *
 * shouldRedact('Password')     //=> true
 *
 * shouldRedact('My_secret')     //=> true
 *
 * shouldRedact('foo')          //=> false
 *
 */
const REDACT_PATTERNS = [
  /_KEY$/i,         // ends with "_KEY" (case insensitive)
  /_SECRET$/i,      // ends with "_SECRET" (case insensitive)

  /^AWS_KEY$/i,     // specific check in case generic "ends with" check gets changed
  /^AWS_SECRET$/i,  // specific check in case generic "ends with" check gets changed
  /^PRIVATE_KEY$/i, // specific check in case generic "ends with" check gets changed
  /^KEY$/i,         // equals "KEY" (case insensitive)

  /SECRET/i,        // contains "SECRET" (case insensitive)
  /PASSWORD/i,      // contains "PASSWORD" (case insensitive)
]

module.exports = REDACT_PATTERNS
