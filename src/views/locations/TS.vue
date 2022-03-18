<template>
  <div>
    <div class="grid mb-1 parallax-banner-sm parallax-banner-sh parallax-banner-md parallax-banner-lg md:mb-0">
      <div class="flex col-9 justify-content-end align-items-center md:py-7 md:col-7">
        <video class="flex justify-content-center photo-sm photo-md photo-lg cursor-pointer" autoplay loop muted>
            <source src="/src/assets/locations/ts/video.mp4">
          </video>
      </div>

      <div class="flex col-3 md:col-5">
        <div class="serif flex align-items-center text-4xl text-left z-1 negative-margin md:text-7xl lg:text-8xl xl:text-8xl">
          Taylor Square Salon + Spa Studio
        </div>
      </div>
    </div>

    <div class="grid mt-0 lg:mx-7" style="background-color: var(--black)">
      <div class="col-6">
        <iframe class="map-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.7439463945657!2d-83.16356407378912!3d40.103421493880774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883893542a22b9eb%3A0x496eeac0990c9c4e!2sKenneth&#39;s+Hair+Salons+%26+Day+Spas!5e0!3m2!1sen!2sus!4v1533570095385"></iframe>
      </div>

      <div class="col-6">
        <div class="grid" style="height: 50%">
          <div class="col-12 flex flex-column justify-content-center align-items-center">
            <div class="text-center sans-serif text-5xl" style="color: white">
              <a class="address" href="https://maps.google.com/?q=2865+Taylor+Rd+Ext,+Reynoldsburg,+OH+43068" target="_blank">
              <a class="address" href="https://maps.apple.com/maps?q=2865+Taylor+Rd+Ext,+Reynoldsburg,+OH+43068" target="_blank">
                <div>
                  Taylor Square Center
                </div>

                <div>
                  2865 Taylor Rd Ext
                </div>

                <div>
                  Reynoldsburg, Ohio 43068
                </div>
                </a>
              </a>
            </div>
          </div>
        </div>

        <div class="grid flex" style="height: 50%; color: white">
          <div class="sans-serif col-5 col-offset-3 flex flex-column text-2xl">
            <div>
              <div style="float: left">MON</div>
              <div style="float: right">8:30am - 7:30pm</div>
            </div>

            <div>
              <div style="float: left">TUE</div>
              <div style="float: right">8:30am - 7:30pm</div>
            </div>

            <div>
              <div style="float: left">WED</div>
              <div style="float: right">8:30am - 7:30pm</div>
            </div>

            <div>
              <div style="float: left">THU</div>
              <div style="float: right">8:30am - 7:30pm</div>
            </div>

            <div>
              <div style="float: left">FRI</div>
              <div style="float: right">8:30am - 7:30pm</div>
            </div>

            <div>
              <div style="float: left">SAT</div>
              <div style="float: right">8:30am - 4:00pm</div>
            </div>

            <div>
              <div style="float: left">SUN</div>
              <div style="float: right">CLOSED</div>
            </div>
          </div>

          <div class="col-4">
            <div class="serif rotate text-7xl">
              Hours
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid parallax-location-sm parallax-location-md parallax-location-lg parallax-location-xl mt-4 md:mt-0 md:ml-7 lg:mr-7 lg:ml-4 xl:p-8">
      <div class="col-12 flex flex-column justify-content-center md:flex-order-0 md:col-6">
        <div class="grid sans-serif text-lg">
          <div class="col-12 serif text-center text-5xl">
            Our Taylor Square family
          </div>

          <div class="col-12 sans-serif text-center text-xl">
            Lead by <span v-for="(employee, id) in state.employees.manager" :key="id">{{ employee.emalias }}<span v-if="id !== state.employees.manager.length - 1">, </span></span>
          </div>

          <div class="col-12 serif text-center text-3xl mt-4">
            Supported by
          </div>

          <div class="col-3 sans-serif text-center text-xl" v-for="(employee, id) in state.employees.desk" :key="id">
            {{ employee.emalias }}
          </div>
        
          <div class="col-12 serif text-center text-3xl mt-5">
            Hair
          </div>

          <div class="col-3 sans-serif text-center text-xl" v-for="(employee, id) in state.employees.hair" :key="id">
            {{ employee.emalias }}
          </div>

          <div class="col-12 serif text-center text-3xl mt-5">
            Nail
          </div>

          <div class="col-3 sans-serif text-center text-xl" v-for="(employee, id) in state.employees.nail" :key="id">
            {{ employee.emalias }}
          </div>

          <div class="col-12 serif text-center text-3xl mt-5">
            Spa
          </div>

          <div class="col-3 sans-serif text-center text-xl" v-for="(employee, id) in state.employees.spa" :key="id">
            {{ employee.emalias }}
          </div>
        </div>
      </div>

      <div class="col-12 flex justify-content-center md:flex-order-1 md:justify-content-end md:align-items-center md:col-6 lg:justify-content-start lg:align-items-center lg:pl-8">
        <img src="/src/assets/locations/ts/regularImage.jpg" alt="creative" class="photo-location-sm photo-location-md photo-location-lg photo-location-xl md:rellax">
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import { employeeRepo } from '@/store/repository/employeeRepo.js'

  export default {
    name: 'TS',

    setup() {
      const state = reactive({
        employees: {
          manager: [],
          desk: [],
          hair: [],
          nail: [],
          spa: []
        }
      });
      
      window.scrollTo(0, 0);

      const {
        getEmployeesByLocationWithSocialMedia
      } = employeeRepo();

      getEmployees();

      async function getEmployees() {
        let employeeList = await getEmployeesByLocationWithSocialMedia('mr');

        state.employees.manager = employeeList.filter(employee => employee.positionId === 4 || employee.positionId === 5 || employee.positionId === 6);
        
        state.employees.desk = employeeList.filter(employee => employee.positionId === 8 || employee.positionId === 113000004);

        state.employees.hair = employeeList.filter(employee => employee.positionId === 26);

        state.employees.nail = employeeList.filter(employee => employee.positionId === 34);

        state.employees.spa = employeeList.filter(employee => employee.positionId === 33 || employee.positionId === 35 || employee.positionId === 43);
      }

      return {
        state,
        getEmployees
      }
    }
  }
