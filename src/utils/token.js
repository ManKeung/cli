const jwt = require('jsonwebtoken')
const CONF = require('../config')

exports.getToken = (data, time = null) => {
    let conf = {}
    conf.data = data
    if (time !== null && (typeof time === 'number' )) {
        conf.exp = Math.floor(Date.now() / 1000) + time
    }

    return new Promise((resolve, reject) => {
        let obj = {}
        jwt.sign(conf, CONF.pubKey, (err, token) => {
            if (err) {
                obj.code = CONF.code.TOKENERR
                obj.msg = err
                reject(obj)
                return
            }

            if (token === undefined) {
                obj.code = CONF.code.TOKENERR
                obj.msg = 'Token generation error!'
                reject(obj)
                return
            }

            obj.code = CONF.code.OK
            obj.msg = token
            resolve(obj)
        })
    })
}

exports.deToken = token => {
    return new Promise((resolve, reject) => {
        let obj = {}
        jwt.verify(token, CONF.pubKey, (err, deToken) => {
            if (err) {
                obj.code = CONF.code.TOKENERR
                obj.msg = err
                reject(obj)
                return
            }

            if (deToken === undefined) {
                obj.code = CONF.code.EXPTOKEN
                obj.msg = 'Token expired!'
                resolve(obj)
                return
            }

            obj.code = CONF.code.OK
            obj.msg = deToken
            resolve(obj)
        })
    })
}

exports

/*
生成秘钥 ssh-keygen -t rsa
fdipzone@ubuntu:~$ ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/home/fdipzone/.ssh/id_rsa): 这里输入要生成的文件名
Enter passphrase (empty for no passphrase):                       这里输入密码 
Enter same passphrase again:                                      这里重复输入密码
Your identification has been saved in /home/fdipzone/.ssh/id_rsa.
Your public key has been saved in /home/fdipzone/.ssh/id_rsa.pub.
The key fingerprint is:
f2:76:c3:6b:26:10:14:fc:43:e0:0c:4d:51:c9:a2:b0 fdipzone@ubuntu
The key's randomart image is:
+--[ RSA 2048]----+
|    .+=*..       |
|  .  += +        |
|   o oo+         |
|  E . . o        |
|      ..S.       |
|      .o .       |
|       .o +      |
|       ...oo     |
|         +.      |
+-----------------+
*/