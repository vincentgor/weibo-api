/**
 * Created by jerry on 2017/1/20.
 */

'use strict';

module.exports.getAuthorizeUrl = function (code, options) {
    let client_id = '3056656716';
    let redirect_uri = 'http://weibo.vinxent.com/access_token';
    let url = `https://api.weibo.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`;
    return url;
};