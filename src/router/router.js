import { createRouter, createWebHistory } from 'vue-router'

import MainView from '@/components/views/v-main.vue'
import ProjectView from '@/components/views/v-projects.vue'
import ContactView from '@/components/views/v-contact.vue'
import AboutView from '@/components/views/v-about.vue'

const routes = [
        {
            path: '/',
            name: 'MainView',
            component: MainView,
        },
        {
            path: '/projects',
            name: 'ProjectView',
            component: ProjectView,
        },
        {
            path: '/contact',
            name: 'ContactView',
            component: ContactView,
        },
        {
            path: '/about',
            name: 'AboutView',
            component: AboutView,
        }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router;