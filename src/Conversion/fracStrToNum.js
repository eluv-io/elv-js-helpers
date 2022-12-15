const fraction = require('./fraction')
const FractionStrModel = require('../Model/FractionStrModel')

// // ratStrToNumber :: String -> Number
// // Evaluates string as a rational number using fraction.js and converts to a number
// const ratStrToNumber = str => ratFromStr(str).valueOf()
const fracStrToNum = str => fraction(FractionStrModel(str)).valueOf()

module.exports = fracStrToNum
