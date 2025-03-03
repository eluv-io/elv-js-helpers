'use strict'
/**
 * Pretty-prints value to console/stdout in JSON format. Like `console.log()`, returns `undefined`.
 *
 * @function
 * @category Misc
 * @sig * -> undefined (PRINTS TO CONSOLE)
 * @example
 *
 * 'use strict'
 * const dumpJSON = require('@eluvio/elv-js-helpers/Misc/dumpJSON')
 *
 * dumpJSON('A')           //=> OUTPUT: '"A"'
 *
 * dumpJSON(42)            //=> OUTPUT: '42'
 *
 * dumpJSON(undefined)     //=> OUTPUT: undefined
 *
 * dumpJSON([1, 2, 3])     //=> OUTPUT: `[\n  1,\n  2,\n  3\n]`
 *
 * dumpJSON({foo: 'bar'})  //=> OUTPUT: `{\n  "foo": "bar"\n}`
 *
 * dumpJSON(dumpJSON)      //=> OUTPUT: undefined
 *
 */
const dumpJSON = x => console.log(JSON.stringify(x, null, 2))

module.exports = dumpJSON
