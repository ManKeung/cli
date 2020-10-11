module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      '/apis': {
        // 测试环境
        target: 'http://localhost:3000',
        // target: '172.168.1.27:8000',
        pathRewrite: {
          '^/apis': ''
        }, // 需要rewrite重写的
        secure: false,
        changeOrigin: true
      }
    }
  }
}
