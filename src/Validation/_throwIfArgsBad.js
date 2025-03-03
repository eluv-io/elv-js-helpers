'use strict'
const isFunction = require('../Boolean/isFunction')
const isObject = require('../Boolean/isObject')

const throwError = require('../Misc/throwError')

const defSealedObjModel = require('../ModelFactory/defSealedObjModel')

const kind = require('../Validation/kind')

const throwIfUndefined = require('./throwIfUndefined')

const _throwIfArgsBad = (funcName, modelOrObj, args) => {
  const errPrefix = funcName + '() '
  const model = isObject(modelOrObj)
    ? defSealedObjModel('args', modelOrObj)
    : isFunction(modelOrObj)
      ? modelOrObj
      : throwError(`Expected model (function) or object to validate arguments against, got ${kind(modelOrObj)} (${modelOrObj})`)
  throwIfUndefined(errPrefix + 'expecting Object containing arguments, got undefined', args)
  let result
  try {
    result = model(args)
  } catch (origErr) {
    const message = errPrefix + origErr.message // 'Error: ' + errPrefix + origErr.message
    const revisedErr = new Error(message)
    let stackLines = origErr.stack.split('\n')
    stackLines[0] = message
    revisedErr.stack = stackLines.join('\n')
    throw revisedErr
  }
  return result
}

module.exports = _throwIfArgsBad
