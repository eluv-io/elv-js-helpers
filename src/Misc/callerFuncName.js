/**
 * Returns the name of the (non-node-module) function that was responsible for current function getting called (
 * 'current function' meaning the one containing the `callerFuncName()` call).
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
const callerFuncName = () => {
  const s = new Error().stack
  const nonNodeModuleLines = s
    .split('\n')
    .filter(line => !line.includes('node_modules'))

  const line = nonNodeModuleLines.length >= 4
    ? nonNodeModuleLines[3]
    : (nonNodeModuleLines[nonNodeModuleLines.length - 1] || 'x unknown')

  return line.trim()
    .split(' ')[1]
}


module.exports = callerFuncName
