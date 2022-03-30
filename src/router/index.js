import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/views/Home.vue';
import Locations from '/src/views/locations/Locations.vue';
import Careers from '/src/views/careers/Careers.vue';
import MR from '/src/views/locations/MR.vue';
import PL from '/src/views/locations/PL.vue';
import TS from '/src/views/locations/TS.vue';
import AV from '/src/views/locations/AV.vue';
import GR from '/src/views/locations/GR.vue';
import KD from '/src/views/locations/KD.vue';
import NG from '/src/views/locations/NG.vue';
import PW from '/src/views/locations/PW.vue';
import WS from '/src/views/locations/WS.vue';
import AT from '/src/views/locations/AT.vue';
import ServiceMenu from '/src/views/services/ServiceMenu.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home 
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations 
  },
  {
    path: '/locations/upper-arlington-hilliard-hair-salon-day-spa',
    name: 'MR',
    component: MR
  },
  {
    path: '/locations/polaris-parkway-lewis-center-hair-salon-day-spa',
    name: 'PL',
    component: PL
  },
  {
    path: '/locations/pickerington-hair-salon-nail-spa-waxing-studio',
    name: 'TS',
    component: TS
  },
  {
    path: '/locations/dublin-hair-salon-nail-spa-waxing-studio',
    name: 'AV',
    component: AV
  },
  {
    path: '/locations/grove-city-hair-salon-waxing-studio',
    name: 'GR',
    component: GR
  },
  {
    path: '/locations/upper-arlington-kingsdale-hair-salon-nail-spa-waxing-studio',
    name: 'KD',
    component: KD
  },
  {
    path: '/locations/new-albany-hair-salon-day-spa',
    name: 'NG',
    component: NG
  },
  {
    path: '/locations/powel-hair-salon-waxing-studio',
    name: 'PW',
    component: PW
  },
  {
    path: '/locations/westerville-hair-salon-waxing-studio',
    name: 'WS',
    component: WS
  },
  {
    path: '/locations/academy-hair-salon',
    name: 'AT',
    component: AT
  },
  {
    path: '/service-menu',
    name: 'ServiceMenu',
    component: ServiceMenu
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
  }
]

const router = createRouter({
  history: createWebHistory(),

  routes,

})

export default router