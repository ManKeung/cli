const svgCaptcha = require('svg-captcha')

exports.letterCode = () => {
    let captcha = svgCaptcha.create({
        inverse: false, // 翻转颜色
        fontSize: 48, // 字体大小
        noise: 8, // 噪声线条数
        width: 100, // 宽度
        height: 40, // 高度
        size: 4, // 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        background: '#e8e3e3'
    })

    return {
        txt: captcha.text.toLowerCase(), // 忽略大小写
        img: captcha.data
    }
}

exports.mathCode = () => {
    let captcha = svgCaptcha.createMathExpr({
        inverse: true, // 翻转颜色
        fontSize: 48, // 字体大小
        noise: 8, // 噪声线条数
        width: 100, // 宽度
        height: 40, // 高度
        size: 4, // 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
        background: '#e8e3e3' // 验证码图片背景颜色
    })

    return {
        txt: captcha.text.toLowerCase(),
        img: captcha.data
    }
}