const router = require('koa-router')()
const {qr_img, qrcode, barcode} = require('../../utils/qr')


router
    .get('/', async ctx => {
        ctx.body = qrcode('Im is mankeung')
    })
    .get('/bar', async ctx => {
        ctx.body = barcode('1234569852456')
    })
    .get('/png', async ctx => {
        const qr_png = qr_img('https://www.baidu.com')
        ctx.body = qr_png
    })

module.exports = router.routes()