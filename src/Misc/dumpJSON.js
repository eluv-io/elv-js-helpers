/**
 * Pretty-prints value to console/stdout in JSON format
 *
 * @function
 * @category Misc
 * @sig * -> PRINT
 * @example
 *
 * const dumpJSON = require('@eluvio/elv-js-helpers/Misc/dumpJSON')
 *
 * dumpJSON('A')
 * // string that is output contains leading and trailing "
 * // console.log is called with:
 * '"A"'
 *
 * dumpJSON(42)
 * // console.log is called with:
 * '42'
 *
 * dumpJSON(undefined)
 * // not a string: actual value that gets passed to console.log is: undefined
 * // console.log is called with:
 * undefined

 * dumpJSON([1, 2, 3])
 * // console.log is called with:
 * `[
 *   1,
 *   2,
 *   3
 * ]`
 *
 * dumpJSON({foo: 'bar'})
 * // console.log is called with:
 * `{
 *   "foo": "bar"
 * }`
 *
 * dumpJSON(dumpJSON)
 * // not a string: actual value that gets passed to console.log is: undefined
 * // console.log is called with:
 * undefined
 *
 */
const dumpJSON = x => console.log(JSON.stringify(x, null, 2))

module.exports = dumpJSON
