const uniq = require('../Functional/uniq')

const hasNoDuplicates = arr => uniq(arr).length === arr.length

module.exports = hasNoDuplicates
