const url = require('url')

module.exports = socket => {
    console.log('建立连接了')

    let roomid = url.parse(socket.request.url, true).query.roomid // 获取房间号/ 获取桌号
    // console.log(roomid)
    socket.join(roomid) // 加入房间/加入分组

    socket.on('addCart', function (data) {
        console.log(data)
        // socket.emit('serverEmit','我接收到增加购物车的事件了')  // 发给指定用户
        // app._io.emit('serverEmit','我接收到增加购物车的事件了')  // 广播
        // app._io.to(roomid).emit('serverEmit','我接收到增加购物车的事件了')
        socket.broadcast.to(roomid).emit('serverEmit', '我接收到增加购物车的事件了')
    })
}
