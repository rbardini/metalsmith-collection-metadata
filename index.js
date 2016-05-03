var assign = require('object-assign')
var toFunction = require('to-function')

module.exports = function plugin (opts) {
  return function (files, metalsmith, done) {
    var metadata = metalsmith.metadata()

    var complete = Object.keys(opts).every(function (name) {
      var collection

      try {
        collection = toFunction(name)(metadata)
      } catch (err) {}

      if (!collection) {
        done(new TypeError('Collection `' + name + '` not found'))
        return false
      }

      collection.forEach(function (file) {
        assign(file, opts[name])
      })

      return true
    })

    return complete && done()
  }
}
