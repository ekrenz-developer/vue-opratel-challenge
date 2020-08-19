import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Router from "vue-router";

//import { BootstrapVue } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
