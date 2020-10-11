const router = require('koa-router')()
const log = require('../../utils/log')
const UserModel = require('../../mongodb/user')

router
    .get('/', async ctx => {
        try {
            const data = await UserModel.find()
            ctx.body = data
        } catch (error) {
            ctx.body = {
                code: 201,
                msg: '数据库查询出错'
            }
            log.logHandle(error)
        }
    })

module.exports = router.routes()