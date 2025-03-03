'use strict'
const Err = require('../ADT/Err')
const Ok = require('../ADT/Ok')

const curry = require('../Functional/curry')

// validates that propName is valid for obj
// returns Result
const validatePropName = curry(
  (obj, propName) => Object.hasOwn(obj, propName) ? Ok(propName) : Err([`property "${propName}" not found`])
)

module.exports = validatePropName
