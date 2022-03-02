<template>
<meta name="viewport" content="user-scalable=0, initial-scale=1.0">
  <div>
    <!-- Large Menu -->
    <div class="hidden md:flex md:align-items-center lg:grid">
      <div class="col-5 md:flex md:flex-column md:align-items-start lg:block">
        <Button label="BOOK NOW" class="menu-button border-noround border-none border-bottom-1"/>

        <Button label="RETAIL" class="menu-button border-noround border-none border-bottom-1"/>

        <Button label="SERVICES" class="menu-button border-noround border-none border-bottom-1 mr-2" @click="doRoute('serviceMenu')"/>

        <Button label="CLUB KENNETH" class="menu-button border-noround border-none border-bottom-1 lg:mx-2"/>
      </div>

      <div class="col-2 m-0 p-0 text-center">
        <img src="/src/assets/logo.png" class="logo cursor-pointer" @click="doRoute('home')"/>
      </div>

      <div class="col-5 text-right md:flex md:flex-column md:align-items-end lg:block">
        <Button label="GIFT CARDS" class="menu-button border-noround border-none border-bottom-1 lg:mx-2"/>

        <Button label="LOCATIONS" class="menu-button border-noround border-none border-bottom-1 lg:mr-2" @click="doRoute('locations')"/>

        <Button label="CAREERS" class="menu-button border-noround border-none border-bottom-1 lg:mx-2"/>

        <Button label="BLOG" class="menu-button border-noround border-none border-bottom-1 lg:ml-2"/>
      </div>
    </div>

    <!-- Small Menu -->
    <div class="sm:block md:hidden">
      <Button class="absolute top-0 left-0 test hamburger-button" icon="pi pi-bars" @click="state.sidebarVisible = true"/>

      <div class="text-center">
        <img src="/src/assets/logo.png" width="125"/>
      </div>

      <Sidebar class="sidebar" v-model:visible="state.sidebarVisible" :baseZIndex="1000">
        <div>
          <Button label="BOOK NOW" class="menu-button border-noround border-none border-bottom-1 my-2"/>
        </div>

        <div>
          <Button label="RETAIL" class="menu-button border-noround border-none border-bottom-1 my-2"/>
        </div>

        <div>
          <Button label="GIFT CARDS" class="menu-button border-noround border-none border-bottom-1 my-2"/>
        </div>

        <div>
          <Button label="SERVICES" class="menu-button border-noround border-none border-bottom-1 my-2" @click="doRoute('serviceMenu')"/>
        </div>

        <div>
          <Button label="CLUB KENNETH" class="menu-button border-noround border-none border-bottom-1 my-2"/>
        </div>

        <div>
          <Button label="LOCATIONS" class="menu-button border-noround border-none border-bottom-1 my-2" @click="doRoute('locations')"/>
        </div>

        <div>
          <Button label="CAREERS" class="menu-button border-noround border-none border-bottom-1 my-2"/>
        </div>

        <div>
          <Button label="BLOG" class="menu-button border-noround border-none border-bottom-1 my-2"/>
        </div>

        <div class="grid my-2">
          <div class="col-2">
            <a href="https://www.instagram.com/kennethssalonandspa/ " target="_blank">
              <img src="/src/assets/social/Instagram.png" width="20"/>
            </a>
          </div>

          <div class="col-2 ">
            <a href="https://www.tiktok.com/@kennethssalonandspa" target="_blank">
              <img src="/src/assets/social/TikTok.png" width="20"/>
            </a>
          </div>
          
          <div class="col-2">
            <a href="https://www.facebook.com/KennethsSalonandspa" target="_blank">
              <img src="/src/assets/social/FaceBook.png" width="18"/>
            </a>
          </div>

          <div class="col-2">
            <a href="https://www.pinterest.com/kennethssalonandspa" target="_blank">
              <img src="/src/assets/social/Pintrest.png" width="18"/>
            </a>
          </div>

          <!-- <div class="col-2"> -->
            <!-- <a href="https://twitter.com/KennethsSalon" target="_blank"> -->
              <!-- <img src="/src/assets/social/Twitter.png" width="20"/> -->
            <!-- </a> -->
          <!-- </div> -->
        </div>
      </Sidebar>
    </div>

    <!-- Social Media (left) -->
    <div class="hidden md:flex flex-column fixed top-50 left-0 ml-4">
      <div class="flex align-items-center">
        <img src="/src/assets/social/vertical/FollowUs.png" width="18"/>
      </div>

      <div class="flex align-items-center mt-4">
        <a href="https://www.instagram.com/kennethssalonandspa/ " target="_blank">
          <img src="/src/assets/social/Instagram.png" width="18"/>
        </a>
      </div>

      <div class="flex align-items-center mt-4">
        <a href="https://www.tiktok.com/@kennethssalonandspa" target="_blank">
          <img src="/src/assets/social/TikTok.png" width="18"/>
        </a>
      </div>

      <div class="flex align-items-center mt-4">
        <a href="https://www.facebook.com/KennethsSalonandspa" target="_blank">
          <img src="/src/assets/social/FaceBook.png" width="18"/>
        </a>
      </div>

      <div class="flex align-items-center mt-4">
        <a href="https://www.pinterest.com/kennethssalonandspa" target="_blank">
          <img src="/src/assets/social/Pintrest.png" width="18"/>
        </a>
      </div>

      <!-- <div class="flex align-items-center mt-3"> -->
        <!-- <a href="https://twitter.com/KennethsSalon" target="_blank"> -->
          <!-- <img src="/src/assets/social/Twitter.png" width="18"/> -->
        <!-- </a> -->
      <!-- </div> -->
    </div>

    <!-- Quick Access (right) -->
    <div class="hidden lg:flex flex-column fixed top-50 right-0 mr-4">
        <div class="flex align-items-center mb-5">
          <img src="/src/assets/menu/vertical/bookNow.png" width="18" class="cursor-pointer"/>
        </div>

        <div class="flex align-items-center mb-5">
          <img src="/src/assets/menu/vertical/retail.png" width="18" class="cursor-pointer"/>
        </div>

        <div class="flex align-items-center">
          <img src="/src/assets/menu/vertical/giftCards.png" width="18" class="cursor-pointer"/>
        </div>
    </div>    

    <!-- Content -->
    <div class="flex grid mx-0">
      <div class="col">
        <router-view/>
      </div>
    </div>

    <!-- Footer -->
    <div class="grid footer mx-0">
      <div class="grid m-0 align-items-center">
        <div class="col sans-serif text-center text-4xl md:text-5xl">
          Get Inspired <img src="/src/assets/social/Instagram.png" width="27"/> kennethssalonandspa
          <div class="grid mt-1 flex">
            <div class="col-2">
              <img class="thumbnail" src="/src/assets/footer/1.jpg"/>
            </div>
            <div class="col-2">
              <img class="thumbnail" src="/src/assets/footer/2.jpg"/>
            </div>
            <div class="col-2">
              <img class="thumbnail" src="/src/assets/footer/3.jpg"/>
            </div>
            <div class="col-2">
              <img class="thumbnail" src="/src/assets/footer/4.jpg"/>
            </div>
            <div class="col-2">
              <img class="thumbnail" src="/src/assets/footer/5.jpg"/>
            </div>
            <div class="col-2">
              <img class="thumbnail" src="/src/assets/footer/6.jpg"/>
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
  import { appGlobal } from '@/store/global/appGlobal';

  export default {
    name: 'App',

    setup() {
      const state = reactive({
        sidebarVisible: false
      });

      const router = useRouter();

      function doRoute(whereTo) {
        switch (whereTo) {
          case 'home':
            router.push('/');
            break;

          case 'locations': 
            router.push('/locations');
            state.sidebarVisible = false;
            break;

          case 'serviceMenu': 
            router.push('/service-menu');
            state.sidebarVisible = false;
            break;
        }
      }

      return {
        state,
        appGlobal,
        doRoute
      }
    }
  }
