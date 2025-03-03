'use strict'
const defObjectModel = require('../ModelFactory/defObjectModel')
const FunctionModel = require('./FunctionModel')

// model to validate that a logger has the functions of the Javascript Console API https://developer.mozilla.org/en-US/docs/Web/API/Console
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
