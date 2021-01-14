
import Home from './components/Home.vue';

export const routes = [
    { 
      path: '',
      name: 'home',
      component: Home,
      titulo: 'Home',
      // menu: true
    },
    { 
      path: '/post/:id',
      name: 'post',
      component: () => import('./components/Post.vue'),
      titulo: 'Post',
      // menu: true
    },
    // { 
    //   path: '*',
    //   component: Home,
    //  //  menu: false
    // }
];




// import Vue from 'vue'
// import Router from 'vue-router'

// //import Home from '../components/Home.vue';


// // import AuthLayout from '../components/auth/AuthLayout'
// // import AppLayout from '../components/admin/AppLayout'

// Vue.use(Router)


// export default new Router({
//   mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
//   routes: [
//     //...demoRoutes,

//     // {
//     //   path: '/',
//     //   redirect: { name: 'home' }, // 'dashboard'
//     // },
//     // {
//     //   path: '/post',
//     //   redirect: { name: 'post' }, // 'dashboard'
//     // },
//     {
//       path: '/',
//       name: 'home',
//       component: () => import('../components/Home.vue'),
//       default: true,
//     },
//     {
//       path: '/post',
//       name: 'post',
//       component: () => import('../components/Post.vue'),
//       default: true,
      
//     },
//   ],
// })
