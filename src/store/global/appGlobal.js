import { reactive } from 'vue';

const appGlobal = reactive({
    apiBaseUrl: '',
    appName: 'Kenneths-Site',
    appVersion: '0.1',
    requestVerificationToken: '',
    today: new Date()
  }); 
  
  export { appGlobal };