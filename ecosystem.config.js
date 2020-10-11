/*
 * @Description: pm2配置
 * @Author: Mankeung
 * @Date: 2020-09-22 16:37:04
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-22 16:37:36
 */
const { name } = require('./package.json');
const path = require('path');

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, './dist/index.js'),
      instances: require('os').cpus().length,
      autorestart: true,
      watch: true,
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    }
  ]
};