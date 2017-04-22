'use strict';

var urlConfig = window.urlConfig || {};

urlConfig.USER = '/api/account';

//登录 验证 修改密码
urlConfig.IS_LOGIN = urlConfig.USER + '/is_login';
urlConfig.LOGIN = urlConfig.USER + '/login';
urlConfig.LOGOUT = urlConfig.USER + '/logout';
urlConfig.VERIFY = urlConfig.USER + '/verify';
urlConfig.CHECK_PASSWORD = urlConfig.USER + '/check_password';
urlConfig.RESET_PASSWORD = urlConfig.USER + '/reset_password';

// 获取老师列表
urlConfig.TEACHER_LIST = urlConfig.USER + '/teachers';
// 添加老师
urlConfig.ADD_TEACHER = urlConfig.USER + '/add_teacher';

// 获取学生列表
urlConfig.STUDENT_LIST = urlConfig.USER + '/students';
// 添加学生
urlConfig.ADD_STUDENT = urlConfig.USER + '/add_student';

// 用户头像
urlConfig.AVATAR = urlConfig.USER + '/photo';
// 用户详细信息
urlConfig.USER_PROFILE = urlConfig.USER + '/profile';


// 成功案例
urlConfig.CASE = '/api/success_case';
// 成功案例详情
urlConfig.CASE_DETAIL = urlConfig.CASE + '/detail';

// 试听
urlConfig.AUDITION = '/api/course/apply_info';

// 学习反馈
urlConfig.FEEDBACK = '/api/feedback';

//归档
urlConfig.HISTORY = '/api/history';


window.urlConfig = urlConfig;
