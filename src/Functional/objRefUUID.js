const uuid = require('../Misc/uuid')

const uuidMap = new WeakMap()

const objRefUUID = object => {
  const objectUUID = uuidMap.get(object)
  if (objectUUID === undefined) {
    const newUUID = uuid()
    uuidMap.set(object, newUUID)
    return newUUID
  }

  return objectUUID
}

module.exports = objRefUUID
