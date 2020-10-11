/*
 * @Description: index
 * @Author: Mankeung
 * @Date: 2020-09-22 16:38:55
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-22 17:05:40
 */
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import AppRoutes from './routers';

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

// 路由
AppRoutes.forEach(route => router[route.method](route.path, route.action));

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);

console.log(`应用启动成功 端口:${port}`);