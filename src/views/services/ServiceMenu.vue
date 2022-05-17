<template>
  <div>
    <!-- Banner -->
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <!-- Banner Text -->
          <div class="col-6 flex px-6">
            <div class="flex flex-column align-items-end justify-content-center">
              <!-- Header -->
              <div class="serif text-right md:text-2xl lg:text-4xl xl:text-6xl">
                A Beautiful Experience.
              </div>

              <!-- Subtext -->
              <div class="sans-serif lg:text-lg xl:text-xl align-self-end text-right mt-2">
                Not sure what you're looking for? No worries, each service begins with an in-depth consultation. 
                This empowers our technicians to customize your service. If you don't see what you're looking for, contact us for 
                more information. We can promise a personalized, extraordinary experience.
              </div>

              <!-- Button -->
              <div class="mt-4">
                <Button label="Book Now"/>
              </div>
            </div>
          </div>

          <!-- Banner Image -->
          <div class="col-6 p-0">
            <div class="flex align-items-center justify-content-center">
              <img src="/static/service/serviceMenuLower.jpg" alt="" class="flex align-items-center justify-content-center" style="height: 100%; width: 100%">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service List -->
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <!-- Photo -->
          <div class="col-6 flex flex-column p-0">
            <div class="flex align-content-start">
              <img src="/static/service/serviceMenuUpper.jpg" alt="" style="width: 100%">
            </div>

            <div class="flex justify-content-center align-items-center bat">
              <div class="grid">
                <div class="col-12">
                  <div class="flex justify-content-center">
                    <Button label="Hair Services" @click="doRoute('hair')"/>
                  </div>
                </div>
                
                <div class="col-12">
                  <div class="flex justify-content-center">
                    <Button label="Spa Services" @click="doRoute('spa')"/>
                  </div>
                </div>

                <div class="col-12">
                  <div class="flex justify-content-center">
                    <Button label="Nail Services" @click="doRoute('nail')"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Services -->
          <div class="col-6 mt-8">
            <div class="grid flex justify-content-center">
              <div class="col-10" v-for="(item, id) in state.serviceMenu" :key="id">
                <!-- Section Heading -->
                <div class="text-4xl">
                  {{ item.header }}
                </div>

                <!-- Services -->
                <div class="grid mt-1 text-2xl sans-serif">
                  <div class="col-12 text-right px-0">
                    <div class="flex ml-2 flex-column">
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
  import { useRouter } from 'vue-router';
  import { khsdsRepo } from '@/store/repository/khsdsRepo';
  
  export default {
    name: 'ServiceMenu',

    setup() {
      const state = reactive({
        serviceMenu: []
      });

      window.scrollTo(0, 0);

      const router = useRouter();

      function doRoute(whereTo) {
        switch (whereTo) {
          case 'spa':
            router.push('/service-guide/spa');
            break;
          case 'nail':
            router.push('/service-guide/nail');
            break;

          case 'hair':
            router.push('/service-guide/hair');
            break;
        }
      }

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

        console.log(state.serviceMenu)
      }

      return {
        state,
        doRoute,
        getServices
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

.bat {
  height: 100%;
}

</style>