</script>

<style scoped>
  /* Small screen (phone) */
  @media only screen and (min-width: 1px) {
    .parallax-banner-sm {
      height: 28rem;
    }

    .photo-sm {
      width: 70%;
      height: auto;
      margin: auto 0px auto auto
    }

    .photo-location-sm {
      height: auto;
      width: 50%;
    }

    .parallax-location-sm {
      background-image: linear-gradient(var(--light-tan), var(--light-tan));
      background-attachment: fixed;
      background-position: bottom center 0px;
      background-repeat: no-repeat;
      background-size: 100% 50%;
      flex-direction: column-reverse !important;
    }
  }

  @media only screen and (min-width: 570px) {
    .parallax-banner-sh {
      height: 39rem;
    }
  }

  /* Medium screen (tablet) */
  @media only screen and (min-width: 768px) {
    .photo-md {
      width: 100%;
      height: auto;
      margin: 0
    }

    .parallax-banner-md {
      background-image: url('/src/assets/home/parallax/bannerParallax.jpg');
      /* background-color: var(--white); */
      /* background-attachment: fixed; */
      /* background-position: right; */
      background-repeat: no-repeat;
      background-size: 55% 100%;
      height: 46%;
    }

    .photo-location-md {
      height: auto;
      width: 80%;
    }

    .parallax-location-md {
      background-image: linear-gradient(var(--light-red), var(--light-red));
      background-attachment: fixed;
      background-position: center left 0px;
      background-repeat: no-repeat;
      background-size: 90% 50%;
      flex-direction: unset !important;
    }
  }

  /* Large screen */
  @media only screen and (min-width: 992px) {
    .parallax-banner-lg {
      background-image: url('/src/assets/locations/ts/bannerParallax.jpg');
      /* background-color: var(--white); */
      /* background-attachment: fixed; */
      /* background-position: left; */
      /* background-repeat: no-repeat; */
      background-size: auto 150%;
      height: 52rem;
    }

    .photo-lg {
      width: 45%;
      height: auto;
    }

    .parallax-location-lg {
      background-image: url('/src/assets/locations/ts/otherParallax.jpg');
      background-attachment: fixed;
      background-position: right;
      background-repeat: no-repeat;
      background-size: 40% 100%;
      height: auto;
    }

    .location-video-lg {
      width: 80%;
    }
  }
  
  /* Extra large screen */
  @media only screen and (min-width: 1200px) {
    .map-xl {
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
      width: 100%;
      height: 35rem;
    }

    .photo-location-xl {
      height: auto;
      width: 85%;
    }

    .parallax-location-xl {
      background-attachment: fixed;
      background-position: right;
      background-repeat: no-repeat;
      background-size: 37% 100%;
    }
  }

  .negative-margin {
    margin: 0 0 0 -4rem;
  }

  .rotate {
    writing-mode: vertical-rl;
  }

  .address {
    color: var(--white);
  }

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>