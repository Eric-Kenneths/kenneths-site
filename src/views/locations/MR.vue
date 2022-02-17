<template>
  <div>
    <svg  viewBox="0 0 1200 808" >
    	<image width="1200" height="808" xlink:href="/src/assets/test/maptest.jpg"/>

      <a xlink:href="www.google.com" target="_blank">
    	  <rect x="1033" y="463" fill="#fff" opacity="0.5" width="132" height="177" />
      </a>

      <a xlink:href="www.google.com" target="_blank">
    	  <polygon points="11,556 295,556 430,692 430,723 268,723 268,795 11,795" fill="#fff" opacity="0.5" />
      </a>
    </svg>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  
  export default {
    name: 'MR',

    setup() {
      const state = reactive({

      });

      return {
        state
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