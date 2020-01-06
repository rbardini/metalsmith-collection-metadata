const assign = require('object-assign')
const toFunction = require('to-function')

module.exports = (opts) =>
  (_files, metalsmith, done) => {
    const metadata = metalsmith.metadata()

    const complete = Object.keys(opts).every(name => {
      let collection

      try {
        collection = toFunction(`collections.${name}`)(metadata)
      } catch (err) {}

      if (!collection) {
        done(new TypeError(`Collection \`${name}\` not found`))
        return false
      }

      collection.forEach(file => {
        assign(file, opts[name])
      })

      return true
    })

    return complete && done()
  }
