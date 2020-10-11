const router = require('koa-router')()

router
    .get('/', async ctx => {
        ctx.session.username = 'mankeung'
        ctx.body = '首页'
    })
    .get('/name', async ctx => {
        ctx.body = ctx.session.username
    })

module.exports = router.routes()