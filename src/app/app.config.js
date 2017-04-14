'use strict';

var urlConfig = window.urlConfig || {};

urlConfig.API_ROOT = '/situaware/v1';

//登录 验证 修改密码
urlConfig.IS_LOGIN = '/api/account/is_login';
urlConfig.LOGIN = '/api/account/login';
urlConfig.LOGOUT = '/api/account/logout';
urlConfig.VERIFY = '/api/account/verify';
urlConfig.RESET_PASSWORD = '/api/account/reset_password';

// 获取老师列表
urlConfig.STAFF_LIST = '/api/account/teachers';
urlConfig.AVATAR = '/api/account/photo';
urlConfig.PROFILE = '/api/account/profile';

window.urlConfig = urlConfig;
