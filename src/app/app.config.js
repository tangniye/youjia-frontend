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
urlConfig.TEACHER_LIST = '/api/account/teachers';
// 添加老师
urlConfig.ADD_TEACHER = '/api/account/add_teacher';

//获取学生列表
urlConfig.STUDENT_LIST = '/api/account/students';
//添加学生
urlConfig.ADD_STUDENT = '/api/account/add_student';

//用户头像
urlConfig.AVATAR = '/api/account/photo';
//用户详细信息
urlConfig.PROFILE = '/api/account/profile';
//删除用户
urlConfig.DELETE_USER = '/api/account';

// 获取成功案例
urlConfig.CASE_LIST = '/api/success_case';

window.urlConfig = urlConfig;
