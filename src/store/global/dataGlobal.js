import { reactive } from 'vue';

const dataGlobal = reactive({
  services: {
    serviceList: [],
    lastPullDateTime: ''
  }
}); 
  
export { dataGlobal };