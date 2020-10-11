const cors = require('koa2-cors')

// 配置后台允许跨域 允许跨域安全性如何解决 签名验证
module.exports = cors({
    origin: (ctx) => {
        if (ctx.url === '/test') {
            // 只允许 http://localhost:8080 这个域名的请求了
            return 'http://localhost:8080'
        }

        // 允许所有域名请求
        return '*'
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['OPTIONS', 'GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
})