const router = require('koa-router')()

// 引入子路由
const index = require('./defalut')
const user = require('./user')
const html = require('./html')
// const api = require('./api')
const chat = require('./chat')
const code = require('./code')
const qr = require('./qr')

// 路由配置
router
    .use(index)
    .use('/user', user)
    .use('/html', html)
    // .use('/api', api)
    .use('/chat', chat)
    .use('/code', code)
    .use('/qr', qr)

module.exports = router