const compose = require('crocks/helpers/compose')
const curry = require('crocks/helpers/curry')

const find = require('ramda/src/find')
const keys = require('ramda/src/keys')
const not = require('ramda/src/not')

const checkVsModel = require('../checkVsModel')

// failingKey :: ObjectModel -> Object -> String
// Iterates over object properties and returns first property name (key) where checkVsModel(keyModel) returns false
const _objBadKey = curry(
  (keyModel, obj) => find(
    compose(
      not,
      checkVsModel(keyModel)
    ),
    keys(obj)
  )
)

module.exports = _objBadKey

