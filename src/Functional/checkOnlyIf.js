const not = require('crocks/logic/not')
const or = require('crocks/logic/or')

const curry = require('../Functional/curry')

const checkOnlyIf = curry(
  (preCheck, mainCheck) => or(not(preCheck), mainCheck)
)

module.exports = checkOnlyIf
