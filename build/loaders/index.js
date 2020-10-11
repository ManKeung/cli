const path = require('path')
const script = require('./srcpit')
const style = require('./style')
const font = require('./font')
const img = require('./img')

function resolve (dir) {
  return path.join(__dirname, '..', '..', dir)
}

const SRC = resolve('src')
const EXC = /node_modules/

module.exports = (env = 'development') => {
  return [
    {
      test: /\.js$/,
      use: script(env),
      include: [SRC],
      exclude: EXC
    },
    {
      test: /\.css$/,
      use: style(env).css,
      include: [SRC],
      exclude: EXC
    },
    {
      test: /\.less$/,
      use: style(env).less,
      include: [SRC],
      exclude: EXC
    },
    {
      test: /\.scss$/,
      use: style(env).scss,
      include: [SRC],
      exclude: EXC
    },
    {
      test: /\.(eot|woff2?|ttf|svg)$/,
      use: font(env),
      include: [SRC],
      exclude: EXC
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: img(env),
      include: [SRC],
      exclude: EXC
    }
  ]
}