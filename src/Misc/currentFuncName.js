'use strict'
/**
 * Returns name of function that it is called from. Used for introspection/logging
 *
 * @function
 * @category Misc
 * @sig () -> String
 * @returns String
 * @example
 *
 * 'use strict'
 * const currentFuncName = require('@eluvio/elv-js-helpers/Misc/currentFuncName')
 *
 * const MyFunc = () => console.log('Entered function: ' + currentFuncName())
 *
 * MyFunc()  //=> OUTPUT: 'Entered function: MyFunc'
 *
 */
const currentFuncName = () => new Error().stack.split('\n')[2].trim().split(' ')[1]

module.exports = currentFuncName
