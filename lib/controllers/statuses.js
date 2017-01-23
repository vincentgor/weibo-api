/**
 * Created by jerry on 2017/1/23.
 */

'use strict';
const Promise = require('bluebird');
const request = require('request');
const _ = require('lodash');

const requestAsync = Promise.promisify(request);


class Jerry {

    constructor () { }

    *friends_timeline (next) {
        let access_token = this.query.access_token;
        let api = this.params[0];
        this.body = yield requestAsync({
            method: this.method,
            uri: `https://api.weibo.com/2/statuses${api}.json`,
            body: _.merge(this.request.body, {access_token}),
            qs: _.merge(this.query, {access_token}),
            json: true
        }).then((res) => {
            return res.body;
        });
    }

}

module.exports = new Jerry();