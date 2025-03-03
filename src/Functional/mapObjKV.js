'use strict'
const curry = require('./curry')
/**
 * Creates a new object with top level keys and values transformed by separate functions.
 *
 * The key transformation function can have up to three inputs and will be passed current KEY, current VALUE, and the
 * entire original object.
 *
 * The value transformation function can have up to three inputs and will be passed current VALUE, current KEY, and the
 * entire original object.
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((String, *, Object) -> *) -> ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} keyFn - The function to execute to obtain new key
 * @param {Function} valFn - The function to execute to obtain new value
 * @param {Object} obj - The object to process
 * @returns {Object}
 * @example
 *
 * 'use strict'
 * const mapObjKV = require('@eluvio/elv-js-helpers/Functional/mapObjKV')
 *
 * const dumpJSON = require('@eluvio/elv-js-helpers/Misc/dumpJSON')
 *
 * const myObj = {
 *   firstname: "arthur",
 *   lastname: "dent",
 *   id: 42
 * }
 *
 * // note that function can have fewer than 3 inputs if you don't need to use all of the parameters:
 * const keyPrefixer = key =>  `new_${key}`
 *
 * // note that function can have fewer than 3 inputs if you don't need to use all of the parameters:
 * const nameCapitalizer = (val, key) =>  key.endsWith('name')
 *   ? val.charAt(0).toUpperCase() + val.slice(1)
 *   : val
 *
 * const result = mapObjKV(
 *   keyPrefixer,
 *   nameCapitalizer,
 *   myObj
 * )
 *
 * dumpJSON(result)         //=> OUTPUT: '{\n  "new_firstname": "Arthur",\n  "new_lastname": "Dent",\n  "new_id": 42\n}'
 *
 *
 */
const mapObjKV = (keyFn, valFn, obj) => Object.fromEntries(
  Object.entries(obj).map(
    ([key, val]) => [keyFn(key, val, obj), valFn(val, key, obj)]
  )
)

module.exports = curry(mapObjKV)
