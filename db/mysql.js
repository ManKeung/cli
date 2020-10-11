const mysql = require('mysql2')
const CONF = require('./conf')

const pool = mysql.createPool({
    host: CONF.mysql.HOST,
    user: CONF.mysql.USER,
    password: CONF.mysql.PASSWORD,
    database: CONF.mysql.DBNAME,
    charset: CONF.mysql.CHARSET
})


module.exports = pool