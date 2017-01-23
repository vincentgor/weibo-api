/**
 * Created by jerry on 2017/1/20.
 */

'use strict';

const config = require('config');

module.exports.getAuthorizeUrl = function (code, options) {
    let client_id = config.auth.client_id;
    let redirect_uri = config.auth.redirect_uri;
    let url = `${config.auth.authorize}?client_id=${client_id}&redirect_uri=${redirect_uri}`;
    return url;
};