<template>
<meta name="viewport" content="user-scalable=0, initial-scale=1.0">
  <div>
    <!-- Large Menu -->
    <div class="hidden md:flex md:align-items-center my-2 lg:grid">
      <div class="col-5 md:flex md:flex-column md:align-items-start lg:block">
        <Button label="BOOK NOW" class="menu-button border-none"/>

        <Button label="RETAIL" class="menu-button border-none"/>

        <Button label="SERVICES" class="menu-button border-none" @click="doRoute('serviceMenu')"/>

        <!-- <Button label="CLUB KENNETH" class="menu-button border-none"/> -->
      </div>

      <div class="col m-0 p-0 text-center">
        <img src="/static/logo.png" class="logo cursor-pointer" @click="doRoute('home')"/>
      </div>

      <div class="col-5 text-right md:flex md:flex-column md:align-items-end lg:block">
        <Button label="GIFT CARDS" class="menu-button border-none"/>

        <Button label="LOCATIONS" class="menu-button border-none" @click="doRoute('locations')"/>

        <Button label="CAREERS" class="menu-button border-none" @click="doRoute('careers')"/>

        <Button label="BLOG" class="menu-button border-none"/>
      </div>
    </div>

    <!-- Small Menu -->
    <div class="sm:block md:hidden">
      <Button class="absolute top-0 left-0 test hamburger-button" icon="pi pi-bars" @click="state.sidebarVisible = true"/>

      <div class="text-center">
        <img src="/static/logo.png" width="125" @click="doRoute('home')"/>
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
          <Button label="CAREERS" class="menu-button border-noround border-none border-bottom-1 my-2" @click="doRoute('careers')"/>
        </div>

        <div>
          <Button label="BLOG" class="menu-button border-noround border-none border-bottom-1 my-2"/>
        </div>

        <div class="grid my-2">
          <div class="col-2">
            <a href="https://www.instagram.com/kennethssalonandspa/ " target="_blank">
              <img src="/static/social/Instagram.png" width="20"/>
            </a>
          </div>

          <div class="col-2 ">
            <a href="https://www.tiktok.com/@kennethssalonandspa" target="_blank">
              <img src="/static/social/TikTok.png" width="20"/>
            </a>
          </div>
          
          <div class="col-2">
            <a href="https://www.facebook.com/KennethsSalonandspa" target="_blank">
              <img src="/static/social/FaceBook.png" width="18"/>
            </a>
          </div>

          <div class="col-2">
            <a href="https://www.pinterest.com/kennethssalonandspa" target="_blank">
              <img src="/static/social/Pintrest.png" width="18"/>
            </a>
          </div>

          <!-- <div class="col-2"> -->
            <!-- <a href="https://twitter.com/KennethsSalon" target="_blank"> -->
              <!-- <img src="/static/social/Twitter.png" width="20"/> -->
            <!-- </a> -->
          <!-- </div> -->
        </div>
      </Sidebar>
    </div>

    <!-- Social Media (left) -->
    <div class="hidden md:flex flex-column fixed top-50 left-0 ml-4">
      <div class="flex align-items-center">
        <img src="/static/icons/social/vertical/FollowUs.png" width="18"/>
      </div>

      <div class="flex align-items-center mt-4">
        <a href="https://www.instagram.com/kennethssalonandspa/ " target="_blank">
          <img src="/static/icons/social/Instagram.png" width="18"/>
        </a>
      </div>

      <div class="flex align-items-center mt-4">
        <a href="https://www.tiktok.com/@kennethssalonandspa" target="_blank">
          <img src="/static/icons/social/TikTok.png" width="18"/>
        </a>
      </div>

      <div class="flex align-items-center mt-4">
        <a href="https://www.facebook.com/KennethsSalonandspa" target="_blank">
          <img src="/static/icons/social/FaceBook.png" width="18"/>
        </a>
      </div>

      <div class="flex align-items-center mt-4">
        <a href="https://www.pinterest.com/kennethssalonandspa" target="_blank">
          <img src="/static/icons/social/Pintrest.png" width="18"/>
        </a>
      </div>

      <!-- <div class="flex align-items-center mt-3"> -->
        <!-- <a href="https://twitter.com/KennethsSalon" target="_blank"> -->
          <!-- <img src="/static/icons/social/Twitter.png" width="18"/> -->
        <!-- </a> -->
      <!-- </div> -->
    </div>

    <!-- Quick Access (right) -->
    <div class="hidden lg:flex flex-column fixed top-50 right-0 mr-4">
        <div class="flex align-items-center mb-5">
          <img src="/static/menu/vertical/bookNow.png" width="18" class="cursor-pointer"/>
        </div>

        <div class="flex align-items-center mb-5">
          <img src="/static/menu/vertical/retail.png" width="18" class="cursor-pointer"/>
        </div>

        <div class="flex align-items-center">
          <img src="/static/menu/vertical/giftCards.png" width="18" class="cursor-pointer"/>
        </div>
    </div>    

    <!-- Content -->
    <div class="flex grid mx-0">
      <div class="col">
        <router-view/>
      </div>
    </div>

    <!-- Footer -->
    <div class="grid footer sans-serif mx-0">
      <!-- Social media -->
      <div class="grid m-0 align-items-center">
        <div class="col text-center text-4xl md:text-5xl">
          Get Inspired 
          <a class="link" href="https://www.instagram.com/kennethssalonandspa" target="_blank">
            <img src="/static/social/Instagram.png" width="27"/> kennethssalonandspa</a>

          <div class="grid mt-1 flex flex-row">
            <div class="col-4 md:col-2" v-for="(post, id) in state.footerPosts" :key="id">
              <span v-if="post.media_type !== 'VIDEO'">
                <a href="https://www.instagram.com/kennethssalonandspa" target="_blank">
                  <img class="thumbnail cursor-pointer" :src="post.media_url"/>
                </a>
              </span>

              <span v-if="post.media_type === 'VIDEO'">
                <a href="https://www.instagram.com/kennethssalonandspa" target="_blank">
                  <video class="thumbnail cursor-pointer" autoplay loop muted>
                    <source :src="post.media_url">
                  </video>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Address -->
      <div class="col-12 flex justify-content-center align-items-end text-sm md:col-4">
        <a class="link" href="https://maps.google.com/?q=5151+Reed+Rd+Suite+250B,+Columbus,+OH+43220" target="_blank">
          <a class="link" href="https://maps.google.com/?q=5151+Reed+Rd+Suite+250B,+Columbus,+OH+43220" target="_blank">
            <div class="flex flex-column align-items-center">
              <div>
                5151 Reed Rd Suite 250B
              </div>

              <div>
                Columbus, OH 43220
              </div>
            </div>
          </a>
        </a>
      </div>

      <!-- Copyrights -->
      <div class="col-12 flex justify-content-center align-items-end text-sm md:col-4">
        <div class="flex flex-column align-items-center">
          <div>
            &copy; 2009-22 Kenneth's Hair Salons & Day Spa, Inc.
          </div>

          <div>
            All Rights Reserved
          </div>
        </div>
      </div>

      <!-- Phone -->
      <div class="col-12 flex justify-content-center align-items-end text-sm md:col-4">
        <div class="flex flex-column align-items-center">
          <div>
            Call Us
          </div>

          <div>
            <a class="link" href="tel:6145385800">
              614.538.5800
            </a>
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
  import { employeeRepo } from '@/store/repository/employeeRepo';

  export default {
    name: 'App',

    setup() {
      const state = reactive({
        sidebarVisible: false,
        footerPosts: []
      });

      window.scrollTo(0, 0);

      const {
        getSocialMediaToken,
        getPhotos
      } = employeeRepo();

      loadInstagramPosts();

      async function loadInstagramPosts() {
        let socialMedia = await getSocialMediaToken();

        state.footerPosts = await getPhotos(socialMedia.userId, socialMedia.token);
      }

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

          case 'careers': 
            router.push('/careers');
            state.sidebarVisible = false;
            break;
        }
      }

      return {
        state,
        appGlobal,
        doRoute,
        loadInstagramPosts
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
  cursor: default;
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

.menu-button:focus {
  box-shadow: 0 0 0 0 transparent !important;
}

.thumbnail {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.footer {
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

button:focus {
  box-shadow: 0 0 0 0 transparent !important;
}

.link {
  color: var(--black);
  text-decoration: none;  
}
</style>