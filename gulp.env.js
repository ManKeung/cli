const argv = require('minimist')
const config = require('./gulp.config')

const options = argv(process.argv.slice(2))

const envConf = {
  dev: {
    ENV: 'dev',
    APP_HOST: '',
    APP_CDN_HOST: '',
    APP_VERSION: ''
  },
  test: {
    ENV: 'test',
    APP_HOST: '//t.mankeung.com',
    APP_CDN_HOST: '//t.mankeung.com',
    APP_VERSION: '1.0.0'
  },
  prod: {
    ENV: 'prod',
    APP_HOST: '//mankeung.com',
    APP_CDN_HOST: '//mankeung.com',
    APP_VERSION: '1.0.0'
  }
}

let conf = null

if (options.test) {
  conf = {
    ...config,
    ...envConf.test
  }
} else if (options.prod) {
  conf = {
    ...config,
    ...envConf.prod
  }
} else {
  conf = {
    ...config,
    ...envConf.dev
  }
}

module.exports = conf