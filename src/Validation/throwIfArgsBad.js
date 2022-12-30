const isFunction = require('../Boolean/isFunction')
const isObject = require('../Boolean/isObject')

const callerFuncName = require('../Misc/callerFuncName')
const throwError = require('../Misc/throwError')

const defSealedObjModel = require('../ModelFactory/defSealedObjModel')

const kind = require('../Validation/kind')

const throwIfUndefined = require('./throwIfUndefined')

const throwIfArgsBad = (modelOrObj, args) => {
  const errPrefix = callerFuncName() + '() '
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
    const message = 'Error: ' + errPrefix + origErr.message
    const revisedErr = new Error(message)
    let stackLines = origErr.stack.split('\n')
    stackLines[0] = message
    revisedErr.stack = stackLines.join('\n')
    throw revisedErr
  }
  return result
}

module.exports = throwIfArgsBad
