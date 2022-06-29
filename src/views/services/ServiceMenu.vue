<template>
  <div>
    <!-- Banner -->
    <div class="grid md:ml-7 lg:mx-7">
      <div class="col-12">
        <div class="grid flex flex-column md:flex-row">
          <!-- Banner Text -->
          <div class="col-12 px-3 md:col-6 flex md:pr-4 lg:pr-6">
            <div class="flex flex-column align-items-start md:align-items-end justify-content-center">
              <!-- Header -->
              <div class="serif text-left text-3xl md:text-right md:text-2xl lg:text-4xl xl:text-6xl">
                A Beautiful Experience
              </div>

              <!-- Subtext -->
              <div class="sans-serif align-self-end text-left text-lg md:text-right mt-2 md:text-md lg:text-lg xl:text-xl">
                Not sure what you're looking for? No worries, each service begins with an in-depth consultation. 
                This empowers our technicians to customize your service. If you don't see what you're looking for, contact us for 
                more information. We can promise a personalized, extraordinary experience.
              </div>

              <!-- Button -->
              <div class="my-4 md:mt-2 lg:mt-4">
                <Button label="Book Now" class="md:text-md lg:text-lg xl:text-xl" @click="doRoute('appointmentBook')"/>
              </div>
            </div>
          </div>

          <!-- Banner Image -->
          <div class="col-12 md:col-6 p-0">
            <div class="flex align-items-center justify-content-center">
              <img src="/static/service/serviceMenuLower.jpg" alt="" class="flex align-items-center justify-content-center" style="height: 100%; width: 100%">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service List -->
    <div class="grid md:ml-7 lg:mx-7">
      <div class="col-12">
        <div class="grid">
          <!-- Photo -->
          <div class="col-6 hidden md:flex flex-column p-0">
            <div class="flex align-content-start">
              <img src="/static/service/serviceMenuUpper.jpg" alt="" class="lower-sm lower-md lower-lg">
            </div>
          </div>

          <!-- Services -->
          <div class="col-12 md:col-6 lg:mt-5">
            <div class="grid flex justify-content-center">
              <div class="col-11 md:col-10" v-for="(item, id) in state.serviceMenu" :key="id">
                <!-- Section Heading -->
                <div class="text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
                  {{ item.header }}
                </div>

                <!-- Services -->
                <div class="grid mt-1 sans-serif text-xl md:text-lg lg:text-xl xl:text-2xl">
                  <div class="col-12 text-right px-0">
                    <div class="flex ml-2 flex-column">
                      <div v-for="(service, id) in item.services" :key="id">
                        <div class="link" style="float: left" @click="doRouteWithParams(service.department, service.serviceCode)">{{ service.serviceName }}</div>
                        <div style="float: right">{{ service.price }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-content-center align-items-center">
                <div class="grid">
                  <div class="col-12 text-lg lg:text-xl xl:text-2xl">
                    <div class="sans-serif flex justify-content-start">
                      Do not see what you are looking for?
                    </div>

                    <div class="sans-serif flex justify-content-start">
                      Click <a href="http://kenneths.com/service-guide/Hair" class="link" style="padding: 0 5px 0 5px">here</a> to see our full list of services
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

      function doRouteWithParams(dept, code) {
        router.push({name: 'ServiceGuideWithParams', params: { department: dept, serviceCode: code }});
      }

      function doRoute(cat) {
        switch (cat) {
          case 'spa':
            router.push({name: 'ServiceGuide', params: { category: cat }});
            break;
          case 'nail':
            router.push({name: 'ServiceGuide', params: { category: cat }});
            break;
          case 'hair':
            router.push({name: 'ServiceGuide', params: { category: cat }});
            break;
          case 'appointmentBook':
            window.location.href = 'https://kenneths.com/Appointment-Book/login.aspx';
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
      }

      return {
        state,
        doRouteWithParams,
        doRoute,
        getServices
      }
    }
  }
</script>

<style scoped>
/* Small screen (phone) */
@media only screen and (min-width: 1px) {
  .lower-sm {
    height: 35rem;
    width: 100%;
  }
}

/* Medium screen (tablet) */
@media only screen and (min-width: 768px) {
  .lower-md {
    height: 35rem;
    width: 100%;
  }
}

/* Large screen */
@media only screen and (min-width: 992px) {
  .lower-lg {
    height: 100%;
    width: 100%;
  }
}

/* Extra large screen */
@media only screen and (min-width: 1200px) {

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
  font-family: 'lato', arial, helvetica !important;
  border-radius: 0px !important;
}

button:focus {
  box-shadow: 0 0 0 0 transparent !important;
}

.link {
  color: var(--black);
}

.link:hover {
  color: var(--grey);
}
</style>