const router = require('koa-router')()
const koaRequest = require('koa2-request')
const CONF = require('../../config')

router
    .get('/', async ctx => {
        const query = ctx.request.query
        let msg = query.msg
        // let chat = CONF.chat[0]
        // chat.qs.msg = msg
        let chat = CONF.chat[1]
        chat.qs.question = msg
        const res = await koaRequest({
            url: chat.url,
            method: 'get',
            qs: chat.qs
        })
        let info = ''
        if (msg.indexOf('笑话') != -1) {
            let json = eval('(' + res.body + ')')
            info += json.title
            info += json.content
        } else if (msg.indexOf('观音灵签') != -1) {
            let json = eval('(' + res.body + ')')
            info = `${json.haohua}，签语：${json.qianyu}诗意签语：${json.shiyi}解签：${json.jieqian}`
        } else if (msg.indexOf('月老灵签') != -1) {
            let json = eval('(' + res.body + ')')
            info = `${json.haohua}，诗意签语：${json.shiyi}解签：${json.jieqian}白话：${json.baihua}`
        } else if (msg.indexOf('财神爷灵签') != -1) {
            let json = eval('(' + res.body + ')')
            info = `签语：${json.qianyu}解签：${json.jieqian}解说：${json.jieshuo}`
        } else {
            info = res.body
        }
        ctx.status = CONF.code.OK
        ctx.body = {
            code: CONF.code.OK,
            // msg: JSON.parse(res.body).content
            msg: info,
            old: res.body
        }
    })

module.exports = router.routes()