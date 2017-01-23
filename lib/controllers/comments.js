/**
 * Created by jerry on 2017/1/23.
 */

'use strict';
const Promise = require('bluebird');
const request = require('request');
const _ = require('lodash');
const config = require('config');

const requestAsync = Promise.promisify(request);


class Jerry {

    constructor () { }

    *friends_timeline (next) {
        let access_token = this.query.access_token || this.state.user.access_token;
        let api = this.params[0];
        this.body = yield requestAsync({
            method: this.method,
            uri: `${config.url.comments}${api}.json`,
            body: _.merge(this.request.body, {access_token}),
            qs: _.merge(this.query, {access_token}),
            json: true
        }).then((res) => {
            return res.body;
        });
    }

}

module.exports = new Jerry();