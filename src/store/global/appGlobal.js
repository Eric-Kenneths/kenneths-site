import { reactive } from 'vue';

const appGlobal = reactive({
  apiBaseUrl: 'https://api.kenneths.com/api', //https://api.kenneths.com/api//https://localhost:44325/api
  appName: 'Kenneths-Site',
  appVersion: '1.0.9',
  requestVerificationToken: '',
  today: new Date(),
  isLoading: false
}); 
  
export { appGlobal };