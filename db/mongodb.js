const mongoose = require('mongoose')
const CONF = require('./conf')
const log = require('../utils/log')
exports.types = mongoose.Schema.Types

mongoose.connect(`mongodb://${CONF.mongodb.HOST}:${CONF.mongodb.PORT}/${CONF.mongodb.DBNAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(_data => {
    console.log('mongodb数据库连接成功')
}).catch(err => {
    console.log('数据库连接失败')
    log.logHandle(err)
})

exports.mongoose = mongoose