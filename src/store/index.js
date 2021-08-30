import Vue from 'vue'
import Vuex from 'vuex'
import loginModules from './modules/login';
import axios from 'axios'

Vue.use(Vuex)
const state = {
    userInfo:{"username":""},
    login:"false"
}

export default new Vuex.Store({
    modules: {
        login: loginModules,
      },
})