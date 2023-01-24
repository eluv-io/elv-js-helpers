const ReaderT = require('crocks/Reader/ReaderT')

const Async = require('./Async')

const ReaderAsync = ReaderT(Async)

module.exports = ReaderAsync


