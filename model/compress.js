const compress = require('koa-compress')

module.exports = () => {
    return compress({
        filter: (content_type) => { // 只有在请求的content-type中有gzip类型，我们才会考虑压缩，因为zlib是压缩成gzip类型的
            return /text/i.test(content_type);
        },
        threshold: 1024, // 阀值，当数据超过1kb的时候，可以压缩
        flush: require('zlib').Z_SYNC_FLUSH // zlib是node的压缩模块
    })
}

/*
// 使用
app.use((ctx, next) => {
    //ctx 代表响应 ctx.compress = trus 代表允许压缩
    ctx.compress = true
        ...
})
 */