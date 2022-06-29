import { reactive } from 'vue';

const appGlobal = reactive({
  apiBaseUrl: 'https://api.kenneths.com/api', //https://api.kenneths.com/api//https://localhost:44325/api
  appName: 'Kenneths-Site',
  appVersion: '0.1',
  requestVerificationToken: '',
  today: new Date(),
  isLoading: false
}); 
  
export { appGlobal };