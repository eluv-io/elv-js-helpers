const _throwIfArgsBad = require('./_throwIfArgsBad')
const callerFuncName = require('../Misc/callerFuncName')

const throwIfArgsBad = (modelOrObj, args) => _throwIfArgsBad(callerFuncName(), modelOrObj, args)

module.exports = throwIfArgsBad
