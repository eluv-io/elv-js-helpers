const curry = require('./curry')
const Err = require('../ADT/Err')
const Ok = require('../ADT/Ok')
const isFunction = require('../Boolean/isFunction')

/**
 * Slightly modified version of the `tryCatch()` [Crocks helper function](https://crocks.dev/docs/functions/helpers.html)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Modified to use elv-js-helper's version of `Err()`, which wraps non-array values into a single-element array.
 *
 * See [https://crocks.dev/docs/functions/helpers.html#trycatch](https://crocks.dev/docs/functions/helpers.html#trycatch) for
 * more details.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Converts the supplied function into one that returns an Ok if successful or an Err if it throws an error.
 *
 * If the function is a method of a class instance you will need to suffix the function with `.bind(your_instance_var)`
 * (see example below)
 *
 *  else the method call will execute with `this` set incorrectly, leading to confusing errors.
 *
 * Note that calling `tryCatch` with just a function will not execute the function immediately - instead it will return
 * another function that you can call with arguments.
 *
 * To immediately invoke the function, use one of the following:
 *
 *  `tryCatch(myFunction, arguments...)`
 *
 *  `tryCatch(myFunction)(arguments...)`
 *
 *  If your function takes no arguments, you can use one of the following:
 *
 *  `tryCatch(myFunction, undefined)`
 *
 *  `tryCatch(myFunction)()`
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((*) -> b) -> (*) -> Result e b
 * @param {Function} fn - The function to convert
 * @returns {Result}
 * @example
 *
 * const tryCatch = require('@eluvio/elv-js-helpers/Functional/tryCatch')
 *
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/resultToPOJO')
 *
 * // Using tryCatch to create safe versions of functions that may throw exceptions:
 *
 * const firstChar = x => x.charAt(0)
 * const safeFirstChar = tryCatch(firstChar)
 *
 * const goodResult1 = safeFirstChar('42')
 * goodResult1.inspect()                     //=> 'Ok "4"'
 *
 * const errResult1 = safeFirstChar(42)
 * resultToPOJO(errResult1).ok               //=> false
 * resultToPOJO(errResult1).errMsgs          //=> ['TypeError: x.charAt is not a function']
 *
 * // Class instance methods require .bind():
 *
 * const myRegex = /^[a-z]+$/
 * const safeTest = tryCatch(myRegex.test.bind(myRegex))
 *
 * const goodResult2 = safeTest('abc')
 * goodResult2.inspect()                     //=> 'Ok true'
 * safeTest('42').inspect()                  //=> 'Ok false'
 *
 * const badResult2 = safeTest(Symbol())
 * resultToPOJO(badResult2).ok               //=> false
 * resultToPOJO(badResult2).errMsgs          //=> ['TypeError: Cannot convert a Symbol value to a string']
 *
 * // Forgetting to use .bind() with a class instance method will cause obscure errors:
 *
 * const badTest = tryCatch(myRegex.test)
 * const badTestResult = badTest('abc')
 * resultToPOJO(badTestResult).ok               //=> false
 * resultToPOJO(badTestResult).errMsgs          //=> ['TypeError: Method RegExp.prototype.exec called on incompatible receiver #<Object>']
 *
 *
 * // Using tryCatch like a Javascript try / catch block (immediately executing the function):
 *
 * // argument(s) listed inside tryCatch:
 * const goodResult3 = tryCatch(firstChar, '42')
 * goodResult3.inspect()                     //=> 'Ok "4"'
 *
 * // argument(s) listed after tryCatch:
 * const badResult3 = tryCatch(firstChar)(42)
 * resultToPOJO(badResult3).ok               //=> false
 * resultToPOJO(badResult3).errMsgs          //=> ['TypeError: x.charAt is not a function']

 */
const tryCatch = function(fn) {
  if(!isFunction(fn)) {
    throw new TypeError('tryCatch: Function required for first argument')
  }

  const safe = function() {
    try { return Ok(fn.apply(this, arguments)) }
    catch(e) { return Err(e) }
  }

  Object.defineProperty(safe, 'length', { value: fn.length })

  return safe
}

module.exports = curry(tryCatch)
