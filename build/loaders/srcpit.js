module.exports = (env = 'development') => {
  return env !== 'development' ? ['babel-loader?cacheDirectory=true'] : ['babel-loader?cacheDirectory=true']
}