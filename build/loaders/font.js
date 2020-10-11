const utils = require('../utils')

module.exports = (env = 'development') => {
  return env === 'development' ? [{
    loader: 'file-loader',
    options: {
      name: '[name].[hash:5].[ext]',
      outputPath: utils.assetsPath('font')
    }
  }] : [{
    loader: 'url-loader',
    options: {
      name: '[name].[hash:5].[ext]',
      limit: 1 * 1024,
      outputPath: utils.assetsPath('font')
    }
  }]
}
