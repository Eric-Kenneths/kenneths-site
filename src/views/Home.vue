<template>
  <div>
    <!-- Banner -->
    <div class="grid mb-0 parallax-banner-sm parallax-banner-sh parallax-banner-md parallax-banner-lg md:mb-0">
      <!-- Text -->
      <div class="flex col-3 md:col-4 md:col-offset-1">
        <div class="serif flex align-items-center text-4xl text-right z-1 negative-margin md:text-7xl lg:text-8xl xl:text-8xl">
          A partner in life's most memorable moments
        </div>
      </div>

      <!-- Image -->
      <div class="flex col-9 justify-content-start align-items-center md:py-7 md:col-7">
        <img src="/static/home/banner.jpg" alt="Whatever" 
              class="photo-banner-sm photo-banner-sh photo-banner-md photo-banner-lg photo-banner-xl">
      </div>
    </div>

    <!-- Video -->
    <div class="grid mt-0 md:ml-7 lg:mx-7">
      <div class="col-12 py-0 px-0">
        <div class="flex flex-row align-items-center justify-content-center text-6xl square">
          <video class="flex justify-content-center video" autoplay loop muted>
            <source src="/static/home/horizontal.mp4">
          </video>
        </div>
      </div>
    </div>

    <!-- First section -->
    <div class="grid align-items-center parallax-creative-sm parallax-creative-md parallax-creative-lg parallax-creative-xl mt-4 sm:p-0 md:mt-0 md:ml-7 md:mb-0 md:pb-7 lg:mx-7"> 
      <!-- Image/Video -->
      <div class="col-12 flex justify-content-center p-0 mt-2 md:justify-content-end md:col-4 lg:col-5">
        <img src="/static/home/location.jpg" alt="creative" class="mt-3 photo-creative-sm photo-creative-md photo-creative-lg photo-creative-xl">
      </div>

      <!-- Text -->
      <div class="col-12 flex flex-column mt-4 md:col-8 lg:col-7">
        <div class="text-background-sm text-background-lg p-4 md:ml-4 lg:px-7">
          <!-- Heading -->
          <div class="pt-1 px-6 serif text-2xl justify-content-center align-items-center flex flex-column md:flex-row md:text-xl md:px-4 lg:text-3xl lg:px-6">
            CREATIVE
            <Divider class="block md:hidden"/>
            <Divider class="hidden md:block" layout="vertical"/>
            AUTHENTIC
            <Divider class="block md:hidden"/>
            <Divider class="hidden md:block" layout="vertical"/>
            CONSISTENT
          </div>
  
          <!-- Subtext -->
          <div class="pb-3 sans-serif text-left text-lg mt-3 md:px-4 lg:px-6">
            At Kenneth's, we believe we are greater as a team than we are as individuals. We go about things authentically, lifting people 
            up and offering a space where our guests can realize their natural beauty. Inclusivity, creativity and consistency - these are more 
            than just words to us. They are the values and attitude we put behind everything we do. Five generations strong, we serve our guests, 
            our staff and our community with pride and gratitude. Come experience the difference at Kenneth's Salons + Day Spas - we can't wait 
            to serve you.
          </div>
        </div>
      </div>
    </div>
    
    <!-- Second Section -->
    <div class="grid parallax-location-sm parallax-location-md parallax-location-lg parallax-location-xl mt-4 md:mt-0 md:ml-7 lg:mx-7 xl:p-8">
      <!-- Text -->
      <div class="col-12 flex justify-content-center md:flex-order-0 md:col-6">
        <div class="flex flex-column align-items-center justify-content-center">
          <div class="p-4 text-background-sm md:pr-4">
            <!-- Heading -->
            <div class="serif text-left pt-1 md:text-xl md:px-4 lg:text-3xl lg:px-6">
              TEN LOCATIONS, ONE EXCEPTIONAL EXPEREINCE
            </div>

            <!-- Subtext -->
            <div class="sans-serif text-xl mt-3 md:px-4 lg:px-6">
              Kenneth's Salons + Day Spas has 10 locations throughout central Ohio to best serve our communities. 
              Regardless of the location you call home, you can expect the same gratifying experience that 
              Kenneth's is known for. Every location, every day, we aim to exceed expectations and leave you feeling your absolute best.
            </div>
          </div>

          <div class="mt-4 ">
            <Button label="LOCATIONS" class="button-location" @click="doRoute('locations')"/>
          </div>
        </div>
      </div>

      <!-- Image/Video -->
      <div class="col-12 flex justify-content-center md:flex-order-1 md:justify-content-end md:align-items-center md:col-6 lg:justify-content-start lg:align-items-center lg:pl-8">
        <video class="flex justify-content-center location-video-sm location-video-md location-video-lg location-video-xl" autoplay loop muted>
          <source src="/static/locations/pl/video.mp4">
        </video>
      </div>
    </div>

    <!-- Departments -->
    <div class="grid md:ml-7 lg:mx-7">
      <div class="col-12 my-0 py-0">
        <div class="flex grid mt-1 service-row-sm service-row-md service-row-lg service-row-xl">
          <!-- Spa -->
          <div class="flex col-4 justify-content-center align-items-center spa-sm spa-md spa-lg spa-xl cursor-pointer" 
                @click="doRoute('spa')">
            <div class="spa-text text-3xl md:text-5xl lg:text-6xl">
              SPA
            </div>
          </div>
          
          <!-- Nails -->
          <div class="flex col-4 justify-content-center align-items-center nail-sm nail-md nail-lg nail-xl cursor-pointer"
                @click="doRoute('nail')">
            <div class="nail-text text-3xl md:text-5xl lg:text-6xl">
              NAILS
            </div>
          </div>

          <!-- Hair -->
          <div class="flex col-4 justify-content-center align-items-center hair-sm hair-md hair-lg hair-xl cursor-pointer"
                @click="doRoute('hair')">
            <div class="hair-text text-3xl md:text-5xl lg:text-6xl">
              HAIR
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Home',

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

          case 'spa':
            router.push('/service-guide/spa');
            break;

          case 'nail':
            router.push('/service-guide/nail');
            break;
          
          case 'hair':
            router.push('/service-guide/hair');
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
  .text-background-sm {
    background-color: var(--white);
  }

  .photo-banner-sm {
    height: auto;
    width: 100%;
  }
  
  .parallax-banner-sm {
    height: 28rem;
  }

  .photo-creative-sm {
    height: auto;
    width: 50%;
  }

  .parallax-creative-sm {
    background-image: linear-gradient(var(--red), var(--red));
    background-attachment: fixed;
    background-position: bottom center 0px;
    background-repeat: no-repeat;
    background-size: 100% 50%;
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

  .location-video-sm {
    width: 75%;
  }

  .service-row-sm {
    height: 20rem;
    background-color: var(--black);
  }

  .spa-sm {
    background-image: url('/static/home/spa.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 40%;
    color: white;
  }

  .nail-sm {
    background-image: url('/static/home/nail.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 40%;
    color: white;
  }

  .hair-sm {
    background-image: url('/static/home/hair.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 40%;
    color: white;
  }
}

@media only screen and (min-width: 570px) {
  .photo-banner-sh {
    height: auto;
    width: 90%;
  }

  .parallax-banner-sh {
    height: 39rem;
  }
}

/* Medium screen (tablet) */
@media only screen and (min-width: 768px) {
  .photo-banner-md {
    height: auto;
    width: 80%;
  }

  .parallax-banner-md {
    background-image: url('/static/home/parallax/bannerParallax.jpg');
    background-color: var(--white);
    background-attachment: fixed;
    background-position: right;
    background-repeat: no-repeat;
    background-size: 55% 100%;
    height: 46%;
  }

  .photo-creative-md {
    height: auto;
    width: 100%;
  }

  .parallax-creative-md {
    background-image: linear-gradient(var(--light-red), var(--light-red));
    background-attachment: fixed;
    background-position: bottom left 0px;
    background-repeat: no-repeat;
    background-size: 90% 50%;

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

  .location-video-md {
    width: 80%;
  }

  .service-row-md {
    height: 30rem;
    background-color: var(--black);
  }

  .spa-md {
    background-image: url('/static/home/spa.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 55%;
    color: white;
  }

  .spa-md:hover .spa-text {
    transform: scale(1.5);
  }

  .nail-md {
    background-image: url('/static/home/nail.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 55%;
    color: white;
  }

  .nail-md:hover .nail-text {
    transform: scale(1.5);
  }

  .hair-md {
    background-image: url('/static/home/hair.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 55%;
    color: white;
  }

  .hair-md:hover .hair-text {
    transform: scale(1.5);
  }
}

/* Large screen */
@media only screen and (min-width: 992px) {
  .photo-banner-lg {
    height: auto;
    width: 75%;
  }

  .parallax-banner-lg {
    background-image: url('/static/home/parallax/bannerParallax.jpg');
    background-color: var(--white);
    background-attachment: fixed;
    background-position: right;
    background-repeat: no-repeat;
    background-size: 55% 100%;
    height: 52rem;
  }

  .text-background-lg {
    background-color: transparent;
  }

  .photo-creative-lg {
    height: auto;
    width: 90%;
  }

  .parallax-creative-lg {
    background-image: url('/static/home/parallax/creativeParallax.jpg');
    background-attachment: fixed;
    background-position: left;
    background-repeat: no-repeat;
    background-size: 40% 100%;
    height: auto;
  }

  .parallax-location-lg {
    background-image: url('/static/home/parallax/locationParallax.jpg');
    background-attachment: fixed;
    background-position: right;
    background-repeat: no-repeat;
    background-size: 40% 100%;
    height: auto;
  }

  .location-video-lg {
    width: 80%;
  }

  .service-row-lg {
    height: 33rem;
    background-color: var(--black);
  }

  .spa-lg {
    background-image: url('/static/home/spa.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 70%;
    color: white;
  }

  .spa-lg:hover .spa-text {
    transform: scale(1.5);
  }

  .nail-lg {
    background-image: url('/static/home/nail.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 70%;
    color: white;
  }

  .nail-lg:hover .nail-text {
    transform: scale(1.5);
  }

  .hair-lg {
    background-image: url('/static/home/hair.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 70%;
    color: white;
  }

  .hair-lg:hover .hair-text {
    transform: scale(1.5);
  }
}

/* Extra large screen */
@media only screen and (min-width: 1200px) {
  .photo-banner-xl {
    height: auto;
    width: 50%;
  }

  .photo-creative-xl {
    height: auto;
    width: 60%;
  }

  .parallax-creative-xl {
    background-attachment: fixed;
    background-position: left;
    background-repeat: no-repeat;
    background-size: 37% 100%;
    height: 45rem;;
  }

  .photo-location-xl {
    height: auto;
    width: 40%;
  }

  .parallax-location-xl {
    background-attachment: fixed;
    background-position: right;
    background-repeat: no-repeat;
    background-size: 37% 100%;
  }

  .location-video-xl {
    width: 50%;
  }

  .service-row-xl {
    height: 33rem;
    background: var(--black);
  }

  .service-spa-xl {
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 70%;
    color: white;
  }

  .service-spa-xl:hover .spa-text {
    transform: scale(1.5);
  }

  .service-nail-xl {
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 70%;
    color: white;
  }

  .service-nail-xl:hover .nail-text {
    transform: scale(1.5);
  }

  .service-hair-xl {
    background-image: url('/sstatic/home/hair.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 70%;
    color: white;
  }

  .service-hair-xl:hover .hair-text {
    transform: scale(1.5);
  }
}

.negative-margin {
  margin: 0 -4rem 0 0;
}

.button-location {
  background-color: var(--tan) !important;
  color: var(--black) !important;
  border-width: 0px !important;
  border-color: var(--black) !important;
  box-shadow: transparent !important;
  font-size: 20px !important;
  font-family: 'lato', arial, helvetica !important;
  font-weight: bold;
}

.video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.square {
  width: 100%;
  height: 50vmin;
}
</style>