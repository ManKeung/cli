const fs = require('fs')

const pubKey = fs.readFileSync(__dirname + '/id_rsa.pub')

module.exports = {
    server: {
        port: 3000,
        static: 'public/static'
    },
    code: {
        OK: 200, // 成功
        TOKENERR: 401, // token出错
        EXPTOKEN: 150 // token过期
    },
    unless: [
        '/',
        '/favicon.ico',
        /^\/html*/,
        /^\/images*/,
        /^\/js*/,
        /^\/css*/,
        /^\/api*/,
        /^\/chat*/,
        /^\/code*/,
        /^\/qr*/,
        /^\/user*/,
        /^\/socket\.io*/
        // '/name'
    ],
    pubKey,
    chat: [
        { // 青云
            url: 'http://api.qingyunke.com/api.php',
            qs: {
                key: 'free',
                appid: 0
            }
        },
        { // itpk
            url: 'http://i.itpk.cn/api.php',
            qs: {
                api_key: '',
                api_secret: ''
            }
        }
    ],
    email: {
        QQ: {
            HOST: 'smtp.qq.com',
            PORT: 465,
            EMAIL: '',
            PASSWORD: '',
            SSL: true
        },
        WY: {
            HOST: 'smtp.163.com',
            PORT: 25,
            EMAIL: '',
            PASSWORD: '',
            SSL: false
        }
    }
}