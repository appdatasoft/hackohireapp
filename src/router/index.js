import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import SignIn from '@/pages/SignIn.vue'
import Pricing from '@/pages/Pricing.vue'
//import Dashboard from '@/pages/Dashboard.vue'
//import PhotoPicker from '@/pages/PhotoPicker.vue'
//import PicUpload from '@/pages/PicUpload.vue'
//import privacyPolicy from '@/pages/privacy_policy.vue'
//import termOfConditions from '@/pages/term_of_conditions.vue'
//import store from '@/store'

Vue.use(Router)

const routes = [
    {
        path: '/', name: 'home', component: Home, meta: { title: 'Home', auth: false }
    },
    {
        path: '/signIn', name: 'signIn', component: SignIn, meta: { title: 'Sign In', auth: false }
    },
    {
      path: '/pricing', name: 'pricing', component: Pricing, meta: { title: 'Pricing', auth: false }
    },
   /* {
      path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { title: 'Dashboard', auth: true }
    },
    {
      path: '/photo', name: 'photoPicker', component: PhotoPicker, meta: { title: 'Photo Picker', auth: true }
    },
    {
        path: '/privacyPolicy', name: 'privacyPolicy', component: privacyPolicy, meta: { title: 'Privacy Policy', auth: true }
    },
    {
        path: '/termOfConditions', name: 'termOfConditions', component: termOfConditions, meta: { title: 'Term Of Conditions', auth: true }
    },*/
    //{
      //  path: '/posts',
        //name: 'Posts',
        //component: Posts
      //},
]

const router = new Router({ mode: "history", routes })

router.beforeResolve((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      let user;
      Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
        if (data && data.signInUserSession) {
          user = data;
        } 
      }).catch((e) => {
        console.log(e)
      });
      if (!user) {
        next({
          path: '/auth',
          query: {
            redirect: to.fullPath,
          }
        });
      }
      next()
    }
    next()
  })

export default router