
<template>
  <div>
  
    <Loader v-if="loading" />

    <Login v-if="!user" />

      <div v-else>
      
        <Header 
          @scrollToContact="scrollToContact"
          @scrollToAbout="scrollToAbout" 
          @scrollToCalorieCalculator="scrollToCalorieCalculator"
          @scrollToEmojiPage="scrollToEmojiPage"
          @scrollToWaterTracker="scrollToWaterTracker"
          @scrollToHome="scrollToHome"
          @scrollToLogo="scrollToLogo"
        />

      <div id="calculator-container">
        <CalorieCalculator 
          ref="calorieCalculator"
          @closeCalorieCalculator="closeCalorieCalculator"
          v-show="showCalorieCalculator"
        />
      </div>
      <div id="water-container" >
        <WaterTracker 
          v-show="showWaterTracker"
          @closeWaterTracker="closeWaterTracker"
        />
      </div>
      <Motivation />
      <Lifestyle />
      <FAQ 
        @scrollToHere="scrollToHere"
      />
      <Contact
        @scrollToContactForm="scrollToContactForm" 
        @closeContactForm="closeContactForm"
      />
      <div id="cf-container">
        <ContactForm 
          v-show="showContactForm"
          @closeCF="closeContactForm"
        />
      </div>
      <About />
      <div id="emoji-container">
        <EmojiPage 
          v-show="showTheEmojiPage" 
          @scrollToSad="scrollToSad"  
          @scrollToNeutral="scrollToNeutral"
          @scrollToHappy="scrollToHappy"
        />
      </div>
      <div id="sad-container" v-show="showSad" >
        <Sad ref="sadComponent"
          @scrollToSadPlan="scrollToSadPlan"
        />
      </div>
      <div id="neutral-container" v-show="showNeutral" >
        <Neutral ref="neutralComponent"
        />
      </div>
      <div id="happy-container" v-show="showHappy" >
        <Happy ref="happyComponent"
        />
      </div>
      <div id="sadPlan-container" v-show="showSadPlan">
        <SadPlan ref="sadPlanComponent"
        />
      </div> 
    </div>
  </div>
  
</template>

<script>

import Header from "@/views/Header.vue";
import Motivation from "@/views/Motivation.vue";
import Lifestyle from "@/views/Lifestyle.vue";
import FAQ from "@/views/FAQ.vue";
import Contact from "@/views/Contact.vue";
import About from "@/views/About.vue";
import CalorieCalculator from "@/components/CalorieCalculator.vue";
import EmojiPage from "@/components/EmojiPage.vue"; 
import Sad from "@/components/Sad.vue"; 
import Neutral from "@/components/Neutral.vue"; 
import Happy from "@/components/Happy.vue"; 
import WaterTracker from "@/components/WaterTracker.vue"; 
import ContactForm from "@/components/ContactForm.vue"; 
import Login from '@/views/Login.vue';
import { mapState } from 'vuex';
import Loader from '@/components/Loader.vue';
import SadPlan from "@/components/SadPlan.vue"; 

