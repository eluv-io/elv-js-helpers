'use strict'
// Version of swapFields without validation, works on 'normal' values rather than ADTs

const assoc = require('@eluvio/ramda-fork/src/assoc')

const curry = require('./curry')

const _swapFields = curry (
  (fieldName1, fieldName2, obj) => assoc(
    fieldName1,
    obj[fieldName2],
    assoc(
      fieldName2,
      obj[fieldName1],
      obj
    )
  )
)

module.exports = _swapFields
