<template>
  <div>
    <div class="grid mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-6 flex p-6">
            <div class="flex flex-column align-items-end justify-content-center">
              <div class="serif text-6xl">
                A Beautiful Experience.
              </div>

              <div class="sans-serif text-xl align-items text-right mt-2">
                Not sure what you're looking for? No worries, each service begins with an in-depth consultation. 
                This empowers our technicians to customize your service. If you don't see what you're looking for contact us for 
                more information. We can promise a personalized, extraordinary experience.
              </div>

              <div class="mt-4">
                <Button label="Book Now"/>
              </div>
            </div>
          </div>

          <div class="col-6 p-0">
            <div class="flex align-items-center justify-content-center">
              <img src="/src/assets/service/serviceMenuLower.jpg" alt="" class="flex align-items-center justify-content-center" style="width: 100%">
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