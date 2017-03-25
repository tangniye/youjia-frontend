'use strict';

var restify = require('restify');
var resourceMixin = require('./utils/resourceMixin');
var security = require('./security');

var server = restify.createServer({
  name: 'mock-server',
  version: '1.0.0'

});

resourceMixin(server);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.use(restify.authorizationParser());


server.use(restify.dateParser());

server.use(restify.CORS());

server.pre(restify.pre.sanitizePath());

server.pre(function (req, res, next) {
  res.charSet('utf-8');
  res.cache({maxAge: 0});
  next();
});

server.pre(security.preFilter);

server.get('/v2/sidebar', security.sidebar);
server.post('/v2/auth/token', security.login);
server.post('/logout', security.logout);
server.post('/clients', security.createClient);
server.del('/clients/:id', security.removeClient);

server.get('/v2/ip/info/:id',security.dashSearchIp);

//server.post('/v2/role', security.roleadd);
//server.get('/v2/role', security.onerole);
////server.put('/v2/role', security.roleupdate);//更新没有方法
//server.del('/role/:id', security.roleremove);
//server.get('/v2/role/:id',security.roleMessage);
//server.get('/v2/roles',security.roles);
//server.get('/v2/role/1/rights', security.role);
////server.put('/v2/role/1/rights', security.rolerightupdate);//更新没有方法

require('./routers')(server);

server.listen(5050, function () {
  console.log('Mock server listening at %s', server.url);
});
