/**
 * Created by jerry on 2017/1/20.
 */

'use strict';

const Promise = require('bluebird');
const request = require('request');
const config = require('config');

Promise.promisifyAll(request);

module.exports = function (code, options) {
    return request.postAsync(config.auth.access_token_uri, {
        form: {
            client_id: options.client_id || config.auth.client_id,
            client_secret: options.client_secret || config.auth.client_secret,
            grant_type: options.grant_type || config.auth.grant_type,
            code: code,
            redirect_uri: options.redirect_uri || config.auth.redirect_uri,
        }
    }).tap((result) => {
        result.body = JSON.parse(result.body);
    });
};