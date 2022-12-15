// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping

const escapeForRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string

module.exports = escapeForRegExp