export default {
name: "App",
components: {
  Header,
  Motivation,
  Lifestyle,
  FAQ,
  Contact,
  About,
  CalorieCalculator,
  EmojiPage,
  Sad,
  Neutral,
  Happy,
  WaterTracker,
  ContactForm,
  Login,
  Loader,
  SadPlan
},

data() {
  return {
    showCalorieCalculator: false,
    showTheEmojiPage: false,
    showSad: false,
    showNeutral: false,
    showHappy: false,
    showWaterTracker: false, 
    showContactForm: false, 
    showSadPlan: false,
    loading: true,
    refreshedByBrowser: false,
  };
},

computed: {
    ...mapState(['user']),
  },
  created() {
    this.$store.dispatch('fetchUser'); 
  
    window.addEventListener('beforeunload', this.detectRefreshByBrowser);
    
     this.handleRefresh();
    
    setTimeout(() => {
      this.loading = false;
    }, 1200); 
  },
  
methods: {

  detectRefreshByBrowser(event) {
      if (event.currentTarget.performance.navigation.type === 1) {
        this.refreshedByBrowser = true;
      }
    },

    handleRefresh() {
    const performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
    const navType = performance.navigation.type;

    if (navType === 1) {
      window.location.replace('/');
    } else {
      this.$router.push('/');
    }
  },

  scrollToContact() {
    const contactSection = document.getElementById('contact');
      if (contactSection) {
        this.showCalorieCalculator = false;
        this.showWaterTracker = false;
        this.showContactForm = false;
        this.showTheEmojiPage = false;
        this.showSad = false;
        this.showNeutral = false;
        this.showHappy = false;
        this.showSadPlan = false;
        this.$nextTick(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },
  scrollToAbout() {
    const aboutSection = document.getElementById('about');
      if (aboutSection) {
        this.showCalorieCalculator = false;
        this.showWaterTracker = false;
        this.showContactForm = false;
        this.showTheEmojiPage = false;
        this.showSad = false;
        this.showNeutral = false;
        this.showHappy = false;
        this.showSadPlan = false;
        this.$nextTick(() => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },
  scrollToCalorieCalculator() {
    const calorieCalculatorSection = document.getElementById('calculator-container');
      if (calorieCalculatorSection) {
        this.showCalorieCalculator = true;
        this.showWaterTracker = false;
        this.showContactForm = false;
        this.showTheEmojiPage = false;
        this.showSad = false;
        this.showNeutral = false;
        this.showHappy = false; 
        this.showSadPlan = false;
        this.$nextTick(() => {
        calorieCalculatorSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },
  scrollToWaterTracker() {
    const waterTrackerSection = document.getElementById('water-container');
      if (waterTrackerSection) {
        this.showWaterTracker = true;
        this.showCalorieCalculator = false;
        this.showContactForm = false;
        this.showTheEmojiPage = false;
        this.showSad = false;
        this.showNeutral = false;
        this.showHappy = false;
        this.showSadPlan = false;
        this.$nextTick(() => {
        waterTrackerSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },
  scrollToEmojiPage(){
    const emojiPageSection = document.getElementById('emoji-page');
      if (emojiPageSection) {
        this.showTheEmojiPage = true;
        this.showWaterTracker = false;
        this.showCalorieCalculator = false;
        this.showContactForm = false;
        this.showSad = false;
        this.showNeutral = false;
        this.showHappy = false;
        this.showSadPlan = false;
        this.$nextTick(() => {
          emojiPageSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },
  scrollToSad(){
    const sadSection = this.$refs.sadComponent.$el;
      if (sadSection) {
        this.showTheEmojiPage = false;
        this.showWaterTracker = false;
        this.showCalorieCalculator = false;
        this.showContactForm = false;
        this.showSad = true;
        this.showNeutral = false;
        this.showHappy = false;
        this.showSadPlan = false;
        this.$nextTick(() => {
          sadSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },
    scrollToSadPlan(){
    const sadPlanSection = this.$refs.sadPlanComponent.$el;
      if (sadPlanSection) {
        this.showTheEmojiPage = false;
        this.showWaterTracker = false;
        this.showCalorieCalculator = false;
        this.showContactForm = false;
        this.showSad = false;
        this.showNeutral = false;
        this.showHappy = false;
        this.showSadPlan = true;
        this.$nextTick(() => {
          sadPlanSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },
  scrollToNeutral(){
    const neutralSection = this.$refs.neutralComponent.$el;
      if (neutralSection) {
        this.showTheEmojiPage = false;
        this.showWaterTracker = false;
        this.showCalorieCalculator = false;
        this.showContactForm = false;
        this.showSad = false;
        this.showNeutral = true;
        this.showHappy = false;
        this.showSadPlan = false;
        this.$nextTick(() => {
          neutralSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },
  scrollToHappy(){
    const happySection = this.$refs.happyComponent.$el;
      if (happySection) {
        this.showTheEmojiPage = false;
        this.showWaterTracker = false;
        this.showCalorieCalculator = false;
        this.showContactForm = false;
        this.showSad = false;
        this.showNeutral = false;
        this.showHappy = true;
        this.showSadPlan = false;
        this.$nextTick(() => {
          happySection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },

  scrollToHome(){
    const homeSection = document.getElementById('header');
    if (homeSection) {
      this.showCalorieCalculator = false;
      this.showWaterTracker = false;
      this.showContactForm = false;
      this.showTheEmojiPage = false;
      this.showSad = false;
      this.showNeutral = false;
      this.showHappy = false;
      this.showSadPlan = false;
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
  },

  scrollToLogo(){
    const logoSection = document.getElementById('header');
    if (logoSection) {
      this.showCalorieCalculator = false;
      this.showWaterTracker = false;
      this.showContactForm = false;
      this.showTheEmojiPage = false;
      this.showSad = false;
      this.showNeutral = false;
      this.showHappy = false;
      this.showSadPlan = false;
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
  },

  scrollToHere(){
    const hereSection = document.getElementById('FAQ');
    if (hereSection) {
      this.showCalorieCalculator = false;
      this.showWaterTracker = false;
      this.showContactForm = false;
      this.showTheEmojiPage = false;
      this.showSad = false;
      this.showNeutral = false;
      this.showHappy = false;
      this.showSadPlan = false;
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
  },
      
  
    scrollToContactForm() {
      const contactFormSection = document.getElementById('cf-container');
      if (contactFormSection) {
        this.showCalorieCalculator = false;
        this.showWaterTracker = false;
        this.showContactForm = true;
        this.showTheEmojiPage = false;
        this.showSad = false;
        this.showNeutral = false;
        this.showHappy = false;
        this.showSadPlan = false;
        this.$nextTick(() => {
          contactFormSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    },
    closeCalorieCalculator() {

      if (this.$route && this.$route.name === "calorieCalculator") {
        this.$router.replace({  path: '/'});
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      this.showCalorieCalculator = false;
      this.$refs.calorieCalculator.resetForm();
    },
  closeWaterTracker() {

    if (this.$route && this.$route.name === "WaterTracker") {
      this.$router.replace({  path: '/'});
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    this.showWaterTracker = false;
  },
  closeContactForm() {

    if (this.$route && this.$route.name === "ContactForm") {
      this.$router.replace({  path: '/'});
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    this.showContactForm = false;
    },

},

  beforeDestroy() {
      window.removeEventListener('beforeunload', this.detectRefreshByBrowser);
    },
};
</script>

<style>

  *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  #calculator-container{
    padding-top: 65px;
  }
  #water-container{
    padding-top: 65px;
  }
  #cf-container{
    padding-top: 40px;
  }

</style>
