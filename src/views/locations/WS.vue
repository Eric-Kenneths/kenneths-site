<template>
  <div>
    <!-- Banner -->
    <div class="grid mb-1 parallax-banner-sm parallax-banner-sh parallax-banner-md parallax-banner-lg parallax-banner-xl md:mb-0" style="background-color: var(--white)">
      <!-- Banner Text -->
      <div class="flex col-5 md:col-5">
        <div class="serif flex align-items-center text-4xl text-right z-1 negative-margin md:text-7xl xl:text-8xl" style="color: var(--black)">
          Westerville Salon + Spa Studio
        </div>
      </div>

      <!-- Video -->
      <div class="flex col-7 justify-content-start align-items-center md:py-7 md:col-7">
        <video class="flex justify-content-center location-video-md location-video-lg location-video-xl" autoplay loop muted>
          <source src="/static/locations/ws/video.mp4">
        </video>
      </div>
    </div>

    <!-- Information -->
    <div class="grid mt-0 flex flex-column lg:flex-row md:ml-7 lg:mx-7" style="background-color: var(--black)">
      <!-- Map -->
      <div class="flex-order-1 col-12 lg:flex-order-0 lg:col-6 xl:col-offset-1">
        <iframe class="map-sm map-md map-lg map-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.8911920434753!2d-82.92489508465532!3d40.14470738006239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838f5976cb97517%3A0xca34fbc241e32699!2sKenneth&#39;s+Hair+Salons+%26+Day+Spas!5e0!3m2!1sen!2sus!4v1533579617678"></iframe>
      </div>

      <!-- Details -->
      <div class="col-12 md:flex-order-0 md:col-12 lg:flex-order-1 lg:col-6 xl:col-5">
        <!-- Address -->
        <div class="grid" style="height: 50%">
          <div class="col-12 flex justify-content-center xl:justify-content-start align-items-center">
            <div class="text-left sans-serif text-3xl lg:text-4xl xl:text-5xl" style="color: white">
              <a class="address" href="https://maps.google.com/?q=726+North+State+St,+Westerville,+OH+43082" target="_blank">
                <a class="address" href="https://maps.apple.com/maps?q=726+North+State+St,+Westerville,+OH+43082" target="_blank">
                  <div>
                    Northridge Center
                  </div>
  
                  <div>
                    726 North State St
                  </div>
  
                  <div>
                    Westerville, Ohio 43082
                  </div>
                </a>
              </a>
            </div>
          </div>
        </div>

        <!-- Hours -->
        <div class="grid flex justify-content-center lg:justify-content-end xl:justify-content-start mt-3" style="height: 50%; color: white">
          <div class="sans-serif flex flex-column justify-content-start col-7 text-xl md:col-offset-3 md:col-5 md:text-xl lg:col-7 lg:col-offset-0 lg:text-xl xl:text-2xl">
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

          <!-- Hours Text -->
          <div class="sm:col md:col-4">
            <div class="serif rotate text-5xl md:text-6xl lg:text-7xl">
              Hours
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Emmployees -->
    <div class="grid parallax-location-lg parallax-location-xl mt-4 md:mt-0 md:ml-7 lg:mr-7 lg:ml-8 xl:px-8">
      <!-- List of Employees -->
      <div class="col-12 flex flex-column justify-content-center md:flex-order-0 lg:col-6">
        <div class="grid sans-serif text-lg">
          <!-- Location Name -->
          <div class="col-12 serif text-center text-4xl lg:text-5xl">
            Our Westerville family
          </div>

          <!-- Managers and Desk -->
          <div class="col-12 sans-serif text-center text-xl md:text-2xl lg:text-3xl name h-auto">
            Lead by <span v-for="(employee, id) in state.employees.manager" :key="id">{{ employee.emalias }}<span v-if="id !== state.employees.manager.length - 1">, </span></span>
             and supported by <span v-for="(employee, id) in state.employees.desk" :key="id"> {{ employee.emalias }}<span v-if="id !== state.employees.desk.length - 1">, </span></span>
          </div>

          <!-- Hair Text -->
          <div class="col-2 serif rotate text-left text-5xl md:text-6xl lg:text-7xl lg:mt-4 xl:text-8xl xl:mt-7" v-if="state.employees.hair.length > 0">
            HAIR
          </div>

          <!-- Hair Employees -->
          <div class="col-10 lg:mt-4 xl:mt-6" v-if="state.employees.hair.length > 0">
            <div class="grid">
              <div class="sans-serif text-center text-xl col-4 md:col-3 lg:p-0 xl:p-2" v-for="(employee, id) in state.employees.hair" :key="id">
                <div class="name flex justify-content-center align-items-center" :style="styleInstagram(employee.username)"
                      @click="goToInstagram(employee.username)">
                  {{ employee.emalias }}
                </div>
              </div>
            </div>
          </div>

          <!-- Nails Employees -->
          <div class="col-2 serif rotate text-left text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-7" v-if="state.employees.nail.length > 0">
            Nails
          </div>

          <!-- Nails Employees -->
          <div class="col-10 mt-6" v-if="state.employees.nail.length > 0">
            <div class="grid">
              <div class="sans-serif text-center text-xl col-4 md:col-3 lg:p-0 xl:p-2" v-for="(employee, id) in state.employees.nail" :key="id">
                <div class="name flex justify-content-center align-items-center" :style="styleInstagram(employee.username)"
                      @click="goToInstagram(employee.username)">
                  {{ employee.emalias }}
                </div>
              </div>
            </div>
          </div>

          <!-- Spa Text -->
          <div class="col-2 serif rotate text-left text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-7" v-if="state.employees.spa.length > 0">
            Spa
          </div>

          <!-- Spa Employees -->
          <div class="col-10 mt-6" v-if="state.employees.spa.length > 0">
            <div class="grid">
              <div class="sans-serif text-center text-xl col-4 md:col-3 lg:p-0 xl:p-2" v-for="(employee, id) in state.employees.spa" :key="id">
                <div class="name flex justify-content-center align-items-center" :style="styleInstagram(employee.username)"
                      @click="goToInstagram(employee.username)">
                  {{ employee.emalias }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Photo -->
      <div class="col-12 flex justify-content-center md:flex-order-1 md:justify-content-end md:align-items-center md:col-5 lg:col-6 lg:justify-content-start lg:align-items-center lg:pl-8">
        <img src="/static/home/location.jpg" alt="creative" class="photo-location-sm photo-location-md photo-location-lg photo-location-xl hidden lg:block">
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import { employeeRepo } from '@/store/repository/employeeRepo.js'

  export default {
    name: 'WS',

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
        let employeeList = await getEmployeesByLocationWithSocialMedia('ws');

        state.employees.manager = employeeList.filter(employee => employee.positionId === 4 || employee.positionId === 5 || 
                                                                  employee.positionId === 6 || employee.positionId === 113000003);
        
        state.employees.desk = employeeList.filter(employee => employee.positionId === 8 || employee.positionId === 113000004);

        state.employees.hair = employeeList.filter(employee => employee.positionId === 26);
     
        state.employees.nail = employeeList.filter(employee => employee.positionId === 34);

        state.employees.spa = employeeList.filter(employee => employee.positionId === 33 || employee.positionId === 35 || 
                                                              employee.positionId === 43);
      }

      function styleInstagram(username) {
        let thisStyle = {
          backgroundColor: 'var(--white)'
        }

        if (username !== '' && username !== null) {
          thisStyle.backgroundImage = "linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url('/static/image/Instagram.png')";
          thisStyle.backgroundPosition = "center";
          thisStyle.backgroundRepeat = "no-repeat";
          thisStyle.backgroundSize = "6rem 6rem";
          thisStyle.cursor = "pointer !important";
        }

        return thisStyle;
      }

      function goToInstagram(username) {
        if (username !== '' && username !== null) {
          window.open('https://www.instagram.com/' + username);
        }
      }

      return {
        state,
        getEmployees,
        styleInstagram,
        goToInstagram
      }
    }
  }
