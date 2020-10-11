const router = require('koa-router')()

const index = require('./user')
const login = require('./login')

router
    .use(index)
    .use('/login', login)

module.exports = router.routes()