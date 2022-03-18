import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/views/Home.vue';
import Locations from '/src/views/locations/Locations.vue';
import MR from '/src/views/locations/MR.vue';
import PL from '/src/views/locations/PL.vue';
import TS from '/src/views/locations/TS.vue';
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
    path: '/service-menu',
    name: 'ServiceMenu',
    component: ServiceMenu
  }
]

const router = createRouter({
  history: createWebHistory(),

  routes,

})

export default router