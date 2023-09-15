  <template>
      <div id="header-container">
        <Header 
          @scrollToContact="scrollToContact" 
          @scrollToAbout="scrollToAbout" 
          @scrollToCalorieCalculator="scrollToCalorieCalculator"
          @scrollToEmojiPage="scrollToEmojiPage"
          @scrollToWaterTracker="scrollToWaterTracker"
          @dropdown="toggleTheDropdown" 
          @clearCalorieInput="closeCalorieCalculator"
          @closeWaterTracker="closeWaterTracker"
        />
      </div>
      <div id="calculator-container">
        <CalorieCalculator 
          ref="calorieCalculator"
          @close="closeCalorieCalculator" 
          v-show="showTheDropdown && showCalorieCalculator"
          />
      </div>
      <div id="water-container" >
        <WaterTracker 
          v-show="showWaterTracker"
          @closeWater="closeWaterTracker"
        />
      </div>
      <Motivation />
      <Lifestyle />
      <FAQ />
      <Contact
        @updateShowContactForm="updateShowContactForm" 
      />
      <div id="cf-container">
        <ContactForm 
          v-show="showContactForm"
        />
      </div>
      <Footer />
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
  </template>

  <script>
    import Header from "@/components/Header.vue";
    import Motivation from "@/components/Motivation.vue";
    import Lifestyle from "@/components/Lifestyle.vue";
    import FAQ from "@/components/FAQ.vue";
    import Contact from "@/components/Contact.vue";
    import Footer from "@/components/Footer.vue";
    import CalorieCalculator from "@/components/CalorieCalculator.vue"; 
    import EmojiPage from "@/components/EmojiPage.vue"; 
    import Sad from "@/components/Sad.vue"; 
    import Neutral from "@/components/Neutral.vue"; 
    import Happy from "@/components/Happy.vue"; 
    import WaterTracker from "@/components/WaterTracker.vue"; 
    import ContactForm from "@/components/ContactForm.vue"; 

  export default {
    name: "App",
    components: {
      Header,
      Motivation,
      Lifestyle,
      FAQ,
      Contact,
      Footer,
      CalorieCalculator,
      EmojiPage,
      Sad,
      Neutral,
      Happy,
      WaterTracker,
      ContactForm
    },

    data() {
      return {
        showTheDropdown: false,
        showCalorieCalculator: false,
        showTheEmojiPage: false,
        showSad: false,
        showNeutral: false,
        showHappy: false,
        showWaterTracker: false, 
        showContactForm: false, 
      };
    },
    methods: {
      scrollToContact() {
        const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        },
      scrollToAbout() {
        const aboutSection = document.getElementById('about-section');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        },
      scrollToCalorieCalculator() {
        const calorieCalculatorSection = document.getElementById('calculator-container');
          if (calorieCalculatorSection) {
            calorieCalculatorSection.scrollIntoView({ behavior: 'smooth' });
          }
        },
      scrollToWaterTracker() {
        const waterTrackerSection = document.getElementById('water-container');
          if (waterTrackerSection) {
            this.showWaterTracker = true;
            this.showCalorieCalculator = false;
            this.$nextTick(() => {
            waterTrackerSection.scrollIntoView({ behavior: 'smooth' });
            });
          }
        },
      scrollToEmojiPage(){
        const emojiPageSection = document.getElementById('emoji-page');
          if (emojiPageSection) {
            this.showTheEmojiPage = true;
            this.$nextTick(() => {
              emojiPageSection.scrollIntoView({ behavior: 'smooth' });
            });
          }
        },
      scrollToSad(){
        const sadSection = this.$refs.sadComponent.$el;
          if (sadSection) {
            this.showHappy = false;
            this.showNeutral = false;
            this.showSad = true;
            this.$nextTick(() => {
              sadSection.scrollIntoView({ behavior: 'smooth' });
            });
          }
        },
      scrollToNeutral(){
        const neutralSection = this.$refs.neutralComponent.$el;
          if (neutralSection) {
            this.showHappy = false;
            this.showSad = false;
            this.showNeutral = true;
            this.$nextTick(() => {
              neutralSection.scrollIntoView({ behavior: 'smooth' });
            });
          }
        },
      scrollToHappy(){
        const happySection = this.$refs.happyComponent.$el;
          if (happySection) {
            this.showSad = false;
            this.showNeutral = false;
            this.showHappy = true;
            this.$nextTick(() => {
              happySection.scrollIntoView({ behavior: 'smooth' });
            });
          }
        },
          
      toggleTheDropdown() {
        this.showTheDropdown = !this.showTheDropdown;
          if (this.showTheDropdown) {
            this.showCalorieCalculator = true;
            this.showWaterTracker = false;
          } else {
            this.showCalorieCalculator = false;
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
          }
        },
        updateShowContactForm() {
          const contactFormSection = document.getElementById('cf-container');
          if (contactFormSection) {
            this.showContactForm = true;
            this.$nextTick(() => {
              contactFormSection.scrollIntoView({ behavior: 'smooth'  });
            });
          }
        },
        closeCalorieCalculator() {

          if (this.$route && this.$route.name === "CalorieCalculator") {
            this.$router.replace({  name: "home"});
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          this.showCalorieCalculator = false;
          this.$refs.calorieCalculator.resetForm();
        },
      closeWaterTracker() {

        if (this.$route && this.$route.name === "WaterTracker") {
          this.$router.replace({  name: "home"});
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        this.showWaterTracker = false;
      },
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
  </style>



