
// use 'await seconds(n);' to pause program execution
const pause = seconds => new Promise(resolve => setTimeout(resolve, Math.round(seconds * 1000.0)))

module.exports = pause
