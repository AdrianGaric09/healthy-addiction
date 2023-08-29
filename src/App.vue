  <template>
    <div>
      <div id="header-container">
        <Header 
          @scrollToContact="scrollToContact" 
          @scrollToAbout="scrollToAbout" 
          @scrollToCalorieCalculator="scrollToCalorieCalculator"
          @scrollToEmojiPage="scrollToEmojiPage"
          @dropdown="toggleTheDropdown" 
          @clearCalorieInput="closeCalorieCalculator"
        />
      </div>
      <div id="calculator-container">
        <CalorieCalculator 
          ref="calorieCalculator"
          @close="closeCalorieCalculator" 
          v-show="showTheDropdown && showCalorieCalculator"
          />
      </div>
      <router-view v-if="showCalorieCalculator" ></router-view>
      <Motivation />
      <Lifestyle />
      <FAQ /> 
      <Contact />
      <Footer />
      <div id="emoji-container">
        <EmojiPage 
          v-show="showTheEmojiPage"  
        />
      </div>
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

    },
    data() {
      return {
        showTheDropdown: false,
        showCalorieCalculator: false,
        showTheEmojiPage: false,
      };
    },
    methods: {
      scrollToContact() {
        const contactSection = document.getElementById('contact-form');
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
      scrollToEmojiPage(){
          const emojiPageSection = document.getElementById('emoji-page');
          if (emojiPageSection) {
            this.showTheEmojiPage = true;
            this.$nextTick(() => {
            emojiPageSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  },
    toggleTheDropdown() {
        this.showTheDropdown = !this.showTheDropdown;
          if (this.showTheDropdown) {
            this.showCalorieCalculator = true;
          } else {
            this.showCalorieCalculator = false;
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
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
  </style>



