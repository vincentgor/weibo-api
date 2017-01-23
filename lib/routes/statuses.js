/**
 * Created by duoyi on 2017/1/23.
 */

const statuses = require('../controllers/statuses');

module.exports = function (router) {
    router.get('*', statuses.friends_timeline);
}