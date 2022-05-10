/**
 * Pretty-prints value to console/stdout in JSON format
 *
 * @function
 * @category Output
 * @sig * -> PRINT
 *
 * @example
 *
 * dumpJSON('A')
 * '"A"'
 *
 * dumpJSON(42)
 * '0'
 *
 * dumpJSON(undefined)
 * 'undefined'

 * dumpJSON([1, 2, 3])
 * `[
 *   1,
 *   2,
 *   3
 * ]`
 *
 * dumpJSON({foo: 'bar'})        //= -1
 * `{
 *   "foo": "bar"
 * }`
 *
 * dumpJSON(dumpJSON)
 * 'undefined'
 *
 */
const dumpJSON = x => console.log(JSON.stringify(x, null, 2))

module.exports = dumpJSON
