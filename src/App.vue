<template>
  <div>
      <Header /> 
      <Motivation /> 
      <router-view />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Motivation from "@/components/Motivation.vue";

export default {
  name: "App",
  components: {
    Header,
    Motivation
    
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



