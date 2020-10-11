const router = require('koa-router')()
const upload = require('../../utils/multer')

router
    .get('/', async ctx => {
        ctx.body = 'user首页'
    })
    .get('/info', async ctx => {
        ctx.body = '用户信息'
    })
    .post('/test', async ctx => {
        ctx.body = 'test'
    })
    .post('/file', upload().single('file'), async (ctx, next) => {

        ctx.body = {
            code: 1,
            data: ctx.file
        }
    })

module.exports = router.routes()