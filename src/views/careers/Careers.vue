<template>
  <div>
    testingadsfasdfasdfasdfasdfasdffffff
    <iframe :src="state.imageURL" class="tiktok"></iframe>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Careers',

    setup() {
      const state = reactive({
        imageURL: 'https://www.tiktok.com/embed/v2/7085803630888095018'
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
.tiktok {
  height: 55rem;
  width: 25rem;
  border: none;
}
</style>