<template>
  <div>
    <!-- Heading -->
    <div class="grid mx-2 md:ml-7 md:mr-2 lg:mx-7">
      <div class="col-12">
        <div class="grid flex align-items-center flex-column lg:flex-row">
          <div class="flex md:text-left md:col-12 lg:col-6 lg:pr-6 lg:text-right">
            <div class="flex flex-column justify-content-center">
              <div class="serif text-4xl md:text-5xl lg:text-4xl xl:text-6xl">
                {{ state.selectedCategory }} Services
              </div>
              
              <div v-show="state.selectedCategory === 'Hair'">
                <div class="sans-serif align-self-end mt-2 md:text-lg xl:text-xl">
                  We take your haircare as seriously as you do. Creative, fresh, and consistent - our results reflect a
                  dedication to education and excellence. The training our team receives is aggressive, consistent, innovative, and in-depth. 
                  It starts from the moment they are hired and continues through their entire career with us. No matter who you see, no
                  matter which location, you can be assured that the results will be beautiful.
                </div>

                <div class="sans-serif align-self-end mt-4 md:text-lg xl:text-xl">
                  Services vary by location. Our full offering of hair services are available at 
                  <a href="http://kenneths.com/locations" class="link">all of our locations</a>.
                </div>
              </div>

              <div v-show="state.selectedCategory === 'Nail'">
                <div class="sans-serif align-self-end mt-2 md:text-lg xl:text-xl">
                  Colorful polish, the elegant look of acrylics, or a relaxing pedicure - our nail services are a perfect way to practice 
                  self-care. Our experts are here and ready to treat you.
                </div>

                <div class="sans-serif align-self-end mt-4 md:text-lg xl:text-xl">
                  Services vary by location. Our full offering of nail services are available at the following locations: 
                  <a href="http://kenneths.com/locations/upper-arlington-hilliard-hair-salon-day-spa" class="link">Mill Run</a>, 
                  <a href="http://kenneths.com/locations/dublin-hair-salon-nail-spa-waxing-studio" class="link">Dublin</a>, 
                  <a href="http://kenneths.com/locations/grove-city-hair-salon-waxing-studio" class="link">Grove City</a>, 
                  <a href="http://kenneths.com/locations/upper-arlington-kingsdale-hair-salon-nail-spa-waxing-studio" class="link">Kingsdale</a>, 
                  <a href="http://kenneths.com/locations/pickerington-hair-salon-nail-spa-waxing-studio" class="link">Taylor Square</a>, 
                  <a href="http://kenneths.com/locations/polaris-parkway-lewis-center-hair-salon-day-spa" class="link">Polaris Parkway</a>, 
                  <a href="http://kenneths.com/locations/westerville-hair-salon-waxing-studio" class="link">Westerville</a>.
                </div>
              </div>

              <div v-show="state.selectedCategory === 'Spa'">
                <div class="sans-serif align-self-end mt-2 md:text-lg xl:text-xl">
                  Sometimes life can be a little hectic. Kenneth's spa services are the perfect way to slow down & rejuvenate. 
                  Whether your goal is purposeful, targeted skincare, ultimate full-body relaxation, or routine hair removal, 
                  Kenneth's has the offerings to fit your life.
                </div>

                <div class="sans-serif align-self-end mt-4 md:text-lg xl:text-xl">
                  Services vary by location. Our full offering of spa services are available at the following locations: 
                  <a href="http://kenneths.com/locations/upper-arlington-hilliard-hair-salon-day-spa" class="link">Mill Run</a>, 
                  <a href="http://kenneths.com/locations/new-albany-hair-salon-day-spa" class="link">New Albany</a>, 
                  <a href="http://kenneths.com/locations/pickerington-hair-salon-nail-spa-waxing-studio" class="link">Tyalor Square</a>, 
                  <a href="http://kenneths.com/locations/polaris-parkway-lewis-center-hair-salon-day-spa" class="link">Polaris Parkway</a>, 
                  <a href="http://kenneths.com/locations/upper-arlington-kingsdale-hair-salon-nail-spa-waxing-studio" class="link">Kingsdale</a>.
                </div>
              </div>

              <div class="mt-4">
                <Button label="Book Now" class="text-md md:text-lg xl:text-xl" @click="doRoute('appointmentBook')"/>
              </div>
            </div>
          </div>

          <!-- Photos -->
          <div class="col-6 md:pt-2 lg:p-0">
            <div class="flex align-items-center justify-content-center sm-frame md-frame">
              <img v-if="state.selectedCategory === 'Hair'" src="/static/service/serviceGuideHair.jpg" alt="" class="flex align-items-center justify-content-center sm-photo md-photo">
              <img v-if="state.selectedCategory === 'Nail'" src="/static/service/serviceGuideNails.jpg" alt="" class="flex align-items-center justify-content-center sm-photo md-photo">
              <img v-if="state.selectedCategory === 'Spa'" src="/static/service/serviceGuideSpa.jpg" alt="" class="flex align-items-center justify-content-center sm-photo md-photo">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <div class="grid md:ml-7 lg:mx-7 md:pb-1 md:pt-5 lg:py-3">
      <div class="col-12">
        <div class="grid text-xl md:text-2xl">
          <span class="col-4 text-center">
            <span class="select-none cursor-pointer uppercase text-500" id="Hair" @click="tri('Hair')">
              Hair
            </span>
          </span>

          <span class="col-4 text-center">
            <span class="select-none cursor-pointer uppercase text-500" id="Nail" @click="tri('Nail')">
              Nail
            </span>
          </span>

          <span class="col-4 text-center">
            <span class="select-none cursor-pointer uppercase text-500" id="Spa" @click="tri('Spa')">
              Spa
            </span>
          </span>
        </div>
      </div>
    </div>

    <!-- Departments -->
    <div class="grid py-3 md:ml-7 lg:mx-7" v-show="state.selectedCategory !== 'Hair'">
      <div class="col-12">
        <div class="grid">
          <span class="col text-center selection p-0" v-for="(department, id) in state.departments" :key="id">
            <input class="hidden" type="radio" name="department" :id="id" :value="department.code" v-model="state.department" @change="changeDepartment()"/>
            
            <label class="text-sm md:text-lg lg:text-lg selection-grey cursor-pointer select-none uppercase" style="letter-spacing: 0.075rem" :for="id">{{ department.description }}</label>
          </span>
        </div>
      </div>
    </div>
    
    <!-- Service good for key -->
    <div class="grid md:ml-7 lg:mx-7 py-2">
      <div class="col-12">
        <div class="grid pt-0 pb-4" style="background-color: var(--grey)">
          <div class="flex flex-column text-center col pt-0" v-for="(goodFor, gfid) in state.goodFors" :key="gfid">
            <div class="flex bar-g" :id="'gfa' + goodFor.goodForId">
            </div>

            <span class="md:text-xs lg:text-sm sans-serif cursor-pointer align-self-center justify-content-start select-none uppercase bold" :id="'gf' + goodFor.goodForId" @click="filterServices(goodFor.goodForId)">
              {{ goodFor.goodForDescription }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Services -->
    <div class="grid md:ml-7 lg:mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-12 md:col-6 py-4 xl:py-6 xl:px-4" v-for="(service, id) in state.servicesDisplay" :key="id" :id="service.serviceCode">
            <!-- Service name -->
            <div class="serif px-3 text-2xl pb-1 md:text-2xl md:pb-2 lg:text-3xl xl:text-5xl xl:pb-3">
              <b>{{ service.serviceDescription }}</b> <span class="sans-serif">{{ service.priceDescription }}</span>
            </div>

            <!-- Service good fors -->
            <div class="sans-serif px-3 py-1 text-xl md:py-2 md:text-xl xl:text-2xl xl:py-3" v-show="service.serviceGoodForLists.length > 0">
              Great for

              <span class="lowercase" v-for="(goodFor, gfid) in service.serviceGoodForLists" :key="gfid">{{ goodFor.goodForDescription }}<span v-show="service.serviceGoodForLists.length !== gfid + 1">, </span></span>
            </div>

            <!-- Service description -->
            <div class="sans-serif px-3 py-1 text-xl md:py-2 xl:text-2xl xl:py-3">
              <b class="serif">Description:</b> {{ service.webDescription }}
            </div>

            <!-- Pairs with -->
            <div class="sans-serif good-for my-2 p-3 text-xl xl:text-2xl xl:my-3" v-show="service.servicePairLists.length > 0">
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

    props: {
      department: null,
      category: null,
      serviceCode: null
    },

    setup(props, context) {
      const state = reactive({
        departments: [],
        department: props.department,        
        goodFors: [],
        serviceList: [],
        servicesDisplay: [],
        displayedGoodFor: 0,
        selectedCategory: props.category
      });

      window.scrollTo(0, 0);

      //const router = useRouter();

      const {
        getServicesGlobal,
        getGoodForsByDepartment
      } = khsdsRepo();

      onMounted(async () => {
        let element = document.getElementById(state.selectedCategory);
        if (element !== null) {
          element.className = element.className.replace('500', '900');
        }

        if (state.department !== undefined) {
          if (state.department !== null || state.department.trim() !== '') {

            if (state.department === 'E' || state.department === 'F' || 
                state.department === 'W' || state.department === 'M') {
              state.selectedCategory = 'Spa';
  
            } else if (state.department === 'N' || state.department === 'P') {
              state.selectedCategory = 'Nail';
  
            } else {
              state.selectedCategory = 'Hair';
            }

            await tri(state.selectedCategory)

            if (state.department !== 'H') {
              state.department = props.department;
            }

            await changeDepartment();

            let serviceElement = document.getElementById(props.serviceCode);

            if (serviceElement !== null) {
              serviceElement.scrollIntoView();
            }
          }
        } else {
          await changeCategory();
        }
      });

      function doRoute(cat) {
        switch (cat) {
          case 'appointmentBook':
            window.location.href = 'https://kenneths.com/Appointment-Book/login.aspx';
            break;
        }
      }

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
        }

        state.serviceList = dataGlobal.services.serviceList.filter(service => state.department === service.department);

        state.servicesDisplay = [...state.serviceList];

        state.goodFors = await getGoodForsByDepartment(state.department);
      }


      async function filterServices(goodForId) {
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

      async function changeDepartment() {
        if (state.displayedGoodFor !== 0) {
          let previous = document.getElementById('gfa' + state.displayedGoodFor);
          previous.className = previous.className.replace('bar-w', 'bar-g');
        }

        state.displayedGoodFor = 0;

        await getServices();
      }

      async function tri(newCategory) {
        if (newCategory !== state.selectedCategory) {

          let old = document.getElementById(state.selectedCategory);

          old.className = old.className.replace('900', '500');

          state.selectedCategory = newCategory;
        }

          let newer = document.getElementById(state.selectedCategory);

          newer.className = newer.className.replace('500', '900');

          if (state.displayedGoodFor !== 0) {
            await filterServices(state.displayedGoodFor);
          }

          await changeCategory();
      }

      return {
        state,
        getServicesGlobal,
        doRoute,
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
  .sm-frame {
    height: 12rem;
  }

  .sm-photo {
    height: 100%;
    width: auto;
  }
}

/* Medium screen (tablet) */
@media only screen and (min-width: 768px) {
  .md-frame {
    height: auto;
    width: auto;
  }

  .md-photo {
    height: 100%;
    width: 100%;
  }
}

/* Large screen */
@media only screen and (min-width: 992px) {

}

/* Extra large screen */
@media only screen and (min-width: 1200px) {

}

@media only screen and (min-width: 1500px) {

}

button {
  border-radius: 0px !important;
  background-color: var(--black) !important;
  color: var(--white) !important;
  border-width: 0px !important;
  border-color: var(--black) !important;
  box-shadow: transparent !important;
  font-family: 'lato', arial, helvetica !important;
}

.selection {
  border: 0px solid black;
}

.selection-grey {
  border: 0px solid black;
  border-bottom: 2px solid var(--grey);
}


input[type="radio"]:checked + label {
  font-weight: 800;
  border-bottom: 2px solid black;
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
  margin: 0 auto auto auto;
}

.good-for {
  background-color: var(--black);
  color: var(--white);
}

.link {
  border: 0px;
  color: var(--black);
}

.link:hover {
  color: var(--grey);
}
</style>