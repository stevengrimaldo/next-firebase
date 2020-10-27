const path = require('path')

module.exports = {
  webpack: (config, _) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve('./client/components'),
      '@data': path.resolve('./client/data'),
      '@global': path.resolve('./client/global'),
      '@layouts': path.resolve('./client/layouts'),
      '@pages': path.resolve('./client/pages'),
    }
    return config
  },
}
