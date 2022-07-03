import { defineClientConfig } from '@vuepress/client';
import { createStore } from 'vuex'
import Login from "./login/Login.vue";
// import Vue from 'vue'
// import Vuex from 'vuex'
// import VueRouter from 'vue-router';

//状态管理
// Vue.use(Vuex)
  //路由
// Vue.use(VueRouter)

// const router = new VueRouter({
//   routes: [{
//     path: '/login',
//     component: Login
//   }, {
//     path: '/user_info',
//     component: UserInfo
//   }]
// })
// let k = 0;

// 创建一个新的 store 实例
// const store = createStore({
//   state () {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

export default defineClientConfig({
  enhance({ app, router, siteData }){
    // app.use(store);
    console.log('before navigation')
    router.addRoute("/", {
      path: '/login',
      component: Login
    })
    router.beforeEach((to) => {
      // check login
      /**
       * if not 
       *  router.push(Login)
       */
      // console.log('before navigation')
      if (localStorage.getItem("login") != "true")
      // if (!k)
      {
        // console.log(app.$store.state.count)
        console.log(window.localStorage.getItem("sessionId"));
        // console.log(this.$store.state.count);
        console.log("ready login");
        router.push("login");
      }
    })

    // router.afterEach((to) => {
    //   console.log('after navigation')
    // })
  },
})