const type = require('crocks/core/type')

const isErr = require('../isErr')
const isOk = require('../isOk')

/**
 * Returns `"Ok"` if passed a [Crocks Ok](https://crocks.dev/docs/crocks/Result.html#ok).
 * Returns `"Err"` if passed a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err).
 * Returns `type(x)` if passed anything else [https://github.com/evilsoft/crocks/blob/master/src/core/type.js](https://github.com/evilsoft/crocks/blob/master/src/core/type.js)
 *
 * Enables distinguishing between 'Err' and 'Ok' when examining `Result` instances.
 *
 * **NOTE:** Use [kind-of](https://github.com/jonschlinkert/kind-of) if you need to check type of anything other than
 * a [Crocks ADT](https://crocks.dev/docs/crocks/) instance.
 *
 *
 * @function
 * @private
 * @since v0.0.1
 * @category Functional
 * @sig a -> Boolean
 * @returns {Boolean}
 *
 * @example
 *
 * _typeWithOkErr(Err(['invalid query'])) //=> "Err"
 *
 * _typeWithOkErr(Ok(42)) //=> "Ok"
 *
 * _typeWithOkErr('foo') //=> "String"
 *
 */
const _typeWithOkErr = x =>
  isErr(x) ?
    'Err' :
    isOk(x) ?
      'Ok' :
      type(x)

module.exports = _typeWithOkErr
