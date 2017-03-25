var users = require('./resources/users');
var userlist = require('./resources/userlist');
var sidebar = require('./resources/sidebar');
var tokens = require('./utils/tokens');
var map = require('./resources/map');
var email = require('./resources/email');

//威胁情报
var dashSearchIp = require('./resources/dashSearchIp');
var _ = require('lodash');
var roles = {
    zhangsan: ['ROLE_Admin', 'Guest'],
    lisi: 'ROLE_Admin'
};
var permissions = {
    ROLE_Admin: ['GET /users/?.*', 'ALL /users/?.*', 'GET /readers'],
    Guest: 'GET /readers/.*'
};

var needAuthorize = function (req) {
    return tokens.lookup(req.header.access_token);
};

var isAccessible = function (req) {
    return true;
};

module.exports = {
    preFilter: function (req, res, next) {

        if (needAuthorize(req)) {
            res.writeHead(401, {
                'Content-Type': 'text/plain;charset=utf-8'
            });
            return res.end('请先登录');
        }

        if (!isAccessible(req)) {

            res.writeHead(403, {
                'Content-Type': 'text/plain;charset=utf-8'
            });
            return res.end('没有权限访问此地址555');
        }
        next();
    },
    sidebar: function (req, res) {
        res.send(200, sidebar);
    },
    map: function (req, res) {
        res.send(200, map);
    },

    login: function (req, res) {
        console.log(5623)

        var user = _.findWhere(users, {username: req.body.username, password: req.body.password});

        var token = tokens.add(user);
        res.send(201, {accessToken: token, roleid: "16469ED0980E03B98E8011A818B053C5"});
    },
    token: function (req, res) {
        res.send(200);
    },
    logout: function (req, res) {
        tokens.remove(req.headers.authorization.access_token);
        res.send(204);
    },
    createClient: function (req, res) {
        var user = _.findWhere(users, {username: req.body.username, password: req.body.password});
        var token = tokens.add(user);
        res.send(201, {accessToken: token});
    },
    removeClient: function (req, res) {
        tokens.remove(req.headers.authorization.access_token);
        res.send(204);
    },

    users: function (req, res) {
        res.send(200, userlist);
    },
    messages: function (req, res) {
        res.send(200, messages);
    },
    message: function (req, res) {
        res.send(200, messages.data[0]);
    },
    license: function (req, res) {
        res.send(200, license);
    },
    network: function (req, res) {
        res.send(200, network)
    },
    email: function (req, res) {
        res.send(200, email)
    },
    disk: function (req, res) {
        res.send(200, disk)
    },
    syslog: function (req, res) {
        res.send(200, syslog)
    },
    cpu: function (req, res) {
        var data = {"data": 30};
        res.send(200, data);
    },
    memory: function (req, res) {
        var data = {"data": 40};
        res.send(200, data);
    },
    networks: function (req, res) {
        res.send(200, networks);
    },

    dashSearchIp:function(req,res){
        res.send(200, dashSearchIp);
    }
};
