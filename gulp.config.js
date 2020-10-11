const baseConfig = {
  // 路径映射
  paths: {
    // 源码目录
    src: './src',
    assets: './src/public/assets',
    app: './src/public/assets/app',
    components: './src/public/assets/components',
    lib: './src/public/assets/lib',
    sass: './src/public/assets/sass',
    images: './src/public/assets/images',
    nm: './src/node_modules',
    // src: path.resolve(__dirname, './src'),
    // assets: path.resolve(__dirname, './src/public/assets'),
    // app: path.resolve(__dirname, './src/public/assets/app'),
    // components: path.resolve(__dirname, './src/public/assets/components'),
    // lib: path.resolve(__dirname, './src/public/assets/lib'),
    // sass: path.resolve(__dirname, './src/public/assets/sass'),
    // images: path.resolve(__dirname, './src/public/assets/images'),
    // nm: path.resolve(__dirname, './src/node_modules'),

    // 开发目录（未经压缩优化的静态资源）
    /**
     * 注意，在这里，staticWebpackJs的路径中不需要指定/js的原因是：
     * webpack.config中已经对入口模块进行了js/前缀命名，所以在输出脚本时，会自动生成一个名为js的文件夹
     */
    staticWebpackJs: './src/public/static',
    static: './src/public/static',
    staticJs: './src/public/static/scripts',
    staticLib: './src/public/static/lib',
    staticStyle: './src/public/static/css',
    staticImgs: './src/public/static/images',
    // staticWebpackJs: path.resolve(__dirname, './src/public/static'),
    // static: path.resolve(__dirname, './src/public/static'),
    // staticJs: path.resolve(__dirname, './src/public/static/scripts'),
    // staticLib: path.resolve(__dirname, './src/public/static/lib'),
    // staticStyle: path.resolve(__dirname, './src/public/static/css'),
    // staticImgs: path.resolve(__dirname, './src/public/static/images'),

    // 发布目录（经压缩优化后的静态资源）
    dist: 'dist'
    // dist: path.resolve(__dirname, 'dist')
  },
  proxyOptions: {}
}

module.exports = baseConfig