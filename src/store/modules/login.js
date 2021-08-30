import { apiLogin } from '../../api';

const defaultState = {
    name:'noah',
    data: [],
  };
  
  const actions = {
    login:(context,param) => {
      context.commit('LOGIN_SUCCESS',"test");
        // apiLogin(param).then((res)=>{
        //     context.commit('LOGIN_SUCCESS',res);
        // }).catch((error) => {
        //   // eslint-disable-next-line
        //   console.error(error);
        // });
    },
  };
  
  const mutations = {
    LOGIN_SUCCESS: (state, data) => {
      state.data = data;
      state.name = data;
    },
  };
  
  const getters = {
    data: state => state.data,
    name: state => state.name
  };
  
  export default {
    state: defaultState,
    getters,
    actions,
    mutations,
  };