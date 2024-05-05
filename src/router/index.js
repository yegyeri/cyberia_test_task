import { createRouter, createWebHistory } from 'vue-router'
import project_list from '../components/project_list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: project_list,
      alias: '/'
    }
  ]
})

export default router
