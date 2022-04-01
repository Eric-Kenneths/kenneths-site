<template>
  <div>
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-6 flex px-6">
            <div class="flex flex-column align-items-end justify-content-center">
              <div class="serif text-right md:text-2xl lg:text-4xl xl:text-6xl">
                A Beautiful Experience.
              </div>

              <div class="sans-serif lg:text-lg xl:text-xl align-self-end text-right mt-2">
                Not sure what you're looking for? No worries, each service begins with an in-depth consultation. 
                This empowers our technicians to customize your service. If you don't see what you're looking for, contact us for 
                more information. We can promise a personalized, extraordinary experience.
              </div>

              <div class="mt-4">
                <Button label="Book Now"/>
              </div>
            </div>
          </div>

          <div class="col-6 p-0">
            <div class="flex align-items-center justify-content-center">
              <img src="/src/assets/service/serviceMenuLower.jpg" alt="" class="flex align-items-center justify-content-center" style="height: 100%; width: 100%">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-6 p-0">
            <div>
              <img src="/src/assets/service/serviceMenuUpper.jpg" alt="" style="width: 100%">
            </div>
          </div>

          <div class="col-6">
            <div class="grid flex justify-content-center">
              <div class="col-10" v-for="(item, id) in state.serviceMenu" :key="id">
                <div class="flex justify-content-center text-3xl">
                  {{ item.header }}
                </div>

                <div class="grid mt-1 text-xl sans-serif">
                  <div class="col-12 text-right px-0">
                    <div class="flex flex-column">
                      <div v-for="(service, id) in item.services" :key="id">
                        <div style="float: left">{{ service.serviceName }}</div>
                        <div style="float: right">{{ service.price }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, onMounted } from 'vue';
  import { khsdsRepo } from '@/store/repository/khsdsRepo';
  
  export default {
    name: 'ServiceMenu',

    setup() {
      const state = reactive({
        serviceMenu: []
      });

      window.scrollTo(0, 0);

      const {
        getServiceHeaders,
        getServiceDetails
      } = khsdsRepo();

      onMounted(async () => {
        await getServices();
      });

      async function getServices() {
        let serviceHeaders = await getServiceHeaders();

        for (const header of serviceHeaders) {
          let menuItem = {
            sequence: 0,
            header: '',
            services: []
          }
          
          menuItem.sequence = header.sequence;

          menuItem.header = header.headerName;

          menuItem.services = await getServiceDetails(header.serviceMenuHeaderId);
  
          state.serviceMenu.push(menuItem);
        };

        state.serviceMenu.sort((a, b) => a.sequence - b.sequence);
      }

      return {
        state,
        getServices,
        
      }
    }
  }
</script>

<style scoped>
/* Small screen (phone) */
@media only screen and (min-width: 1px) {

}

/* Medium screen (tablet) */
@media only screen and (min-width: 768px) {

}

/* Large screen */
@media only screen and (min-width: 992px) {

}

/* Extra large screen */
@media only screen and (min-width: 1200px) {

}

@media only screen and (min-width: 1500px) {

}

.left {
  float: left;
}

.right {
  float: right;
}

button {
  border-radius: 0px !important;
  background-color: var(--black) !important;
  color: var(--white) !important;
  border-width: 0px !important;
  border-color: var(--white) !important;
  box-shadow: transparent !important;
  font-size: 20px !important;
  font-family: 'lato', arial, helvetica !important;
  border-radius: 0px !important;
}

button:focus {
  box-shadow: 0 0 0 0 transparent !important;
}

</style>