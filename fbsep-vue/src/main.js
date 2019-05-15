// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


import axios from 'axios'

var app2 = new Vue({
  el: '#app2',
  data:{
    msg: ''
  }
});

//引用mock功能，不用时注释掉即可
//require('./mock');

//访问mock模拟数据
/*axios.get('http://mock/api/hello')
  .then(function (response) {
    console.log(response);
    //将app2中双向绑定的msg数据更改为mock模拟数据
    app2.msg = response.data.data;
  })
  .catch(function (error) {
    console.log(error);
  });*/

var url="http://localhost:3000/api/hello"; //本地环境使用此url
//var url="http://192.168.138.134:3000/api/hello"; //生产环境使用此url
axios.get(url)
  .then(function (response) {
    console.log(response);
    //将app2中双向绑定的msg数据更改为Java接口数据
    app2.msg = response.data.data;
  })
  .catch(function (error) {
    console.log(error);
  });
