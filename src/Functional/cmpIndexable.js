const curry = require('./curry')

const isNumber = require('../Boolean/isNumber')

/**
 * Compares two indexable items (generally arrays or strings) `x` and `y` pairwise and returns:
 *
 * * `-1` if `x` can be considered 'less than' `y` (either x[i] < y[i] or y[i] is undefined for first pair x[i],y[i] where x[i] !== y[i])
 * * `0` if `x` can be considered 'equal to' `y` (more specifically, if neither `x < y` nor `y < x` are `true`)
 * * `1` if `y` can be considered 'less than' `x` (either y[i] < x[i] or x[i] is undefined for first pair x[i],y[i] where x[i] !== y[i])
 *
 * Used as an input into sorting and validation functions.
 *
 * Throws an exception on bad inputs.
 *
 * @function
 * @curried
 * @category Functional
 * @sig [a] -> [b] -> -1 | 0 | 1
 * @param {(Array | String)} x - A string or an array whose elements can be compared with `<`
 * @param {(Array | String)} y - A string or an array whose elements can be compared with `<`
 * @returns {Integer} -1 | 0 | 1
 * @example
 *
 * const cmpIndexable = require('@eluvio/elv-js-helpers/Functional/cmpIndexable')
 *
 * cmpIndexable([], [42])         //=> -1
 *
 * cmpIndexable([42], [])         //=> 1
 *
 * cmpIndexable([42], [42])       //=> 0
 *
 * cmpIndexable([42, 1], [42])    //=> 1
 *
 * cmpIndexable(2, 1)             //=> EXCEPTION: 'cmpIndexable: first argument does not have a length'
 *
 * cmpIndexable('abc', 'ab')      //=> 1
 *
 * cmpIndexable(null, undefined)  //=> EXCEPTION: "Cannot read properties of null (reading 'length')"
 *
 * cmpIndexable([42], ['a'])      //=> EXCEPTION: 'cmpIndexable: elements at index 0 are not comparable'
 *
 */
const cmpIndexable = curry(
  (x, y) => {
    const len1 = x.length
    if(!isNumber(len1)) throw Error('cmpIndexable: first argument does not have a length')
    const len2 = y.length
    if(!isNumber(len2)) throw Error('cmpIndexable: second argument does not have a length')
    const minLength = len1 < len2 ? len1 : len2
    for (let i = 0; i < minLength; i++) {
      if (x[i] < y[i]) return -1
      if (y[i] < x[i]) return 1
      if (x[i] !== y[i]) throw Error(`cmpIndexable: elements at index ${i} are not comparable`)
    }
    if (len1 < len2) return -1
    if (len2 < len1) return 1
    return 0
  }
)

module.exports = cmpIndexable
