<template>
  <div>
    testingadsfasdfasdfasdfasdfasdf
    <video-embed src="https://www.tiktok.com/@kennethssalonandspa/video/7080239002674007338?is_from_webapp=1&sender_device=pc&web_id=7080585645789644331"></video-embed>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Careers',

    setup() {
      const state = reactive({

      });

      window.scrollTo(0, 0);

      const router = useRouter();

      function doRoute(whereTo) {
        switch (whereTo) {
          case 'locations':
            router.push('/locations');
            break;
        }
      }

      return {
        state,
        doRoute
      }
    }
  }
</script>

<style scoped>
</style>