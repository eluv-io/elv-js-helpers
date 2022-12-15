const Err = require('../ADT/Err')
const Ok = require('../ADT/Ok')

const curry = require('../Functional/curry')

// validates that checkFn(value) is true
// returns Result
const validateWithFn = curry(
  (checkFn, errorMsgOrObj, value) => {
    try {
      if(checkFn){
        return Ok(value)
      } else {
        return Err([errorMsgOrObj])
      }
    } catch (e) {
      return Err([e])
    }
  }
)

module.exports = validateWithFn
