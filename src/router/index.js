import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import { useUserStore } from '@/stores/userStore'

import { supabase } from '@/api/supabase'
import { ROUTES } from '@/utils/constants'

let localUser;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME.path,
      name: ROUTES.HOME.name,
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/SignInView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

//getUser
async function getUser() {
  localUser = await supabase.auth.getSession();
  if(localUser.data.session == null) {
    next({ name: 'signin' })
  }
}


//auth requirements

/*
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log("requires auth")
  }
  else {
    next
  }
})
*/

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (userStore.user === undefined) {
    await userStore.fetchUser()
  }
  if (userStore.user === null && to.name !== 'signin') {
    console.log("test1")
    next({ name: 'signin' })
  } else if (to.name === 'signin' && userStore.user) {
    console.log("test2")
    next({ name: 'about' })
  } else {
    next()
  }
})




export default router;


