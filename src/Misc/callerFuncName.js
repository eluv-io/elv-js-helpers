/**
 * Returns name of function from 2 levels up the call stack, i.e. the function that called the function that
 * called `callerFuncName`. Used for introspection/logging.
 *
 * @function
 * @category Misc
 * @sig () -> String
 * @returns String
 * @example
 *
 * const currentFuncName = require('@eluvio/elv-js-helpers/Misc/currentFuncName')
 * const callerFuncName = require('@eluvio/elv-js-helpers/Misc/callerFuncName')
 *
 * const MyFunc = () => console.log('Function: ' + currentFuncName() + ' was called by: ' + callerFuncName())
 *
 * const OuterFunc = () => MyFunc()
 *
 * OuterFunc()  //=> OUTPUT: 'Function: MyFunc was called by: OuterFunc'
 *
 */
const callerFuncName = () => new Error().stack
  .split('\n')
  .filter(line => !line.includes('node_modules'))[3]
  .trim()
  .split(' ')[1]


module.exports = callerFuncName
