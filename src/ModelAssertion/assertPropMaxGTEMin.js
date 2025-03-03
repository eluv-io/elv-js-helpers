'use strict'
const isNil = require('../Boolean/isNil')

const assertPropRel = require('./assertPropRel')

const compare = require('../Functional/compare')

const assertPropMaxGTEMin = (propNamePrefix, comparatorFn = compare) => assertPropRel(
  (p1, p2) => isNil(p1) || isNil(p2) || comparatorFn(p2, p1) === 1,
  'must be greater than or equal to',
  `${propNamePrefix}Max`,
  `${propNamePrefix}Min`,
)

module.exports = assertPropMaxGTEMin
