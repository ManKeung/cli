'use strict';

module.exports = (env = 'development') => {
  return env !== 'development' ? [{
    loader: 'ts-loader',
    options: {
      transpileOnly: true
    }
  }] : [{
    loader: 'ts-loader',
    options: {
      transpileOnly: true
    }
  }];
}