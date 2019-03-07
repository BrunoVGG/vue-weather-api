import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login/'
import Admin from '@/components/Admin/'

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
      component: Index
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
      beforeEnter: (to, from, next) => {
        verifySessionUser()
        .then(()=> {
          next();
        })
        .catch(() => {
          next('/login');
        })
      }
    }
  ]
})

export default router; 