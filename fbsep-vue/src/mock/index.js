const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
//url是一个可自定义的url，只要符合http规范即可
Mock.mock('http://mock/api/hello', 'get', require('./json/hello'));
