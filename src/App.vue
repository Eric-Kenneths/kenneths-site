<template>
<meta name="viewport" content="user-scalable=0, initial-scale=1.0">
  <div>
    <router-view />
  </div>
</template>

<script>
  import { appGlobal } from '@/store/global/appGlobal';

  export default {
    name: "App",
    components: {

    },
    setup() {

      return {
        appGlobal
      }
    }
  }
</script>

<style>

</style>