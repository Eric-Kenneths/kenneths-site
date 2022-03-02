<template>
  <div>
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-6">
            <div>
              <img src="/src/assets/home/parallax/hairParallax.jpg" alt="" style="width: 100%">
            </div>
          </div>

          <div class="col-6">
            <div class="grid flex justify-content-center">
              <div class="col-10 ">
                <div class="flex justify-content-center text-3xl">
                  Hair & Style
                </div>

                <div class="grid mt-1 text-xl sans-serif">
                  <div class="col-12 text-right px-0">
                    <div class="flex flex-column">
                      <div>
                        <div style="float: left">Women's</div>
                        <div style="float: right">$47 +</div>
                      </div>

                      <div class="mt-3">
                        <div style="float: left">Blowout</div>
                        <div style="float: right">$39 +</div>
                      </div>

                      <div class="mt-3">
                        <div style="float: left">Special Occasion Style</div>
                        <div style="float: right">$66 +</div>
                      </div>

                      <div class="mt-3">
                        <div style="float: left">Men's</div>
                        <div style="float: right">$38 +</div>
                      </div>

                      <div class="mt-3">
                        <div style="float: left">Children's</div>
                        <div style="float: right">$32 +</div>
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
        services: []
      });

      const {
        getServicesByWhatGroup
      } = khsdsRepo();

      onMounted(async () => {
        await getServices();
      });

      async function getServices() {
        state.services = await getServicesByWhatGroup('HC');
      }
      
      return {
        state,
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
</style>