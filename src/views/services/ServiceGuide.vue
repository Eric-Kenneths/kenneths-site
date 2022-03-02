<template>
  <div>
    
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'ServiceMenu',

    setup() {
      const state = reactive({

      });

      const router = useRouter();

      function doRoute(whereTo) {
        switch (whereTo) {
          case 'mr':
            router.push('/locations/upper-arlington-hilliard-hair-salon-day-spa');
            break;

          case 'pl':
            router.push('/locations/polaris-parkway-lewis-center-hair-salon-day-spa');
            break;

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
</style>