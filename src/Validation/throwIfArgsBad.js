const isObject = require('../Boolean/isObject')

const callerFuncName = require('../Misc/callerFuncName')

const throwIfUndefined = require('./throwIfUndefined')

const throwIfArgsBad = (model, args) => {
  const errPrefix = callerFuncName() + '() '
  if(isObject(model.definition)) throwIfUndefined(errPrefix + 'expecting Object, got undefined', args)
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
