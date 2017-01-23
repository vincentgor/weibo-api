/**
 * Created by jerry on 2017/1/20.
 */

'use strict';

const koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const JWT = require('koa-jwt');
const jwt = require('jsonwebtoken');

const access_token = require('./lib/oauth2/access_token');
const authorize = require('./lib/oauth2/authorize');

const app = koa();
const router = Router();
const oauth2Router = Router();

app.use(bodyParser());

app.use(oauth2Router.routes());
app.use(oauth2Router.allowedMethods());

/**
 * 引导用户跳转获取code
 */
oauth2Router.get('/authorize', function *(next){
    this.redirect(authorize.getAuthorizeUrl());
});

/**
 * 根据 code 获取 access_token
 */
oauth2Router.get('/access_token', function *(next){
    let code = this.query.code;
    let result = yield access_token(code, {});
    let ret_data = {
        access_token: result.body.access_token
    };
    this.body = {
        result: result,
        token: 'Bearer ' + jwt.sign(ret_data, 'jerry-koala')
    }
});

/**
 * jwt验证
 */
app.use(JWT({
    secret: 'jerry-koala'
}));

app.use(router.routes());
app.use(router.allowedMethods());

/**
 * 分发路由(需要jwt验证)
 */
require('./router')(router);

app.listen(3007, () => {
    console.log('微博服务已经启动，正在监听3007端口');
});
