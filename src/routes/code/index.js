const router = require('koa-router')()
const {letterCode, mathCode} = require('../../utils/svgcode')

router
    .get('/', async ctx => {
        const { txt, img } = letterCode()
        console.log(txt)
        ctx.body = img
    })
    .get('/math', async ctx => {
        const { txt, img } = mathCode()
        console.log(txt)
        ctx.body = img
    })

module.exports = router.routes()