</script>

<style scoped>
  /* Small screen (phone) */
  @media only screen and (min-width: 1px) {
    .map-sm {
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
      width: 100%;
      height: 30rem;
      margin: auto;
    }

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
      width: 0%;
    }
  }

  @media only screen and (min-width: 570px) {
    .parallax-banner-sh {
      height: 39rem;
    }
  }

  /* Medium screen (tablet) */
  @media only screen and (min-width: 768px) {
    .map-md{
      width: 100%;
      height: 30rem;
      margin: auto;
    }

    .location-video-md {
      width: 65%;
    }

    .photo-md {
      width: 100%;
      height: auto;
      margin: 0
    }

    .parallax-banner-md {
      background-image: url('/static/locations/ws/bannerParallax.jpg');
      background-repeat: no-repeat;
      background-position: top right 0px;
      background-size: 55% 100%;
      height: 46%;
    }

    .photo-location-md {
      height: auto;
      width: 0%;
    }

    .parallax-location-md {
      background-image: linear-gradient(var(--blue), var(--light-blue));
      background-attachment: fixed;
      background-position: right;
      background-repeat: no-repeat;
      background-size: 35% 60%;
      flex-direction: unset !important;
    }
  }

  /* Large screen */
  @media only screen and (min-width: 992px) {
    .map-lg {
      width: 100%;
      height: 40em;
      margin: 20px 20px 20px 20px;
    }

    .parallax-banner-lg {
      background-size: 50% 150%;
      height: 45rem;
    }

    .photo-location-lg {
      width: 45%;
      height: auto;
    }

    .parallax-location-lg {
      background-image: url('/static/locations/ws/otherParallax.jpg');
      background-attachment: fixed;
      background-position: right;
      background-repeat: no-repeat;
      background-size: 40% 100%;
      height: auto;
    }

    .location-video-lg {
      width: 60%;
    }
  }
  
  /* Extra large screen */
  @media only screen and (min-width: 1200px) {
    .parallax-banner-xl {
      background-position: right;
      background-size: 45% 150%;
      height: 52rem;
    }

    .map-xl {
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
      width: 80%;
      height: 35rem;
      margin: 5% 2% 5% 0%;
    }

    .photo-location-xl {
      height: auto;
      width: 65%;
    }

    .parallax-location-xl {
      background-attachment: fixed;
      background-position: right;
      background-repeat: no-repeat;
      background-size: 37% 100%;
    }

    .location-video-xl {
      width: 45%;
      height: auto;
    }
  }

  .negative-margin {
    margin: 0 -7rem 0 0;
  }

  .rotate {
    writing-mode: vertical-rl;
  }

  .address {
    color: var(--white);
    text-decoration: none;
  }

  .name {
    font-weight: 800;
    height: 6rem;
    cursor: default;
  }

  .rotate {
    writing-mode: vertical-rl;
  }

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>