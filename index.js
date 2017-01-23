/**
 * Created by jerry on 2017/1/20.
 */

'use strict';

const koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = koa();
const router = Router();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const access_token = require('./lib/oauth2/access_token');
const authorize = require('./lib/oauth2/authorize');

/**
 * 分发路由
 */
require('./router')(router);

/**
 * 根据 code 获取 access_token
 */
router.get('/access_token', function *(next){
    let code = this.query.code;
    this.body = yield access_token(code, {});
});

/**
 * 引导用户跳转获取code
 */
router.get('/authorize', function *(next){
    this.redirect(authorize.getAuthorizeUrl());
});

app.listen(3007, () => {
    console.log('微博服务已经启动，正在监听3007端口');
});