</script>

<style>
:root {
  --white: #FBFBFB;
  --grey: #D6D7DC;
  --light-red: #E9C9BA;
  --red: #D88D76;
  --blue: #99B6BD;
  --light-blue: #badde5;
  --yellow: #fff4e1;
  --light-tan: #D6A877;
  --tan: #B88455;
  --green: #445A57;
  --black: #000000;
}

@font-face {
  font-family: 'lato';
  src: local('lato'),
        url('./assets/fonts/lato-Light.ttf') format('truetype');
  line-gap-override: 30%;
}

@font-face {
  font-family: 'Playfair';
  src: local('Playfair'),
        url('./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf') format('truetype');
}

html, body {
  background-color: var(--white);
  color: var(--black);
  margin: 0;
}

.sans-serif {
  font-family: 'lato', arial, helvetica;
}

.serif {
  font-family: 'Playfair', garamond, 'Times New Roman';
}

.logo {
  height: 10rem;
  width: auto;
}

.menu-button {
  background-color: transparent !important;
  color: var(--black) !important;
  border-width: 0px !important;
  border-color: var(--white) !important;
  box-shadow: transparent !important;
  font-size: 20px !important;
  font-family: 'lato', arial, helvetica !important;
}

.hamburger-button {
  background-color: var(--grey) !important;
  color: var(--black) !important;
  border-width: 0px !important;
  border-color: var(--black) !important;
  box-shadow: transparent !important;
  border-top-left-radius: 0em !important;
  border-top-right-radius: 0em !important;
  border-bottom-right-radius: 0.5em !important;
  border-bottom-left-radius: 0em !important;
}

.sidebar {
  background-color: var(--white) !important;
  color: var(--black) !important;
}

.r-90 {
  transform: rotate(90deg);
}

.menu-button:focus {
  box-shadow: 0 0 0 0 transparent !important;
}

.thumbnail {
  object-fit: cover;
  width: 100%;
  height: 70%;
}

.footer {
  background-color: var(--grey);
  color: var(--black);
  justify-content: center;
  height: 70%;
}

.test {
  background-color: var(--blue);
}

.test1 {
  background-color: var(--yellow);
}

.test2 {
  background-color: var(--red);
}

button {
  border-radius: 0px !important;
}
</style>