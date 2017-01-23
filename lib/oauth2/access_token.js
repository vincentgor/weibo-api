/**
 * Created by jerry on 2017/1/20.
 */

'use strict';

const Promise = require('bluebird');
const request = require('request');

Promise.promisifyAll(request);

module.exports = function (code, options) {
    return request.postAsync('https://api.weibo.com/oauth2/access_token', {
        form: {
            client_id: options.client_id || '3056656716',
            client_secret: options.client_secret || 'ff539b28beee4834743e928aef3df31a',
            grant_type: options.grant_type || 'authorization_code',
            code: code,
            redirect_uri: options.redirect_uri || 'http://weibo.vinxent.com',
        }
    }).then((res) => {
        return JSON.stringify(res);
    });
};