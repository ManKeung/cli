const render = require('koa-art-template')
const path = require('path')

// 配置模板引擎
module.exports = app => {
    return render(app, {
        root: path.join(__dirname, '../views'),
        extname: '.html',
        debug: process.env.NODE_ENV !== 'production',
        dateFormat: dateFormat = (value) => {
            return sd.format(new Date(value), 'YYYY-MM-DD HH:mm')
        }
    })
}