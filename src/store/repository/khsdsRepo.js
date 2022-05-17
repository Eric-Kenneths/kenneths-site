import { ref } from 'vue';
import { appGlobal } from '@/store/global/appGlobal';
import { dataGlobal } from '@/store/global/dataGlobal';
import { handleResponse } from '@/helpers/response';

export function khsdsRepo() {
  const locations = ref([]);
  const serviceHeaders = ref([]);
  const serviceDetails = ref([]);
  const goodFors = ref([]);

  async function getLocationListLite(hasSpa, showOffice) {
    const url = appGlobal.apiBaseUrl + '/khsds/LocationList/' + hasSpa + '/' + showOffice;

    await fetch(url)
      .then(response => response.json())
      .then(function (data) {
        if (!handleResponse(data)) {
          return;
        }

        locations.value = data;
      })
      .catch(function (e) {
        console.log(e);
      })
      .finally(function () {
        //Maybe do something
      })

    return locations.value;
  }

  async function getServiceHeaders() {
    const url = appGlobal.apiBaseUrl + '/khsds/Services/HeadersForWebMenu';

    serviceHeaders.value = [];

    await fetch(url)
      .then(response => response.json())
      .then(function (data) {
        if (!handleResponse(data)) {
          return;
        }

        serviceHeaders.value = data;

      })
      .catch(function (e) {
        console.log(e);
      })
      .finally(function () {
        //Maybe do something
      })

    return serviceHeaders.value;
  }

  async function getServiceDetails(headerId) {
    const url = appGlobal.apiBaseUrl + '/khsds/Services/DetailsForWebMenu/' + headerId;

    serviceDetails.value = [];

    await fetch(url)
      .then(response => response.json())
      .then(function (data) {
        if (!handleResponse(data)) {
          return;
        }

        serviceDetails.value = data;
      })
      .catch(function (e) {
        console.log(e);
      })
      .finally(function () {
        //Maybe do something
      })

    return serviceDetails.value;
  }

  async function getServicesGlobal() {
    const url = appGlobal.apiBaseUrl + '/khsds/WebSiteServices';

    await fetch(url)
      .then(response => response.json())
      .then(function (data) {
        if (!handleResponse(data)) {
          return;
        }

        dataGlobal.services.serviceList = data.servicesForWebSiteViewModels;
        dataGlobal.services.lastPullDateTime = data.lastPullDateTime;
      })
      .catch(function (e) {
        console.log(e);
      })
      .finally(function () {
        //Maybe do something
      })
      
    return serviceDetails.value;
  }

  async function getGoodForsByDepartment(department) {
    const url = appGlobal.apiBaseUrl + '/khsds/Services/GoodFor/' + department;

    goodFors.value = [];

    await fetch(url)
      .then(response => response.json())
      .then(function (data) {
        if (!handleResponse(data)) { 
          return;
        }

        goodFors.value = data;
      })
      .catch(function (e) {
        console.log(e);
      })
      .finally(function () {
        //Maybe do something
      })
      
    return goodFors.value;
  }

  return {
    getLocationListLite,
    getServiceHeaders,
    getServiceDetails,
    getServicesGlobal,
    getGoodForsByDepartment
  };
}