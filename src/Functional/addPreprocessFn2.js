'use strict'
const curry = require('./curry')

/**
 * Given a 1-input preprocessing function `p` and a 2-input function `f`, returns a new function that will apply the
 * preprocessing function to each input before executing `f`, i.e. `(arg1, arg2) => f(p(arg1), p(arg2))`.
 * Useful for cleaning up inputs to a function.
 *
 * @function
 * @curried
 * @category Functional
 * @sig (* -> *) -> ((*, *) -> *) -> ((*, *) -> *)
 * @param {Function} - The 1-input preprocessing function
 * @param {Function} - The 2-input function to add preprocessor to
 * @returns {Function} A 2-input function that preprocesses its inputs
 * @example
 *
 * 'use strict'
 * const isString = require('@eluvio/elv-js-helpers/Boolean/isString')
 *
 * const addPreprocessFn2 = require('@eluvio/elv-js-helpers/Functional/addPreprocessFn2')
 *
 * const strOrNumToNum = x => isString(x) ? Number(x) : x
 *
 * const add = (x, y) => x + y
 *
 * const lenientAdd = addPreprocessFn2(strOrNumToNum, add)
 *
 * lenientAdd(42, 1)                           //=> 43
 *
 * lenientAdd('42', 1)                         //=> 43
 *
 * lenientAdd(42, '1')                         //=> 43
 *
 * lenientAdd('42', '1')                       //=> 43
 *
 * // function is curried: call with 1 argument to obtain a function that will add the given preprocessor to other functions
 *
 * const allowStringNumInputs = addPreprocessFn2(strOrNumToNum)
 *
 * const mult = (x, y) => x * y
 *
 * const lenientMult = allowStringNumInputs(mult)
 *
 * lenientMult(42, '42')                       //=> 1764
 *
 * // call with 3 arguments to obtain a 1-input function that will preprocess its input
 *
 * const lenientMult42 = addPreprocessFn2(strOrNumToNum, mult, '42')
 *
 * lenientMult42('42')                         //=> 1764
 *
 * // call with 4 arguments to obtain final value instead of a function
 *
 * const x = 42
 * const y = '42'
 *
 * addPreprocessFn2(strOrNumToNum, add, x, y)  //=> 84
 *
 */
const addPreprocessFn2 = curry(
  (preprocessorFn, binaryFn) =>
    curry(
      (val1, val2) => binaryFn(
        preprocessorFn(val1),
        preprocessorFn(val2)
      )
    )
)

module.exports = addPreprocessFn2
