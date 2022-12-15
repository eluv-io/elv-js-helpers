const isEmpty = require('./isEmpty')

const negate = require('../Functional/negate')

const isNotEmpty = negate(isEmpty)

module.exports = isNotEmpty
