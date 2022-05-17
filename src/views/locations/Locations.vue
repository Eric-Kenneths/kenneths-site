<template>
  <div>
    <!-- Row 1 -->
    <div class="grid mt-1 flex flex-column align-items-start md:ml-7 md:flex-row lg:mx-7">
      <!-- Mill Run -->
      <div class="col-12 md:px-4 md:col-4">
        <div class="grid py-3" style="background-color: var(--black); color: var(--white); height: 100%">  
          <div class="col-9 md:col-10 md:pl-0 md:py-0">
            <div class="ml-3 flex flex-column align-items-center md:block">
              <video class="flex justify-content-center photo-sm photo-md photo-lg cursor-pointer" onmouseover="play()" onmouseout="pause()" loop muted
                      @click="doRoute('mr')">
                <source src="/static/locations/mr/video.mp4">
              </video>

              <div class="grid mt-2 flex flex-column">
                <a class="address" href="https://maps.google.com/?q=3610+Fishinger+Blvd+,+Hilliard,+OH+43026" target="_blank">
                  <a class="address" href="https://maps.google.com/?q=3610+Fishinger+Blvd+,+Hilliard,+OH+43026" target="_blank">
                    <div class="col-12 flex flex-column address-sm address-md address-lg address-xl pb-0">
                      <div>
                        Mill Run Center
                      </div>

                      <div>
                        3610 Fishinger Blvd.
                      </div>

                      <div>
                        Hilliard, OH 43026
                      </div>
                    </div>
                  </a>
                </a>

                <div class="col-12 align-self-end md:flex md:justify-content-end pt-3 pb-0">
                  <Button label="BOOK"/>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-3 md:col-2 md:pl-0">
            <div class="rotate mr-1 large-label-sm large-label-md large-label-lg large-label-xl large-label-xxl large-label-xxxl">
              Arlington-Hilliard
            </div>
          </div>
        </div>
      </div>

      <!-- Avery -->
      <div class="col-12 md:px-4 md:col-4">
        <div class="grid py-3" style="background-color: var(--black); color: var(--white);">  
          <div class="col-9 md:col-10 md:pl-0 md:py-0">
            <div class="ml-3 flex flex-column align-items-center md:block">
              <video class="flex justify-content-center photo-sm photo-md photo-lg cursor-pointer" onmouseover="play()" onmouseout="pause()" loop muted
                      @click="doRoute('av')">
                <source src="/static/locations/av/video.mp4">
              </video>

              <div class="grid mt-2 flex flex-column">
                <a class="address" href="https://maps.google.com/?q=7056+Hospital+Dr+,+Dublin,+OH+43016" target="_blank">
                  <a class="address" href="https://maps.google.com/?q=7056+Hospital+Dr+,+Dublin,+OH+43016" target="_blank">
                    <div class="col-12 flex flex-column address-sm address-md address-lg address-xl pb-0">
                      <div>
                        Avery Square Center
                      </div>

                      <div>
                        7056 Hospital Dr.
                      </div>

                      <div>
                        Dublin, OH 43016
                      </div>
                    </div>
                  </a>
                </a>

                <div class="col-12 align-self-end md:flex md:justify-content-end pt-3 pb-0">
                  <Button label="BOOK"/>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-3 md:col-2 md:pl-0">
            <div class="rotate mr-1 label-sm label-md label-lg label-xl label-xxl">
              Dublin
            </div>
          </div>
        </div>
      </div>

      <!-- Grove City -->
      <div class="col-12 md:px-4 md:col-4">
        <div class="grid py-3" style="background-color: var(--black); color: var(--white); height: 100%;">  
          <div class="col-9 md:col-10 md:pl-0 md:py-0">
            <div class="ml-3 flex flex-column align-items-center md:block">
              <img src="/static/locations/gr/banner.jpg" alt="Add later" class="photo-sm photo-md photo-lg cursor-pointer" @click="doRoute('gr')">

              <div class="grid mt-2 flex flex-column">
                <a class="address" href="https://maps.google.com/?q=1582+Stringtown+Rd+,+Grove+City,+OH+43123" target="_blank">
                  <a class="address" href="https://maps.google.com/?q=1582+Stringtown+Rd+,+Grove+City,+OH+43123" target="_blank">
                    <div class="col-12 flex flex-column address-sm address-md address-lg address-xl pb-0">
                      <div>
                        Parkway Centre North
                      </div>

                      <div>
                        1582 Stringtown Rd.
                      </div>

                      <div>
                        Grove City, OH 43123
                      </div>
                    </div>
                  </a>
                </a>

                <div class="col-12 align-self-end md:flex md:justify-content-end pt-3 pb-0">
                    <Button label="BOOK"/>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-3 md:col-2 md:pl-0">
            <div class="rotate mr-1 label-sm label-md label-lg label-xl label-xxl">
              Grove City
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="grid mt-4 flex flex-column align-items-center md:align-items-start md:ml-7 md:flex-row lg:mx-7">
      <!-- Kingsdale -->
      <div class="col-12 md:px-4 md:col-4">
        <div class="grid py-3" style="background-color: var(--black); color: var(--white);">  
          <div class="col-9 md:col-10 md:pl-0 md:py-0">
            <div class="ml-3 flex flex-column align-items-center md:block">
              <video class="flex justify-content-center photo-sm photo-md photo-lg cursor-pointer" onmouseover="play()" onmouseout="pause()" loop muted
                      @click="doRoute('kd')">
                <source src="/static/locations/kd/video.mp4">
              </video>
              
              <div class="grid mt-2 flex flex-column">
                <a class="address" href="https://maps.google.com/?q=3134+Kingsdale+,+Upper+Arlington,+OH+43221" target="_blank">
                  <a class="address" href="https://maps.google.com/?q=3134+Kingsdale+,+Upper+Arlington,+OH+43221" target="_blank">
                    <div class="col-12 flex flex-column address-sm address-md address-lg address-xl pb-0">
                      <div>
                        Kingsdale
                      </div>

                      <div>
                        3134 Kingsdale Ctr.
                      </div>

                      <div class="long-address-sm long-address-md long-address-lg long-address-xl">
                        Upper Arlington, OH 43221
                      </div>
                    </div>
                  </a>
                </a>

                <div class="col-12 align-self-end md:flex md:justify-content-end pt-3 pb-0">
                    <Button label="BOOK"/>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-3 md:col-2 md:pl-0">
            <div class="rotate label-sm label-md label-xl label-xxl">
              Kingsdale
            </div>
          </div>
        </div>
      </div>

      <!-- New Albany -->
      <div class="col-12 md:px-4 md:col-4">
        <div class="grid py-3" style="background-color: var(--black); color: var(--white);">  
          <div class="col-9 md:col-10 md:pl-0 md:py-0">
            <div class="ml-3 flex flex-column align-items-center md:block">
              <img src="/static/locations/ng/banner.jpg" alt="Add later" class="photo-sm photo-md photo-lg cursor-pointer" @click="doRoute('ng')">
              
              <div class="grid mt-2 flex flex-column">
                <a class="address" href="https://maps.google.com/?q=4942+Morse+Rd,+Columbus,+OH+43230" target="_blank">
                  <a class="address" href="https://maps.apple.com/maps?q=4942+Morse+Rd,+Columbus,+OH+43230" target="_blank">
                    <div class="col-12 flex flex-column address-sm address-md address-lg address-xl pb-0">
                      <div>
                        New Albany Square
                      </div>

                      <div>
                        4942 Morse Rd.
                      </div>

                      <div>
                        Columbus, OH 43230
                      </div>
                    </div>
                  </a>
                </a>

                <div class="col-12 align-self-end md:flex md:justify-content-end pt-3 pb-0">
                    <Button label="BOOK"/>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-3 md:col-2 md:pl-0">
            <div class="rotate label-sm label-md label-xl label-xxl">
              New Albany
            </div>
          </div>
        </div>
      </div>

      <!-- Taylor Square -->
      <div class="col-12 md:px-4 md:col-4">
        <div class="grid py-3" style="background-color: var(--black); color: var(--white);">  
          <div class="col-9 md:col-10 md:pl-0 md:py-0">
            <div class="ml-3 flex flex-column align-items-center md:block">
              <video class="flex justify-content-center photo-sm photo-md photo-lg cursor-pointer" onmouseover="play()" onmouseout="pause()" loop muted
                      @click="doRoute('ts')">
                <source src="/static/locations/ts/video.mp4">
              </video>
              
              <div class="grid mt-2 flex flex-column">
                <a class="address" href="https://maps.google.com/?q=2865+Taylor+Rd+Ext,+Reynoldsburg,+OH+43068" target="_blank">
                  <a class="address" href="https://maps.apple.com/maps?q=2865+Taylor+Rd+Ext,+Reynoldsburg,+OH+43068" target="_blank">
                    <div class="col-12 flex flex-column address-sm address-md address-lg address-xl pb-0">
                      <div>
                        Taylor Square Center
                      </div>

                      <div>
                        2865 Taylor Rd. Ext.
                      </div>

                      <div>
                        Reynoldsburg, OH 43068
                      </div>
                    </div>
                  </a>
                </a>

                <div class="col-12 align-self-end md:flex md:justify-content-end pt-3 pb-0">
                    <Button label="BOOK"/>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-3 md:col-2 md:pl-0">
            <div class="rotate label-sm label-md label-xl label-xxl cursor-pointer" @click="doRoute('ts')">
              Pickerington
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 3 -->
    <div class="grid mt-4 flex flex-column align-items-center md:align-items-start md:ml-7 md:flex-row lg:mx-7">
      <!-- Polaris -->
      <div class="col-12 md:px-4 md:col-4">
        <div class="grid py-3" style="background-color: var(--black); color: var(--white);">  
          <div class="col-9 md:col-10 md:pl-0 md:py-0">
            <div class="ml-3 flex flex-column align-items-center md:block">
              <video class="flex justify-content-center photo-sm photo-md photo-lg cursor-pointer" onmouseover="play()" onmouseout="pause()" loop muted
                      @click="doRoute('pl')">
                <source src="/static/locations/pl/video.mp4">
              </video>
              
              <div class="grid mt-2 flex flex-column">
                <a class="address" href="https://maps.google.com/?q=1305+Cameron+Ave,+Lewis+Center,+OH+43035" target="_blank">
                  <a class="address" href="https://maps.google.com/?q=1305+Cameron+Ave,+Lewis+Center,+OH+43035" target="_blank">
                    <div class="col-12 flex flex-column address-sm address-md address-lg address-xl pb-0">
                      <div>
                        Oak Creek Center
                      </div>

                      <div>
                        1305 Cameron Ave.
                      </div>

                      <div>
                        Lewis Center, OH 43035
                      </div>
                    </div>
                  </a>
                </a>

                <div class="col-12 align-self-end md:flex md:justify-content-end pt-3 pb-0">
                  <Button label="BOOK"/>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-3 md:col-2 md:pl-0">
            <div class="rotate large-label-sm large-label-md large-label-xl large-label-xxl">
              Polaris Parkway
            </div>
          </div>
        </div>
      </div>

      <!-- Powell -->
      <div class="col-12 md:px-4 md:col-4">
        <div class="grid py-3" style="background-color: var(--black); color: var(--white);">  
          <div class="col-9 md:col-10 md:pl-0 md:py-0">
            <div class="ml-3 flex flex-column align-items-center md:block">
              <img src="/static/home/parallax/nailParallax.jpg" alt="Add later" class="photo-sm photo-md photo-lg cursor-pointer" @click="doRoute('pw')">
              
              <div class="grid mt-2 flex flex-column">
                <a class="address" href="https://maps.google.com/?q=9868+Brewster+Ln,+Powell,+OH+43065" target="_blank">
                  <a class="address" href="https://maps.google.com/?q=9868+Brewster+Ln,+Powell,+OH+43065" target="_blank">
                    <div class="col-12 flex flex-column address-sm address-md address-lg address-xl pb-0">
                      <div>
                        Powell Crossing Center
                      </div>

                      <div>
                        9868 Brewster Ln.
                      </div>

                      <div>
                        Powell, OH 43065
                      </div>
                    </div>
                  </a>
                </a>

                <div class="col-12 align-self-end md:flex md:justify-content-end pt-3 pb-0">
                    <Button label="BOOK"/>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-3 md:col-2 md:pl-0">
            <div class="rotate label-sm label-md label-xl label-xxl">
              Powell
            </div>
          </div>
        </div>
      </div>

      <!-- Westerville -->
      <div class="col-12 md:px-4 md:col-4">
        <div class="grid py-3" style="background-color: var(--black); color: var(--white);">  
          <div class="col-9 md:col-10 md:pl-0 md:py-0">
            <div class="ml-3 flex flex-column align-items-center md:block">
              <video class="flex justify-content-center photo-sm photo-md photo-lg cursor-pointer" onmouseover="this.play()" onmouseout="this.pause();" loop muted
                      @click="doRoute('ws')">
                <source src="/static/locations/ws/video.mp4">
              </video>
              
              <div class="grid mt-2 flex flex-column">
                <a class="address" href="https://maps.google.com/?q=726+North+State+St,+Westerville,+OH+43082" target="_blank">
                  <a class="address" href="https://maps.google.com/?q=726+North+State+St,+Westerville,+OH+43082" target="_blank">
                    <div class="col-12 flex flex-column address-sm address-md address-lg address-xl pb-0">
                      <div>
                        Northridge Center
                      </div>

                      <div>
                        726 North State St.
                      </div>

                      <div>
                        Westerville, OH 43082
                      </div>
                    </div>
                  </a>
                </a>

                <div class="col-12 align-self-end md:flex md:justify-content-end pt-3 pb-0">
                    <Button label="BOOK"/>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-3 md:col-2 md:pl-0">
            <div class="rotate label-sm label-md label-xl label-xxl">
              Westerville
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 4 -->
    <div class="grid mt-4 flex flex-column align-items-center md:align-items-start md:ml-7 md:flex-row lg:mx-7">
      <!-- Academy -->
      <div class="col-12 md:px-4 md:col-4">
        <div class="grid py-3" style="background-color: var(--black); color: var(--white);">  
          <div class="col-9 md:col-10 md:pl-0 md:py-0">
            <div class="ml-3 flex flex-column align-items-center md:block">
              <video class="flex justify-content-center photo-sm photo-md photo-lg cursor-pointer" onmouseover="this.play()" onmouseout="this.pause();" loop muted
                      @click="doRoute('at')">
                <source src="/static/locations/at/video.mp4">
              </video>
              
              <div class="grid mt-2 flex flex-column">
                <a class="address" href="https://maps.google.com/?q=5151+Reed+Rd+Suite+110B,+Columbus,+OH+43220" target="_blank">
                  <a class="address" href="https://maps.google.com/?q=5151+Reed+Rd+Suite+110B,+Columbus,+OH+43220" target="_blank">
                    <div class="col-12 flex flex-column address-sm address-md address-lg address-xl pb-0">
                      <div>
                        Academy Hair Salon
                      </div>

                      <div>
                        5151 Reed Rd. Suite 110B
                      </div>

                      <div>
                        Columbus, OH 43220
                      </div>
                    </div>
                  </a>
                </a>

                <div class="col-12 align-self-end md:flex md:justify-content-end pt-3 pb-0">
                    <Button label="BOOK"/>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-3 md:col-2 md:pl-0">
            <div class="rotate label-sm label-md label-xl label-xxl">
              Academy
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 md:col-4">
      </div>

      <div class="col-12 md:col-4">
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive} from 'vue';
  import { appGlobal } from '@/store/global/appGlobal';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Locations',

    setup() {
      const state = reactive({

      });

      window.scrollTo(0, 0);

      const router = useRouter();

      function doRoute(whereTo) {
        switch (whereTo) {
          case 'mr':
            router.push('/locations/upper-arlington-hilliard-hair-salon-day-spa');
            break;

          case 'av':
            router.push('/locations/dublin-hair-salon-nail-spa-waxing-studio');
            break;

          case 'gr':
            router.push('/locations/grove-city-hair-salon-waxing-studio');
            break;

          case 'kd':
            router.push('/locations/upper-arlington-kingsdale-hair-salon-nail-spa-waxing-studio');
            break;

          case 'ng':
            router.push('/locations/new-albany-hair-salon-day-spa');
            break;

          case 'ts':
            router.push('/locations/pickerington-hair-salon-nail-spa-waxing-studio');
            break;

          case 'pl':
            router.push('/locations/polaris-parkway-lewis-center-hair-salon-day-spa');
            break;

          case 'pw': 
            router.push('/locations/powel-hair-salon-waxing-studio');
            break;

          case 'ws':
            router.push('/locations/westerville-hair-salon-waxing-studio');
            break;

          case 'at':
            router.push('/locations/academy-hair-salon');
            break;
        }
      }

      return {
        state,
        doRoute,
        appGlobal
      }
    }
  }
