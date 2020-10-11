// 引入模块
const Koa = require('koa')
const static = require('koa-static')
const jsonp = require('koa-jsonp')
const bodyParser = require('koa-bodyparser')
const koaJWT = require('koa-jwt')
const IO = require('koa-socket')
const helmet = require('koa-helmet')

const session = require('./model/session')
const cors = require('./model/cors')
const render = require('./model/render')
const logs = require('./model/reslog')
const compress = require('./model/compress')
const CONF = require('./config')
const err = require('./utils/err')
const router = require('./routes')
const socketFn = require('./socket')

// 实例化
const app = new Koa()
const io = new IO()
io.attach(app)

// 提高安全
app.use(helmet())

// 压缩
app.use(compress())

// logger
app.use((ctx, next) => logs(ctx, next))

// 配置后台允许跨域 允许跨域安全性如何解决 签名验证
app.use(cors)

// 配置jsonp的中间件
app.use(jsonp())

// 配置post提交数据的中间件
app.use(bodyParser())

// 权限验证
app.use(err)
app.use(koaJWT({secret: CONF.pubKey}).unless({path: CONF.unless}))

// 配置静态资源中间件
app
    // .use(static('.')) // 不安全 根目录
    .use(static(__dirname + `/${CONF.server.static}`))

// 配置session
app.use(session(app))

// 配置模板引擎
render(app)

// socket
app._io.on('connection', socket => socketFn(socket))

app
    .use(router.routes()) // 启动路由
    .use(router.allowedMethods())
    .listen(CONF.server.port, () => {
        console.log(`环境: ${process.env.NODE_ENV}`)
        console.log(`Server running on http://localhost: ${CONF.server.port}`)
    })