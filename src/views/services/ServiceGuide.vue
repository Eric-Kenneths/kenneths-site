<template>
  <div>
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-6 flex px-6">
            <div class="flex flex-column align-items-end justify-content-center">
              <div class="serif text-right md:text-2xl lg:text-4xl xl:text-6xl">
                {{ state.selectedCategory }} Services
              </div>
              
              <div v-show="state.selectedCategory === 'Hair'">
                <div class="sans-serif lg:text-lg xl:text-xl align-self-end text-right mt-2">
                  We take your haircare as seriously as you do. Creative, fresh, and consistent - our results reflect a
                  dedication to education and excellence. The training our team receives is aggressive, consistent, innovative, and in-depth. 
                  It starts from the moment they are hired and continues through their entire career with us. No matter who you see, no
                  matter which location, you can be assured that the results will be beautiful.
                </div>

                <div class="sans-serif lg:text-lg xl:text-xl align-self-end text-right mt-4">
                  Services vary by location. Our full offering of hair services are available at all of our locations.
                </div>
              </div>

              <div v-show="state.selectedCategory === 'Nail'">
                <div class="sans-serif lg:text-lg xl:text-xl align-self-end text-right mt-2">
                  Colorful polish, the elegant look of acrylics, or a relaxing pedicure - our nail services are a perfect way to practice 
                  self-care. Our experts are here and ready to treat you.
                </div>

                <div class="sans-serif lg:text-lg xl:text-xl align-self-end text-right mt-4">
                  Services vary by location. Our full offering of nail services are available at the following locations: **__________.
                </div>
              </div>

               <div v-show="state.selectedCategory === 'Spa'">
                  <div class="sans-serif lg:text-lg xl:text-xl align-self-end text-right mt-2">
                    Sometimes life can be a little hectic. Kenneth's spa services are the perfect way to slow down & rejuvenate. 
                    Whether your goal is purposeful, targeted skincare, ultimate full-body relaxation, or routine hair removal, 
                    Kenneth's has the offerings to fit your life.
                  </div>

                  <div class="sans-serif lg:text-lg xl:text-xl align-self-end text-right mt-4">
                    Services vary by location. Our full offering of spa services are available at the following locations: **__________.
                  </div>
                </div>

              <div class="mt-4">
                <Button label="Book Now"/>
              </div>
            </div>
          </div>

          <div class="col-6 p-0">
            <div class="flex align-items-center justify-content-center">
              <img src="/static/service/serviceMenuLower.jpg" alt="" class="flex align-items-center justify-content-center" style="height: 100%; width: 100%">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid mx-7 py-3">
      <div class="col-12">
        <div class="grid text-lg">
          <span class="col text-center">
            <span class="cursor-pointer uppercase text-500" id="Hair" @click="tri('Hair')">
              Hair
            </span>
          </span>

          <span class="col-4 text-center">
            <span class="cursor-pointer uppercase text-500" id="Nail" @click="tri('Nail')">
              Nail
            </span>
          </span>

          <span class="col-4 text-center">
            <span class="cursor-pointer uppercase text-500" id="Spa" @click="tri('Spa')">
              Spa
            </span>
          </span>
        </div>
      </div>
    </div>

    <div class="grid mx-7 py-3" v-show="state.selectedCategory !== 'Hair'">
      <div class="col-12">
        <div class="grid">
          <span class="col text-center selection" v-for="(department, id) in state.departments" :key="id">
            <input class="hidden" type="radio" name="department" :id="id" :value="department.code" v-model="state.department" @change="changeDepartment()"/>
            
            <label class="text-lg cursor-pointer select-none uppercase" :for="id">{{ department.description }}</label>
          </span>
        </div>
      </div>
    </div>
    
    <!-- Service good for key -->
    <div class="grid mx-7 py-2">
      <div class="col-12">
        <div class="grid pt-0 pb-4" style="background-color: var(--grey)">
          <div class="flex flex-column text-center col pt-0" v-for="(goodFor, gfid) in state.goodFors" :key="gfid">
            <div class="flex bar-g" :id="'gfa' + goodFor.goodForId">
            </div>

            <span class="text-lg sans-serif cursor-pointer align-self-center justify-content-start select-none uppercase" :id="'gf' + goodFor.goodForId" @click="filterServices(goodFor.goodForId)">
              {{ goodFor.goodForDescription }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Services -->
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-6 p-6" v-for="(service, id) in state.servicesDisplay" :key="id" :id="service.serviceCode">
            <!-- Service name -->
            <div class="text-5xl serif pb-3">
              <b>{{ service.serviceDescription }}</b> <span class="sans-serif">{{ service.priceDescription }}</span>
            </div>

            <!-- Serivce price -->
            <!-- <div class="sans-serif text-2xl p-3"> -->
              <!-- <b class="serif">Price: </b> -->
<!--  -->
              <!-- {{ service.priceDescription }} -->
            <!-- </div> -->

            <!-- Service good fors -->
            <div class="sans-serif text-2xl p-3">
              Great for

              <span class="lowercase" v-for="(goodFor, gfid) in service.serviceGoodForLists" :key="gfid">{{ goodFor.goodForDescription }}<span v-show="service.serviceGoodForLists.length !== gfid + 1">, </span></span>
            </div>

            <!-- Service description -->
            <div class="sans-serif text-2xl p-3">
              <b class="serif">Description:</b> {{ service.webDescription }}
            </div>

            <!-- Service good fors -->
            <!-- <div class="sans-serif text-2xl"> -->
              <!-- <b class="serif">Good for: </b>  -->
<!--  -->
              <!-- <span v-for="(goodFor, gfid) in service.serviceGoodForLists" :key="gfid">{{ goodFor.goodForDescription }}<span v-show="service.serviceGoodForLists.length !== gfid + 1">, </span></span> -->
            <!-- </div> -->

            <!-- Pairs with -->
            <div class="sans-serif text-2xl good-for my-3 p-3" v-show="service.servicePairLists.length > 0">
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
        displayedGoodFor: 0,
        selectedCategory: props.category
      });

      window.scrollTo(0, 0);

      const {
        getServicesGlobal,
        getGoodForsByDepartment
      } = khsdsRepo();

      onMounted(async () => {
        let element = document.getElementById(state.selectedCategory);
        element.className = element.className.replace('500', '900');

        await changeCategory();
      });

      async function changeCategory() {
        if (state.selectedCategory === 'Hair') {
          state.departments = [{
                                code: 'H',
                                description: 'Hair'
                              }];
        } else if (state.selectedCategory === 'Spa') {
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
        } else if (state.selectedCategory === 'Nail') {
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
      }

      async function getServices() {
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
        console.log('here')
        if (state.displayedGoodFor === goodForId) {
          state.servicesDisplay = state.serviceList;

          var element = document.getElementById('gfa' + goodForId);

          element.className = element.className.replace('bar-w', 'bar-g');

          state.displayedGoodFor = 0;

        } else {
          if (state.displayedGoodFor !== 0) {
            var previous = document.getElementById('gfa' + state.displayedGoodFor);

            previous.className = previous.className.replace('bar-w', 'bar-g');
          }

          var newSelection = document.getElementById('gfa' + goodForId);

          newSelection.className = newSelection.className.replace('bar-g', 'bar-w');

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
        if (state.displayedGoodFor !== 0) {
          let previous = document.getElementById('gfa' + state.displayedGoodFor);
          previous.className = previous.className.replace('bar-w', 'bar-g');
        }

        state.displayedGoodFor = 0;

        getServices();
      }

      async function tri(newCategory) {
        if (newCategory !== state.selectedCategory) {

          let old = document.getElementById(state.selectedCategory);

          old.className = old.className.replace('900', '500');

          state.selectedCategory = newCategory;

          let newer = document.getElementById(state.selectedCategory);

          newer.className = newer.className.replace('500', '900');

          if (state.displayedGoodFor !== 0) {
            await filterServices(state.displayedGoodFor);
          }

          await changeCategory();
        }
      }

      return {
        state,
        getServicesGlobal,
        //getImageSource,
        filterServices,
        changeDepartment,
        changeCategory,
        tri
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
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid var(--grey);
  margin: auto auto;
}

.bar-w {
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid var(--white);
  margin: auto auto;
}

.good-for {
  background-color: var(--black);
  color: var(--white);
}
</style>