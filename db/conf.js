module.exports = {
    mongodb: {
        HOST: 'localhost',
        PORT: 27017,
        DBNAME: 'mktest'
    },
    mysql: {
        HOST: 'localhost',
        USER: 'root',
        PASSWORD: '123456',
        DBNAME: 'mktest',
        CHARSET: 'utf8'
    },
    redis: {
        HOST: 'localhost',
        PORT: 6379,
        FAMILY: 4,
        DBNAME: 0, // 0 - 15
    }
}