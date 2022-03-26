import App from './App'
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import showImg from '@/components/show-img/show-img.vue';
import Pendant from '@/components/Pendant/Pendant.vue';
import interad from '@/components/advertisement/interad.vue';
import bannerad from '@/components/advertisement/bannerad.vue';
Vue.component('uniNavBar',uniNavBar)
Vue.component('Pendant',Pendant)
Vue.component('interad',interad)
Vue.component('bannerad',bannerad)
Vue.component('showImg',showImg)
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
import mixin from '@/config/mixin.js';
let mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mixin)
Vue.mixin(mpShare)
import { postMenu, getMenu } from '@/config/api.js';
Vue.prototype.$post = postMenu;
Vue.prototype.$get = getMenu;
// 引入请求封装，将app参数传递到配置中
require('@/config/config.js')(app)
app.$mount()

