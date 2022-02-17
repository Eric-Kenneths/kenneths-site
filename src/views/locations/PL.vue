<template>
  <div>
    <div class="grid">
      <div class="col-4">
        <div class="grid flex justify-content-center ml-4">
          <div class="col-11 flex align-items-start justify-content-center video-frame">
            <video class="flex justify-content-center" autoplay loop>
             <source src="/src/assets/locations/pl/video.mp4">
            </video>
          </div>
        </div>
      </div>

      <div class="col-4 flex">
          <div class="flex align-items-start">
            <div class="flex flex-column">
              <div class="serif text-5xl">
                OAK CREEK CENTER
              </div>

              <div class="sans-serif text-3xl">
                
              </div>
            </div>
          </div>


      </div>

      <div class="col-4 test1">
        <div class="grid flex justify-content-start mr-7">
          <div class="col-12 test2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  
  export default {
    name: 'PL',

    setup() {
      const state = reactive({

      });

      return {
        state
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

.video-frame {
  height: 40rem;
}

video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>