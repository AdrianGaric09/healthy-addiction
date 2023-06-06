<template>
   <div>
    <div id="header-container">
      <Header 
        @scrollToContact="scrollToContact" 
        @scrollToAbout="scrollToAbout" 
        @scrollToCalorieCalculator="scrollToCalorieCalculator"
        @dropdown="toggleTheDropdown" 
        @clearCalorieInput="closeCalorieCalculator"
      />
    </div>
    <div id="calculator-container" >
      <CalorieCalculator 
        @close="closeCalorieCalculator" 
        v-show="showTheDropdown && showCalorieCalculator"
        :resetForm="resetForm"
        />
    </div>
    <Motivation />
    <Lifestyle />
    <FAQ /> 
    <Contact />
    <router-view v-if="showCalorieCalculator"/>
    <Footer />
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
  },
  data() {
    return {
      showTheDropdown: false,
      showCalorieCalculator: false,
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
      this.showCalorieCalculator = false; 
      if (this.$route.name === "CalorieCalculator") {
        this.$router.replace({ name: "home" });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      this.resetForm();
    },
    resetForm() {
      if (this.$refs.calorieForm) {
    this.$refs.calorieForm.$el.reset(); // Reset the form element directly
  }

      // Reset form fields manually
      this.showCalorieCalculator = false;
      this.showTheDropdown = false;
      this.$nextTick(() => {
        const form = document.getElementById('calorie-form');
        if (form) {
          form.reset();
        }
      });
      window.location.reload();
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



