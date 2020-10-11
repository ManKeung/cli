const Redis = require('ioredis')
const CONF = require('./conf')

const redis = {
    port: CONF.redis.PORT,
    host: CONF.redis.HOST,
    family: CONF.redis.FAMILY,
    db: CONF.redis.DBNAME
}

module.exports = new Redis(redis)