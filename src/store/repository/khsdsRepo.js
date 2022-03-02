import { ref } from 'vue';
import { appGlobal } from '@/store/global/appGlobal';
import { handleResponse } from '@/helpers/response';

export function khsdsRepo() {
  const locations = ref([]);
  const services = ref([]);

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

  async function getServicesByWhatGroup(whatGroup) {
    const url = appGlobal.apiBaseUrl + '/khsds/Services/' + whatGroup;

    services.value = [];

    await fetch(url)
      .then(response => response.json())
      .then(function (data) {
        if (!handleResponse(data)) {
          return;
        }

        services.value = data;

      })
      .catch(function (e) {
        console.log(e);
      })
      .finally(function () {
        //Maybe do something
      })

    return services.value;
  }

  return {
    getLocationListLite,
    getServicesByWhatGroup
  };
}