const utils = require('../utils')

module.exports = (env = 'development') => {
  return env === 'development' ? [{
    loader: 'file-loader',
    options: {
      name: '[name].[hash:5].[ext]',
      outputPath: utils.assetsPath('image'),
      esModule: false
    }
  }] : [
    {
      loader: 'url-loader',
      options: {
        name: '[name].[hash:5].[ext]',
        limit: 1 * 1024,
        outputPath: utils.assetsPath('image'),
        esModule: false
      }
    },
    // windows 安装有问题
    // {
    //   loader: 'image-webpack-loader',
    //   options: {
    //     mozjpeg: {
    //       progressive: true,
    //       quality: 65
    //     },
    //     // optipng.enabled: false will disable optipng
    //     optipng: {
    //       enabled: false,
    //     },
    //     pngquant: {
    //       quality: [0.65, 0.90],
    //       speed: 4
    //     },
    //     gifsicle: {
    //       interlaced: false,
    //     },
    //     // the webp option will enable WEBP
    //     webp: {
    //       quality: 75
    //     }
    //   }
    // }
  ]
}
