const λ = require('apex.js')
const notify = require('./notify')

exports.handle = λ(async event => {
  await notify(event)
  return { success: true }
})
