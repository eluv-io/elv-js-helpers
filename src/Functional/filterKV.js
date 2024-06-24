const curry = require('./curry')
const filter = require('./filter')
const pipe = require('./pipe')

const fromPairs = require('../Conversion/fromPairs')
const toPairs = require('../Conversion/toPairs')

const filterKV = curry(
  (filterFn, obj) => pipe(
    toPairs,
    filter(filterFn),
    fromPairs
  )(obj)
)

module.exports = filterKV
