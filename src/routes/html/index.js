const router = require('koa-router')()

router
    .get('/', async ctx => {
        let list = {
            name: 'Mankeung',
            h: '<h2>这是一个h2</h2>',
            num: 20,
            arr: [111, 222, 333]
        }

        await ctx.render('index', {
            list
        })
    })

module.exports = router.routes()