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
      path: '/tasks',
      name: 'tasks',
      component: () => import('@/views/TasksView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue')
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


router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (userStore.user === undefined) {
    await userStore.fetchUser()
  }
  if (userStore.user === null && to.name !== 'signin' && to.name !== 'signup') {
    console.log("test1")
    next({ name: 'signin' })
  } else if (to.name === 'signin' && userStore.user) {
    console.log("test2")
    next({ name: 'tasks' })
  } else {
    next()
  }
})




export default router;


