<template>
  <div>
    <div class="grid md:ml-7 lg:mx-7">
      <div class="col-12">
        <div class="grid">
          <div class="col-12 lg:col-6 flex pr-4 lg:px-6">
            <div class="flex flex-column lg:align-items-end justify-content-center">
              <div class="serif text-left text-4xl lg:text-right md:text-5xl lg:text-4xl xl:text-6xl">
                Career Opportunities
              </div>

              <div class="sans-serif text-left text-lg md:text-xl lg:text-lg xl:text-xl align-self-end lg:text-right mt-2">
                At Kenneth's, the key to success is believing in our employees. We are passionate about 
                cultivating a positive work environment and committed to elevating our industry by empowering 
                beauty professionals to make a living beyond expectations. Our Professionals are caring and 
                committed to excellence. Whether you are looking for a part-time position, or a full-time career, 
                we have the perfect role for you!
              </div>

              <div class="sans-serif text-left text-lg md:text-xl lg:text-lg xl:text-xl align-self-end lg:text-right mt-4">
                As a member of our team, we have many exciting perks in store 
                for you. Employees receive up to 75% off services and 50% off products. You gain access to informative 
                training and coaching sessions to help you feel confident in your role. If you are passionate about the 
                industry, this position is a great way to start your career.
              </div>

              <!-- <div class="mt-4 flex justify-content-center"> -->
                <!-- <Button label="Apply Now"/> -->
              <!-- </div> -->
            </div>
          </div>

          <div class="flex banner-lg align-items-center col-12 lg:col-6">
            <div class="flex justify-content-center md:m-0 md:p-0 lg:justify-content-start">
              <video class="video-sm video-md video-lg video-xl" autoplay loop muted playsinline>
                <source src="/static/careers/video.mp4">
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid flex justify-content-center md:ml-7 lg:mx-7" id="application" v-if="state.step === 0">
      <div class="col-12">
        <div class="serif bold text-2xl md:text-3xl text-center">
          Apply here
        </div>
      </div>

      <div class="col-12 m-0 p-0">
        <div class="serif bold text-lg text-center error" v-if="state.errorMessage !== ''">
          {{ state.errorMessage }}
        </div>
      </div>

      <div class="col-12">
        <div class="grid">
          <div class="serif text-lg md:text-xl flex align-items-center justify-content-end col-3 md:col-5">
            Full name
          </div>

          <div class="flex justify-cotent-start col-9 md:col-6">
            <InputText type="text" class="text-input" v-model="state.applicant.applicantName"/>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="grid">
          <div class="serif text-lg md:text-xl flex align-items-center justify-content-end col-3 md:col-5">
            Position
          </div>

          <div class="flex align-items-center justify-cotent-start col-9 md:col-6">
            <Dropdown class="text-input" v-model="state.applicant.positionId" :options="state.positions" 
                      optionLabel="webDescription" optionValue="positionId" placeholder="Select a position"/>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="grid">
          <div class="serif text-lg md:text-xl flex align-items-center justify-content-end col-3 md:col-5">
            Email
          </div>

          <div class="flex justify-cotent-start col-9 md:col-6">
            <InputText type="text" class="text-input" v-model="state.applicant.email"/>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="grid">
          <div class="serif text-lg md:text-xl flex align-items-center justify-content-end col-3 md:col-5">
            Phone
          </div>
          
          <div class="flex justify-cotent-start col-9 md:col-6">
            <InputText type="text" class="text-input" v-model="state.applicant.phone"/>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="flex justify-content-center">
          <Button label="Submit" @click="sumbitApplicant"/>
        </div>
      </div>
    </div>

    <div class="grid mx-7" v-if="state.step === 1">
      <div class="col-12">
        <div class="flex justify-content-center sans-serif text-2xl">
          Your information has been submitted. Please fill out the application in the new window. <br>
          Someone from Kenneth's will be in contact with you soon.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive } from 'vue';
  //import { useRouter } from 'vue-router';
  import { employeeRepo } from '@/store/repository/employeeRepo.js';
  
  export default {
    name: 'Careers',

    setup() {
      const state = reactive({
        errorMessage: '',
        positions: [],
        applicant: {
          applicantName: '',
          email: '',
          phone: '',
          positionId: 0
        },
        step: 0
      });

      window.scrollTo(0, 0);

      const {
        getPositionsForCareer,
        postOnlineApplicant
      } = employeeRepo();

      getPositions();

      async function getPositions() {
        state.positions = await getPositionsForCareer();
      }

      async function validateForm() {
        state.errorMessage = '';

        if (state.applicant.applicantName === '') {
          state.errorMessage = 'Please enter your full name';
          return;
        }

        if (state.applicant.positionId === 0) {
          state.errorMessage = 'Please select a position';
          return;
        }

        if (state.applicant.email === '') {
          state.errorMessage = 'Please enter your email address';
          return;
        }

        if (state.applicant.phone === '') {
          state.errorMessage = 'Please enter your cell phone number';
          return;
        }

        if (state.applicant.phone.length <= 9) {
          state.errorMessage = 'Please enter a valid cell phone number (include your area code)';
          return;
        }
      }

      async function sumbitApplicant() {
        await validateForm();

        if (state.errorMessage === '') {
          await postOnlineApplicant(state.applicant);

          state.step++;

          window.open("https://kenneths.com/careers.htm", "_blank");
        }
      }

      return {
        state,
        getPositions,
        sumbitApplicant
      }
    }
  }
</script>

<style scoped>
/* Small screen (phone) */
@media only screen and (min-width: 1px) {
  .video-sm {
    width: 60%;
  }
}

/* Medium screen (tablet) */
@media only screen and (min-width: 768px) {
  .video-md {
    max-height: 60rem;
    padding: 0px;
    margin: 0px;
    width: 60%;
  }
}

/* Large screen */
@media only screen and (min-width: 992px) {
  .banner-lg {
    background-image: url('/static/careers/bannerParallax.jpg');
    background-attachment: fixed;
    background-position: right;
    background-repeat: no-repeat;
    background-size: 40% 100%;
    height: 41rem;
  }

  .video-lg {
    width: 65%;
  }
}

/* Extra large screen */
@media only screen and (min-width: 1200px) {
  .video-xl {
    width: 60%;
  }
}

.text-input {
  width: 18rem;
}

.button-department {
  border-radius: 0px !important;
  background-color: transparent !important;
  color: var(--black) !important;
  border-width: 0px !important;
  border-color: var(--black) !important;
  box-shadow: transparent !important;
  font-size: 20px !important;
  font-family: 'lato', arial, helvetica !important;
}

.selection {
  border: 0px solid black;
}

input[type="radio"]:checked + label {
  font-weight: 800;
}

.bar-g {
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid var(--grey);
  margin: auto auto;
}

.bar-w {
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid var(--white);
  margin: auto auto;
}

.good-for {
  background-color: var(--black);
  color: var(--white);
}

.link {
  border: 0px;
  color: var(--black);
}

.link:hover {
  color: var(--grey);
}

button {
  border-radius: 0px !important;
  background-color: var(--black) !important;
  color: var(--white) !important;
  border-width: 0px !important;
  border-color: var(--white) !important;
  box-shadow: transparent !important;
  font-size: 20px !important;
  font-family: 'lato', arial, helvetica !important;
  border-radius: 0px !important;
}

button:focus {
  box-shadow: 0 0 0 0 transparent !important;
}

.error {
  color: red;
}
</style>