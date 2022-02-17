<template>
  <div>
    <div class="grid mt-1 lg:mx-7">
      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">Arlington-Hilliard</h2>
              </div>
            </div>
          </div>
          
          <img src="/src/assets/locations/mr/banner.jpg" alt="Add later" class="photo" @click="doRoute('mr')">
        </div>
      </div>

      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">Dublin</h2>
              </div>
            </div>
          </div>

          <img src="/src/assets/locations/av/banner.jpg" alt="Add later" class="photo">
        </div>
      </div>

      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">Grove City</h2>
              </div>
            </div>
          </div>

          <img src="/src/assets/locations/gr/banner.jpg" alt="Add later" class="photo">
        </div>
      </div>
    </div>

    <div class="grid mt-4 lg:mx-7">
      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">Kingsdale</h2>
              </div>
            </div>
          </div>

          <img src="/src/assets/locations/kd/banner.jpg" alt="Add later" class="photo">
        </div>
      </div>

      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">New Albany</h2>
              </div>
            </div>
          </div>

          <img src="/src/assets/locations/ng/banner.jpg" alt="Add later" class="photo">
        </div>
      </div>

      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">Pickerington</h2>
              </div>
            </div>
          </div>

          <img src="/src/assets/locations/ts/banner.jpg" alt="Add later" class="photo">
        </div>
      </div>
    </div>

    <div class="grid mt-4 lg:mx-7">
      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">Polaris Parkway</h2>
              </div>
            </div>
          </div>

          <img src="/src/assets/locations/pl/banner.jpg" alt="Add later" class="photo" @click="doRoute('pl')">
        </div>
      </div>

      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">Powell</h2>
              </div>
            </div>
          </div>

          <img src="/src/assets/locations/pw/banner.jpg" alt="Add later" class="photo">
        </div>
      </div>

      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">Westeville</h2>
              </div>
            </div>
          </div>

          <img src="/src/assets/locations/ws/banner.jpg" alt="Add later" class="photo">
        </div>
      </div>
    </div>

    <div class="grid mt-4 lg:mx-7">
      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">Worthington</h2>
              </div>
            </div>
          </div>

          <img src="/src/assets/locations/wp/banner.jpg" alt="Add later" class="photo">
        </div>
      </div>

      <div class="col-4">
        <div>
          <div class="flex flex-column">
            <div class="flex align-items-center justify-content-center">
              <div class="absolute white mt-1">
                <h2 class="serif text-4xl">Kenneth's Academy</h2>
              </div>
            </div>
          </div>

          <img src="/src/assets/locations/at/banner.jpg" alt="Add later" class="photo">
        </div>
      </div>

      <div class="col-4">
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Locations',

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
            state.sidebarVisible = false;
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

h2 {
  margin: -1.5rem 1rem .5rem 1rem;
  font-weight: normal;
  
}

.white {
  background-color: var(--white);
  z-index: 101;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

.photo {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform  0.40s;
}

.photo:hover{
  transform: scale(1.05);
  z-index: 100;
}
</style>