/**
 * Created by duoyi on 2017/1/23.
 */

const comments = require('../controllers/comments');

module.exports = function (router) {
    router.get('*', comments.friends_timeline);
}