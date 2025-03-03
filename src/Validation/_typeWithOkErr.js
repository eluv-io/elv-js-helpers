'use strict'
const type = require('crocks/core/type')

const isErr = require('../Boolean/isErr')
const isOk = require('../Boolean/isOk')

/**
 * Returns `"Ok"` if passed a [Crocks Ok](https://crocks.dev/docs/crocks/Result.html#ok).
 * Returns `"Err"` if passed a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err).
 * Returns `type(x)` if passed anything else [https://github.com/evilsoft/crocks/blob/master/src/core/type.js](https://github.com/evilsoft/crocks/blob/master/src/core/type.js)
 *
 * Enables distinguishing between 'Err' and 'Ok' when examining `Result` instances.
 *
 * **NOTE:** Use `kind()` if you need to check type of anything other than a
 * [Crocks Result](https://crocks.dev/docs/crocks/Result.html) instance
 * (i.e. anything other than an `Ok` or `Err`).
 *
 *
 * @function
 * @private
 * @category Validation
 * @sig a -> Boolean
 * @returns {Boolean}
 *
 * @example
 *
 * 'use strict'
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const _typeWithOkErr = require('@eluvio/elv-js-helpers/Validation/_typeWithOkErr')
 *
 * _typeWithOkErr(Err(['invalid query'])) //=> "Err"
 *
 * _typeWithOkErr(Ok(42))                 //=> "Ok"
 *
 * // use kind() instead to check values other than Ok/Err!
 * _typeWithOkErr('foo')                  //=> "String"
 *
 */
const _typeWithOkErr = x =>
  isErr(x) ?
    'Err' :
    isOk(x) ?
      'Ok' :
      type(x)

module.exports = _typeWithOkErr
