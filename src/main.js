// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Amap from 'vue-amap'
import Echarts from 'echarts'
import echarts from 'echarts'
import VueCookies from 'vue-cookies'

import VideoPlayer from 'vue-video-player'
import 'videojs-flash'

require('video.js/dist/video-js.css')

require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)

Vue.prototype.echarts = Echarts
Vue.use(Echarts)
Vue.use(Amap)
Vue.use(VueCookies)
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.config.productionTip = false
Amap.initAMapApiLoader({
    key:"57ea2e12764b3e0ea39f02d08b7e3986",
    plugin:["AMap.Geolocation"]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
