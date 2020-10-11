const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

const CONF = require('../config')
const EMAIL = CONF.email.QQ

const transport = nodemailer.createTransport(smtpTransport({
    host: EMAIL.HOST, // qq邮箱主机
    secure: EMAIL.SSL, // 使用 SSL
    secureConnection: EMAIL.SSL, // 使用 SSL
    port: EMAIL.PORT, // SMTP 端口
    auth: {
        user: EMAIL.EMAIL, // 账号   你自定义的域名邮箱账号
        pass: EMAIL.PASSWORD // 密码   你自己开启SMPT获取的密码
    }
}))

module.exports = (to, subject = '', text = '', html = '') => {
    transport.sendMail({
        from: `Mankeung <${EMAIL.EMAIL}>`,  //发送方
        to, //接收方
        subject, //内容
        text,
        html
        // attachments: [{
        //     filename: 'content',
        //     content: '发送内容'
        // }, {
        //     filename: 'index.html',
        //     path: './public/index.html'
        // }]
    }, function (error, response) {
        if (error) {
            console.log(error);
            return
        }
    })
}