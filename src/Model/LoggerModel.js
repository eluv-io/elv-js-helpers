'use strict'
const defObjectModel = require('../ModelFactory/defObjectModel')
const FunctionModel = require('./FunctionModel')

/**
 * Validates that an input is something that has the same function names as the Javascript Console API https://developer.mozilla.org/en-US/docs/Web/API/Console
 *
 * @class
 * @category Model
 * @sig * -> *
 * @param {*} - Any input
 * @returns {*} The input
 *
 * @example
 *
 * 'use strict'
 * const LoggerModel = require('@eluvio/elv-js-helpers/Model/LoggerModel')
 *
 * const throwsException = require('@eluvio/elv-js-helpers/Boolean/throwsException')
 *
 * throwsException(() => LoggerModel(console))              //=> false
 *
 * throwsException(() => LoggerModel(console).log('foo'))   //=> false
 *
 * LoggerModel(Math)                                        //=> EXCEPTION: 'expecting assert to be Function, got undefined'
 *
 * LoggerModel(Math.round)                                  //=> EXCEPTION: 'expecting assert to be Function, got undefined'
 *
 * LoggerModel([])                                          //=> EXCEPTION: 'expecting assert to be Function, got undefined'
 *
 * LoggerModel(null)                                        //=> EXCEPTION: 'expecting Object, got null'
 *
 * LoggerModel(undefined)                                   //=> EXCEPTION: 'expecting assert to be Function, got undefined'
 *
 * LoggerModel([1])                                         //=> EXCEPTION: 'expecting assert to be Function, got undefined'
 *
 * LoggerModel('')                                          //=> EXCEPTION: 'expecting Object, got String ""'
 *
 */
const LoggerModel = defObjectModel('Logger', {
  assert: FunctionModel,
  debug: FunctionModel,
  error: FunctionModel,
  group: FunctionModel,
  groupEnd: FunctionModel,
  info: FunctionModel,
  log: FunctionModel,
  table: FunctionModel,
  trace: FunctionModel,
  warn: FunctionModel
})

module.exports = LoggerModel
