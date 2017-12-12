import Vue from 'vue'
import Router from 'vue-router';
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import BaseTabel from '../components/BaseTable.vue'
import Report from '../components/Report.vue'
import Ordering from '../components/Ordering.vue'

Vue.use(Router);
export default new Router({
  routes:[
    {
      path:'/Home',
      component:Home,
      children:[
        {
          path:'/Home',
          redirect:'/Home/Ordering',
          component:Ordering,
          children:[{
            path:'/Home/Ordering'
          }]
        },{
        path:'/Home/BaseTable',
          component:BaseTabel
        },
        {
          path:'/Home/Report',
          component:Report
        }

      ]
    },{
    path:'/',
      component:Login
    }
  ]
})
