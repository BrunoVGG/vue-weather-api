import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/'
import Admin from '@/components/Admin/'
import TodayWheather from '@/components/Admin/children/TodayWheather'
import ForecastWeather from '@/components/Admin/children/ForecastWeather'

Vue.use(Router)
Vue.use(Router)

function verifySessionUser() {
  return new Promise((resolve, reject)=> {
    const sessionUser = sessionStorage.getItem("user");
  
    if (sessionUser) {
      resolve();
    } else {
      reject();
    }
  })
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      redirect: {name: 'Today'}, 
      beforeEnter: (to, from, next) => {
        verifySessionUser()
        .then(()=> {
          next();
        })
        .catch(() => {
          next('/login');
        })
      },
      children: [
        {
          name: 'TodayWheather',
          path: 'today',
          component: TodayWheather
        },
        {
          name: 'ForecastWeather',
          path: 'forecast',
          component: ForecastWeather
        }
      ]
    }
  ]
})

export default router; 