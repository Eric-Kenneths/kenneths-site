<template>
  <div>
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-6 flex px-6">
            <div class="flex flex-column align-items-end justify-content-center">
              <div class="serif text-right md:text-2xl lg:text-4xl xl:text-6xl">
                {{ department }} Services
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

    <!-- Servbice good for key -->
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid pt-6 pb-6" style="background-color: var(--grey)">
          <div class="col text-center" v-for="(goodFor, id) in state.goodFors" :key="id">
            <div class="col">
              <img :src="getImageSource(goodFor.goodForId)" alt="">
            </div>
            
            <div class="text-3xl">
              {{ goodFor.goodForDescription }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service menu -->
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-6 p-8" v-for="(service, id) in state.services" :key="id">
            <div class=" text-5xl serif bold">
              <b>{{ service.serviceDescription }}</b>
            </div>

            <div class="p-2" v-show="service.serviceGoodForLists !== undefined">
              <span>
                <img class="icon" v-for="(goodFor, id) in service.serviceGoodForLists" :key="id" 
                      :src="getImageSource(goodFor.goodForId)" alt="">
              </span>
            </div>

            <div class="sans-serif text-2xl">
              <b class="serif">Description:</b> {{ service.webDescription }}
            </div>

            <div class="sans-serif text-2xl">
              <b class="serif">Good for: </b> 
              <span v-for="(goodFor, gfid) in service.serviceGoodForLists" :key="gfid">{{ goodFor.goodForDescription }}<span v-show="service.serviceGoodForLists.length !== gfid + 1">, </span></span>
            </div>

            <!-- pairs with -->
          </div>
        </div>
      </div>
    </div>
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

    props: ['department'],

    setup(props, context) {
      const state = reactive({
        goodFors: [],
        services: []
      });

      window.scrollTo(0, 0);

      const {
        getServicesGlobal,
        getGoodForsByDepartment
      } = khsdsRepo();

      onMounted(async () => {
        await getServices();
      });

      async function getServices() {
        if (dataGlobal.services.lastPullDateTime === '' || minutesDifference(dataGlobal.services.lastPullDateTime, new Date()) > 30) {
          await getServicesGlobal();
        }

        state.services = dataGlobal.services.serviceList.filter(service => service.department === props.department);

        state.goodFors = await getGoodForsByDepartment(props.department);
      }

      function getImageSource(goodForId) {
        return '/src/assets/icon/serviceGuide/' + goodForId + '.png';
      }

      return {
        state,
        getServicesGlobal,
        getImageSource
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
</style>