import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/'
import Admin from '@/components/Admin/'
import Today from '@/components/Admin/children/Today'
import History from '@/components/Admin/children/History'

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
          name: 'Today',
          path: 'today',
          component: Today
        },
        {
          name: 'History',
          path: 'history',
          component: History
        }
      ]
    }
  ]
})

export default router; 