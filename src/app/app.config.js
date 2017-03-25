'use strict';

var urlConfig = window.urlConfig || {};

urlConfig.API_ROOT = '/situaware/v1';

//industrial control interface
//urlConfig.IC = urlConfig.API_ROOT + '/0.1';
//urlConfig.IC_RISK_GRADE = urlConfig.IC + '/riskGrade/city/cd';
//urlConfig.IC_DEVICE_TYPE_TOP5 = urlConfig.IC + '/top5Type/city/cd';
//urlConfig.IC_DEVICE_COUNT = urlConfig.IC + '/total/city/cd';
//urlConfig.IC_DISTRIBUTION = urlConfig.IC + '/distribution/city/cd';
//urlConfig.IC_RISK_DEVICE_TOP5 = urlConfig.IC + '/top5Device/city/cd';
//urlConfig.IC_RECENTLY_RISK_DEVICE = urlConfig.IC + '/recentlyDevice/city/cd';
//urlConfig.IC_MAP = urlConfig.IC + '/map/city/cd';
urlConfig.IC = 'http://110.185.210.152:10086';
urlConfig.IC_RISK_GRADE = urlConfig.IC + '/api/stable-v1/riskGrade/province/辽宁省';
urlConfig.IC_DEVICE_TYPE_TOP5 = urlConfig.IC + '/api/stable-v1/top5Type/province/辽宁省';
urlConfig.IC_DEVICE_COUNT = urlConfig.IC + '';
urlConfig.IC_DISTRIBUTION = urlConfig.IC + '/api/stable-v1/distribution/province/辽宁省';
urlConfig.IC_RISK_DEVICE_TOP5 = urlConfig.IC + '/api/stable-v1/top5Device/province/辽宁省';
urlConfig.IC_RECENTLY_RISK_DEVICE = urlConfig.IC + '/ic_recently_risk.json';
urlConfig.IC_MAP = urlConfig.IC + '/api/stable-v1/map/province/辽宁省';

//web interface  local json file data
urlConfig.WEB = '/data';
urlConfig.WEB_GRADE = urlConfig.WEB + '/web_grade.json';
urlConfig.WEB_DISTRIBUTION = urlConfig.WEB + '/distribution.json';
urlConfig.WEB_RECENTLY_RISK = urlConfig.WEB + '/recently_risk.json';
urlConfig.WEB_USER_RISK_TOP5 = urlConfig.WEB + '/user_risk_top5.json';
urlConfig.WEB_RISK_TOP5 = urlConfig.WEB + '/web_risk_top5.json';
urlConfig.WEB_MAP = urlConfig.WEB + '/web_map.json';

//notification alert interface local json file data
urlConfig.ALERT = '/data';
urlConfig.ALERT_THREATEN = urlConfig.ALERT + '/threaten.json';
urlConfig.ALERT_THREATEN_DETAIL = urlConfig.ALERT + '/threaten_detail.json';
urlConfig.ALERT_INCIDENTS = "/situaware/v1/reportWarning/bar";
urlConfig.ALERT_INCIDENTS_DETAIL = "/situaware/v1/reportWarning/table";
urlConfig.ALERT_COMMANY = "/situaware/v1/reportWarning/depQuery";
urlConfig.ALERT_INFORMATION = urlConfig.ALERT + '/information.json';
urlConfig.ALERT_POLICIES = urlConfig.ALERT + '/policies.json';
urlConfig.ALERT_NEWS = "/intelligence/v1/analysis/security/news";
urlConfig.ALERT_NEWSSUMMARY = "/intelligence/v1/analysis/security/summary";
urlConfig.ALERT_REPORTS = "/situaware/v1/reportWarning/batchReport";
urlConfig.ALERT_REPORT = "/situaware/v1/reportWarning/report";

//emergency interface
urlConfig.EMERGENCY = urlConfig.API_ROOT + '/urgencyDeal';
urlConfig.EMERGENCY_TOTAL = urlConfig.EMERGENCY + "/bar/totalCount";
urlConfig.EMERGENCY_DETAIL = urlConfig.EMERGENCY + "/bar/detailCount";
urlConfig.EMERGENCY_TOP = urlConfig.EMERGENCY + "/bar/topCount";
urlConfig.EMERGENCY_DEAL = urlConfig.EMERGENCY + "/deal";
urlConfig.EMERGENCY_TABLE = urlConfig.EMERGENCY + "/table";

//map data
urlConfig.MAP = '/styles/js/map/json/';

window.urlConfig = urlConfig;
