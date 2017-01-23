/**
 * Created by jerry on 2017/1/23.
 */

'use strict';

const utils = {};

utils.getFileNameFromFileStr = function (fileStr) {
    return fileStr.substr(0, fileStr.indexOf('.'));
};

module.exports = utils;