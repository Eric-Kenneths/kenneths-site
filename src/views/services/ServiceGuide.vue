<template>
  <div>
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-6 flex px-6">
            <div class="flex flex-column align-items-end justify-content-center">
              <div class="serif text-right md:text-2xl lg:text-4xl xl:text-6xl">
                {{ category }} Services
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

    <div class="grid mx-7 py-3">
      <div class="col-12">
        <div class="grid">
          <span class="col text-center selection" v-for="(department, id) in state.departments" :key="id">
            <!-- <Button class="button-department" :label="department.description" @click="changeDepartment(department.code)"/> -->
            <input class="hidden" type="radio" name="department" :id="id" :value="department.code" v-model="state.department" @change="changeDepartment()"/>
            <label class="text-3xl cursor-pointer" :for="id">{{ department.description }}</label>
          </span>
        </div>
      </div>
    </div>
    
    <!-- Service good for key -->
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid pt-0 pb-4" style="background-color: var(--grey)">
          <div class="flex flex-column text-center col pt-0" v-for="(goodFor, gfid) in state.goodFors" :key="gfid">
            <!-- <span class="bar"> -->
              <!-- <input class="rad" type="radio" name="goodFor" :id="'gf' + goodFor.goodForId" :value="goodFor.goodForId" v-model="state.selectedGoodFor"/> -->
              <!-- <label class="text-3xl cursor-pointer" :for="'gf' + goodFor.goodForId" @click="filterServices(goodFor.goodForId)">{{ goodFor.goodForDescription }}</label> -->
            <!-- </span> -->
            <div class="hidden flex bar-g" :id="'gfa' + gfid">

            </div>

            <span class="text-3xl cursor-pointer align-self-center" :id="'gf' + gfid" @click="filterServices(goodFor.goodForId)">
              {{ goodFor.goodForDescription }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Service menu -->
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-6 p-6" v-for="(service, id) in state.servicesDisplay" :key="id">
            <!-- Service name -->
            <div class=" text-5xl serif bold">
              <b>{{ service.serviceDescription }}</b>
            </div>

            <!-- Service description -->
            <div class="sans-serif text-2xl py-2">
              <b class="serif">Description:</b> {{ service.webDescription }}
            </div>

            <!-- Service good fors -->
            <div class="sans-serif text-2xl">
              <b class="serif">Good for: </b> 
              <span v-for="(goodFor, gfid) in service.serviceGoodForLists" :key="gfid">{{ goodFor.goodForDescription }}<span v-show="service.serviceGoodForLists.length !== gfid + 1">, </span></span>
            </div>

            <!-- Pairs with -->
            <div class="sans-serif text-2xl" v-show="service.servicePairLists.length > 0">
              <b class="serif">Pairs with: </b>
              <span v-for="(servicePair, spid) in service.servicePairLists" :key="spid">{{ servicePair.webSiteDescription }}<span v-show="service.servicePairLists.length !== spid + 1">, </span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ScrollTop :threshold="1000" icon="pi pi-arrow-up"/>
  </div>
</template>

<script>
  import { reactive, onMounted } from 'vue';
  //import { useRouter } from 'vue-router';
  import { dataGlobal } from '@/store/global/dataGlobal';
  import { khsdsRepo } from '@/store/repository/khsdsRepo';
  import { minutesDifference } from '@/helpers/dateFunction';
  
  export default {
    name: 'ServiceGuide',

    props: ['category'],

    setup(props, context) {
      const state = reactive({
        departments: [],
        department: '',        
        goodFors: [],
        serviceList: [],
        servicesDisplay: [],
        displayedGoodFor: 0
      });

      window.scrollTo(0, 0);

      const {
        getServicesGlobal,
        getGoodForsByDepartment
      } = khsdsRepo();

      onMounted(async () => {
        if (props.category === 'Hair') {
          state.departments = [{
                                code: 'H',
                                description: 'Hair'
                              }];

        } else if (props.category === 'Spa') {
          state.departments = [{
                                code: 'E',
                                description: 'Peel'
                              }, 
                              {
                                code: 'F',
                                description: 'Facial'
                              }, 
                              {
                                code: 'W',
                                description: 'Waxing'
                              }, 
                              {
                                code: 'M',
                                description: 'Massage'
                              }];

        } else if (props.category === 'Nail') {
          state.departments = [{
                                code: 'N',
                                description: 'Manicure'
                              }, 
                              {
                                code: 'P',
                                description: 'Pedicure'
                              }];
        }

        state.department = state.departments[0].code;

        await getServices();
      });

      async function getServices() {
        console.log('here')
        if (dataGlobal.services.lastPullDateTime === '' || minutesDifference(dataGlobal.services.lastPullDateTime, new Date()) > 30) {
          await getServicesGlobal();
          console.log(dataGlobal.services.serviceList)
        }

        state.serviceList = dataGlobal.services.serviceList.filter(service => state.department === service.department);

        state.servicesDisplay = [...state.serviceList];
        console.log(state.servicesDisplay)

        state.goodFors = await getGoodForsByDepartment(state.department);
      }

      // function getImageSource(goodForId) {
        // return '/static/image/icons/serviceGuide/' + props.category + '/' + goodForId + '.png';
      // }

      async function filterServices(goodForId) {
        console.log(goodForId)
        if (state.displayedGoodFor === goodForId) {
          console.log('same')
          state.servicesDisplay = state.serviceList;

          var element = document.getElementById('gfa' + goodForId);
          var classes = element.

          state.displayedGoodFor = 0;
        } else {
          state.displayedGoodFor = goodForId;

          let array = [];

          state.serviceList.forEach(service => {
            service.serviceGoodForLists.forEach(goodFor => {
              if (goodFor.goodForId === state.displayedGoodFor) {
                array.push(service);
              }
            })
          })

          state.servicesDisplay = array;
        }
      }

      function changeDepartment() {
        getServices();
      }

      return {
        state,
        getServicesGlobal,
        //getImageSource,
        filterServices,
        changeDepartment
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
  .icon {
    height: 5rem;
    width: 5rem;
  }
}

@media only screen and (min-width: 1500px) {

}

.button-department {
  border-radius: 0px !important;
  background-color: transparent !important;
  color: var(--black) !important;
  border-width: 0px !important;
  border-color: var(--black) !important;
  box-shadow: transparent !important;
  font-size: 20px !important;
  font-family: 'lato', arial, helvetica !important;
}

/* .button-department: { */
  /* border-radius: 0px !important; */
  /* background-color: black !important; */
  /* color: var(--black) !important; */
  /* border-width: 0px !important; */
  /* border-color: var(--black) !important; */
  /* box-shadow: transparent !important; */
  /* font-size: 20px !important; */
  /* font-family: 'lato', arial, helvetica !important; */
  /* border-radius: 0px !important; */
/* } */

.selection {
  border: 0px solid black;
}

input[type="radio"]:checked + label {
  font-weight: 800;
}

.bar-g {
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid var(--grey);
  margin: auto auto;
}
</style>