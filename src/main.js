import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'
import router from '@/router'
import store from '@/store'
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
Amplify.Logger.LOG_LEVEL = 'DEBUG' // to show detailed logs from Amplify library
Amplify.configure(aws_exports);

Vue.use(BootstrapVue) //plugin
Vue.component('icon', Icon)  // register component

Vue.config.productionTip = false
Vue.use(AmplifyPlugin, AmplifyModules);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
