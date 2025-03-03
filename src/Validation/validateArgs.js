'use strict'
const _throwIfArgsBad = require('./_throwIfArgsBad')
const curry = require('../Functional/curry')
const tryCatch = require('../Functional/tryCatch')

const validateArgs = curry(
  (modelOrObj, funcName, args) => tryCatch(_throwIfArgsBad)(funcName, modelOrObj, args)
)

module.exports = validateArgs
