<template>
  <div>
    <Dropdown v-model="state.selectedLocation" :options="state.locationList" placeholder="Select a Location"
              optionLabel="description" optionValue="locationCode" @change="selectionChanged"/>
  </div>
</template>

<script>
  import { reactive, toRefs, onMounted, watch } from 'vue';
  import { khsdsRepo } from '@/store/repository/khsdsRepo';

  export default {
    name: 'DropdownLocation',

    props: ['hasSpa', 'showOffice'],

    emits: ['selected-location-changed'],

    setup(props, context) {
      const state = reactive({
        hasSpa: toRefs(props).hasSpa,
        showOffice: toRefs(props).showOffice,
        locationList: [],
        selectedLocation: ''
      });

      const {
        getLocationListLite
      } = khsdsRepo();

      onMounted(async () => {
        await getLocations();
      });

      async function getLocations() {
        state.locationList = await getLocationListLite(state.hasSpa, state.showOffice);
      }

      function selectionChanged() {
        context.emit('selected-location-changed', state.selectedLocation);
      }

      return {
        state,
        getLocations,
        selectionChanged
      }
    }
  }
</script>