const IS_BARE = !!global.Bare
if (IS_BARE) {
  module.exports = require('./index.bare')
} else {
  module.exports = require('./index.node')
}
