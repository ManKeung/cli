'use strict';

const path = require('path');
const ts = require('./ts');
const img = require('./img');
const font = require('./font');
const style = require('./style');

// 路劲方法 dir [String = ''] 路径 defalut
function resolve(dir = '') {
  return path.join(__dirname, '..', '..', dir);
}

const SRC = resolve('src');
const EXC = /node_modules/;

module.exports = (env = 'development') => {
  return [
    {
      test: /\.tsx?$/,
      use: ts(env),
      include: [SRC],
      exclude: EXC
    },
    {
      test: /\.css$/,
      use: style(env).css,
      include: [SRC],
      exclude: EXC
    }, {
      test: /\.less$/,
      use: style(env).less,
      include: [SRC],
      exclude: EXC
    }, {
      test: /\.scss$/,
      use: style(env).scss,
      include: [SRC],
      exclude: EXC
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: img(env),
      include: [SRC],
      exclude: EXC
    },
    {
      test: /\.(eot|woff2?|ttf|svg)$/,
      use: font(env),
      include: [SRC],
      exclude: EXC
    },
  ];
}