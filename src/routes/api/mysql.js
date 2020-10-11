const router = require('koa-router')()
const log = require('../../utils/log')
const mysql = require('../../db/mysql')

router
    .get('/', async ctx => {
        try {
            const sql = 'SELECT * FROM `students`'

            // const [rows, fielfs] = await mysql.promise().query(sql)
            // ctx.body = rows
            const data = await mysql.promise().query(sql)
            ctx.body = data
        } catch (error) {
            ctx.body = {
                code: 201,
                msg: '数据库查询出错'
            }
            mysql.end()
            log.logHandle(error)
        }
    })

module.exports = router.routes()