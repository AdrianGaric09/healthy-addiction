<template>
  <div>
      <Header /> 
      <Motivation />
      <Lifestyle />
      <FAQ /> 
      <router-view />
      <Footer />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Motivation from "@/components/Motivation.vue";
  import Lifestyle from "@/components/Lifestyle.vue";
  import FAQ from "@/components/FAQ.vue";
  //import Contact from "@/components/Contact.vue";
  import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Motivation,
    Lifestyle,
    FAQ,
    //Contact,
    Footer,
  },
};
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'sans-serif';
}

</style>



