const router = require('koa-router')()

router
    .get('/', async ctx => {
        ctx.body = '登录页'
    })

module.exports = router.routes()