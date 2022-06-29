import { ref } from 'vue';
import { appGlobal } from '@/store/global/appGlobal';
import { handleResponse } from '@/helpers/response';

export function employeeRepo() {
  const object = ref({});
  const array = ref([]);
  const integer = ref(0);

  async function getSocialMediaToken() {

    const url = appGlobal.apiBaseUrl + '/employees/SocialMedia/GetToken/177000/1';

    object.value = {};

    await fetch(url)
    .then(response => response.json())
    .then(function (data) {
      if (!handleResponse(data)) {
        return;
      }

      object.value = data.listByEmployeeAndMediaTypeViewModel[0];

    })
    .catch(function (e) {
      showAlert('Error', 'Error Adding Data', e);
    }).finally(function () {
      appGlobal.isProcessing = false;
    })

    return object.value;
  }

  async function getPhotos(userId, token) {
    const url = 'https://graph.instagram.com/' + userId + '/media?fields=id,media_url,media_type,caption&limit=6&access_token=' + token;

    array.value = [];

    await fetch(url)
    .then(response => response.json())
    .then(function (returnData) {
      array.value = returnData.data;
    })
    .catch(function (e) {

    }).finally(function() {              

    })  

    return array.value;          
  }

  async function getEmployeesByLocationWithSocialMedia(locationCode) {
    const url = appGlobal.apiBaseUrl + '/employees/SocialMedia/ForWeb/' + locationCode;

    array.value = [];

    await fetch(url)
    .then(response => response.json())
    .then(function (data) {
      if (!handleResponse(data)) {
        return;
      }

      array.value = data.listSocialMediaByLocationForWebViewModels;
    })
    .catch(function (e) {

    }).finally(function() {              

    })  

    return array.value;          
  }

  async function getPositionsForCareer() {
    const url = appGlobal.apiBaseUrl + '/employees/Position/ForWebCareer/';

    array.value = [];

    await fetch(url)
    .then(response => response.json())
    .then(function (data) {
      if (!handleResponse(data)) {
        return;
      }

      array.value = data.listPositionListForWebCareerViewModels;
    })
    .catch(function (e) {

    }).finally(function() {  

    })  

    return array.value;          
  }

  async function postOnlineApplicant(applicant) {
    const url = appGlobal.apiBaseUrl + '/employees/OnlineApplicant/';

    integer.value = 0;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicant)
    };
    
    await fetch(url, options)
      .then(response => response.json())
      .then(function (data) {
        if (!handleResponse(data)) {
          return;
        }
        
        integer.value = data.onlineApplicantId;
      })
      .catch(function (e) {

      }).finally(function () {

      })

    return integer;
  }

  return {
    getSocialMediaToken,
    getPhotos,
    getEmployeesByLocationWithSocialMedia,
    getPositionsForCareer,
    postOnlineApplicant
  };
}