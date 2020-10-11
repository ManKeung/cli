//上传图片的模块
const multer = require('@koa/multer')
const path = require('path')

module.exports = () => {
    const filename = path.join(__dirname, '../static/upload')
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, filename)
        },
        filename: (req, file, cb) => {
            let fileFormat = (file.originalname).split('.') // 获取后缀名  分割数组
            cb(null, `${file.fieldname}_${Date.now().toString(16)}.${fileFormat[fileFormat.length - 1]}`)
        }
    })

    // 文件上传限制
    const limits = {
        fields: 10, // 非文件字段的数量
        fileSize: 500 * 1024, // 文件大小 单位 b
        files: 1 // 文件数量
    }

    return multer({
        storage,
        limits
    })
}