import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import './assets/styles/element-variables.scss'
import plugins from './plugins'
import axios from 'axios'
Vue.use(Element);
Vue.use(plugins)
Vue.prototype.$http = axios
Vue.config.productionTip = false
require('../mock')
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
