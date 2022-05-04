const compose = require('crocks/helpers/compose')
const curry = require('crocks/helpers/curry')

const find = require('ramda/src/find')
const last = require('ramda/src/last')
const not = require('ramda/src/not')
const toPairs = require('ramda/src/toPairs')

const checkVsModel = require('../checkVsModel')


// failingValue :: ObjectModel -> Object -> [k, v] | undefined
// Iterates over object properties and returns first found value where checkVsModel(valueModel) is false
const _objBadVal = curry(
  (valueModel, obj) => find(
    compose(
      not,
      checkVsModel(valueModel),
      last
    ),
    toPairs(obj)
  )
)

module.exports = _objBadVal