</script>

<style scoped>
/* Small screen (phone) */
@media only screen and (min-width: 1px) {
  .container-sm {
    width: 100%;
    background-color: var(--black);
    color: var(--white);
  }

  .photo-sm {
    width: 85%;
    height: auto;
    
  }

  .address-sm {
    color: white;
    text-decoration: none;
    font-size: 1.125rem;
  }

  .long-address-sm {
    font-size: 1.125rem;
  }

  .label-sm {
    font-size: 3.5rem;
  }

  .large-label-sm {
    font-size: 3rem;
  }
}

/* Medium screen (tablet) */
@media only screen and (min-width: 768px) {
  .container-md {
    width: 100%;
  }

  .photo-md {
    width: 100%;
    height: auto;
    margin: 0
  }

  .address-md {
    font-size: .9rem;
  }

  .long-address-md {
    font-size: .766rem;
  }

  .label-md {
    font-size: 1.55rem;
  }

  .large-label-md {
    font-size: 1.6rem;
  }
}

/* Large screen */
@media only screen and (min-width: 992px) {
  .container-lg {
    width: 90%;
  }

  .photo-lg {
    width: 100%;
    height: auto;
  }

  .label-lg {
    font-size: 1.8rem;
  }

  .large-label-lg {
    font-size: 2.35rem;
  }

  .address-lg {
    font-size: .96rem;
  }

  .long-address-lg {
    font-size: .96rem;
  }
}

/* Extra large screen */
@media only screen and (min-width: 1200px) {
  .container-xl {
    width: 80%;
  }

  .label-xl {
    font-size: 3rem;
  }

  .large-label-xl {
    font-size: 3rem;
  }

  .address-xl {
    font-size: 1.25rem;
  }

  .long-address-xl {
    font-size: 1.25rem;
  }
}

button {
  border-radius: 0px !important;
  background-color: var(--white) !important;
  color: var(--black) !important;
  border-width: 0px !important;
  border-color: var(--black) !important;
  box-shadow: transparent !important;
  font-size: 14px !important;
  font-family: 'lato', arial, helvetica !important;
  border-radius: 0px !important;
}

.rotate {
  writing-mode: vertical-rl;
}

.address {
  color: white;
  text-decoration: none;
}

.height {
  height: 100%;
}
</style>