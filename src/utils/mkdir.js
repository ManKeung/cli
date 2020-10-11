const fs = require('fs')

module.exports = (file) => {
    return new Promise((resolve, reject) => {
        fs.stat(file, {recursive: true}, (err, _stats) => {
            if (err) {
                fs.mkdirSync(file, {
                    recursive: true
                }, err => {
                    if (err) {
                        reject(`mkidr ${file} is error`)
                        return
                    }
                    resolve(file)
                })
                return
            }
            resolve(file)
        })
    })
}