import { createRouter, createWebHashHistory } from 'vue-router'

import MainView from '@/components/views/v-main.vue'
import ProjectView from '@/components/views/v-projects.vue'
import ContactView from '@/components/views/v-contact.vue'
import AboutView from '@/components/views/v-about.vue'

import ProjGirfido from '@/components/views/projects/v-girfido.vue'
import ProjDostavim from '@/components/views/projects/v-dostavim.vue'
import ProjSeries from '@/components/views/projects/v-serial_killer.vue'
import ProjDiso from '@/components/views/projects/v-diso.vue'
import ProjMoloko from '@/components/views/projects/v-molokomat.vue'
import ProjTransport from '@/components/views/projects/v-transport.vue'
import ProjStroytek from '@/components/views/projects/v-stroytek.vue'
import ProjChronosat from '@/components/views/projects/v-chronosat.vue'
import ProjPayrow from '@/components/views/projects/v-payrow.vue'
import ProjVideo from '@/components/views/projects/v-video.vue'
import ProjDesignit from '@/components/views/projects/v-designit.vue'
import ProjRosatom from '@/components/views/projects/v-rosatom.vue'
import ProjTender from '@/components/views/projects/v-tender.vue'

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
        },
        {
            path: '/projects/girfido',
            name: 'ProjGirfido',
            component: ProjGirfido,
        },
        {
            path: '/projects/dostavim',
            name: 'ProjDostavim',
            component: ProjDostavim,
        },
        {
            path: '/projects/series',
            name: 'ProjSeries',
            component: ProjSeries,
        },
        {
            path: '/projects/diso',
            name: 'ProjDiso',
            component: ProjDiso,
        },
        {
            path: '/projects/moloko',
            name: 'ProjMoloko',
            component: ProjMoloko,
        },
        {
            path: '/projects/transport',
            name: 'ProjTransport',
            component: ProjTransport,
        },
        {
            path: '/projects/stroytek',
            name: 'ProjStroytek',
            component: ProjStroytek,
        },
        {
            path: '/projects/chronosat',
            name: 'ProjChronosat',
            component: ProjChronosat,
        },
        {
            path: '/projects/payrow',
            name: 'ProjPayrow',
            component: ProjPayrow,
        },
        {
            path: '/projects/video',
            name: 'ProjVideo',
            component: ProjVideo,
        },
        {
            path: '/projects/designit',
            name: 'ProjDesignit',
            component: ProjDesignit,
        },
        {
            path: '/projects/rosatom',
            name: 'ProjRosatom',
            component: ProjRosatom,
        },
        {
            path: '/projects/tender',
            name: 'ProjTender',
            component: ProjTender,
        }
    ]

const router = createRouter({
    history: createWebHistory('/portfolio/'),
    routes
  })

export default router;