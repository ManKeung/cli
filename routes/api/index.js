const router = require('koa-router')()

const mongo = require('./mongodb')
const redis = require('./redis')
const mysql = require('./mysql')

router
    .use('/mongo', mongo)
    .use('/redis', redis)
    .use('/mysql', mysql)

module.exports = router.routes()