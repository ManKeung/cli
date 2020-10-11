const session = require('koa-session')

// 配置session
module.exports = app => {
    app.keys = ['some secret hurr']
    const CONFIG = {
        key: 'koa:sess',
        maxAge: 1000 * 60 * 30,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: true, // 每次请求设置session
        renew: false
    }
    return session(app, CONFIG)
}