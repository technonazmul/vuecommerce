import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapCss from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Jquery from 'jquery'
window.$ = window.jQuery = Jquery
import VueToastr from "vue-toastr";
window.toastr = require('toastr')
 
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});
Vue.config.productionTip = false;

import popper from '@popperjs/core'
import BootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
window.axios = axios
window.token = localStorage.getItem('AToken')
axios.defaults.baseURL = 'http://localhost/masterecommerce/public/api/';

axios.defaults.headers.common['Authorization'] = "Bearer "+token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
  mounted() {
   
  }
}).$mount("#app");