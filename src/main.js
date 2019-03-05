import Vue from 'vue'
import App from './App.vue'
import VueDragscroll from 'vue-dragscroll'
Vue.use(VueDragscroll)
Vue.config.productionTip = false
// Vue.config.assetsPublicPath="./";
new Vue({
  render: h => h(App),
}).$mount('#app')
