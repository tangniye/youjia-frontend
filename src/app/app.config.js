'use strict';

var urlConfig = window.urlConfig || {};

urlConfig.API_ROOT = '/situaware/v1';

// 获取老师列表
urlConfig.STAFF_LIST = '/api/account/teachers';
urlConfig.AVATAR = '/api/account/photo';
urlConfig.PROFILE = '/api/account/profile';

window.urlConfig = urlConfig;
