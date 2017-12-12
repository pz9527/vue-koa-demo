import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
  name:'',
  role:'',
  id:'',
  dept:''
}
const mutations={
  setUserInfo(state,val){
    state.name=val.name;
    state.id=val.id;
    state.dept=val.dept;
    state.role=val.role
  }
}
const actions={
}
export default new Vuex.Store({
  state,
  mutations,
  actions
});
