<template>
  <div id="header">
      <nav :class="{ sticky: isSticky }">
        <router-link to="/" @click.prevent="$emit('scrollToLogo')">
          <img src="@/assets/HA.png" alt="Healthy Addiction" />
        </router-link>
          <div class="nav-links" id="navLinks">
            <i class="fa fa-times" @click="HideMenu()"></i>
              <ul class="linkovi">
                <li><router-link to="/" @click.prevent="$emit('scrollToHome')" >{{ $t('header.home') }}</router-link></li>
                <li><router-link to="/" @click.prevent="$emit('scrollToAbout')">{{ $t('header.about') }}</router-link></li>
                <li><router-link to="/calorieCalculator" @click.prevent="$emit('scrollToCalorieCalculator')">{{ $t('header.calorie-calculator') }}</router-link></li>
                <li><router-link to="/WaterTracker" @click.prevent="$emit('scrollToWaterTracker')">{{ $t('header.water-tracker') }}</router-link></li>
                <li><router-link to="/" @click.prevent="$emit('scrollToContact')">{{ $t('header.contact') }}</router-link></li>
                <li><router-link to="/login" @click="handleLogout">{{ $t('header.logout') }}</router-link></li>
                <!--Izbornik jezika-->
                <li class="locale-changer">
                    <select v-model="$i18n.locale" class="custom-select" id="language-select" aria-label="Select Language">
                        <option
                            v-for="locale in $i18n.availableLocales"
                            :key="`locale-${locale}`"
                            :value="locale"
                            :title="`Switch to ${locale} locale`"
                        >
                            {{ locale }}
                        </option>
                    </select>
                    <ion-icon class="jezik" name="language-outline" aria-label="Icon representing language selection" role="img"></ion-icon>
                </li>
              </ul>
          </div>
          <i class="fa fa-bars" @click="ShowMenu()"></i>
      </nav>
    </div>

    <div class="text-box">
        <h1><span class="auto-type"></span></h1>
        <router-link to="/EmojiPage" class="hero-btn" @click.prevent="$emit('scrollToEmojiPage')">
            {{ $t('header.click-for') }} <strong>{{ $t('header.success') }}</strong>
        </router-link>       
    </div>
</template>

<script>

import Typed from 'typed.js';

export default {
  
    name: 'Header', 

    emits: [
    'scrollToContact',
    'scrollToAbout',
    'scrollToCalorieCalculator',
    'scrollToEmojiPage',
    'scrollToWaterTracker',
    'scrollToHome',
    'scrollToLogo'
  ],
    
    data() {
      return {
        isSticky: false,
        isLoginPopupVisible: false,
      };
    },
  
    
  mounted() {
    
    this.initTyped(); 
  
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    '$i18n.locale': 'initTyped'
  },
  
  methods: {

    handleLogout() {
  
      this.$store.dispatch('logout')
        .then(() => {
        })
        .catch(error => {
          console.error(error);
        });
    },

    ShowMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
    },
    HideMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.style.right = "-200px";
    },
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
   
    initTyped() {
      if (this.typedInstance) {
        this.typedInstance.destroy(); 
      }

      this.typedInstance = new Typed(".auto-type", {
        strings: [
          this.$t('header.string1'),
          this.$t('header.string2'),
          this.$t('header.string3'),
          this.$t('header.string4'),
          this.$t('header.string5'),
          this.$t('header.string6'),
          this.$t('header.string7'),
          this.$t('header.string8'),
          this.$t('header.string9'),
          this.$t('header.string10')
        ],
        typeSpeed: 90,
        backSpeed: 70,
        smartBackspace: true,
        backDelay: 2000,
        loop: true,
      });
    },
  },
};
</script>

<style scoped> 
  .locale-changer  {
    color: white;
  }
  .locale-changer select {
    color: white;
  }
  .locale-changer .jezik{
    padding-left: 2px;
  }
  nav.sticky .locale-changer,
  nav.sticky .locale-changer select {
    color: black;
  }
  .custom-select {
    background-color: transparent;
    border: none;
  }
  .custom-select option {
    color: black; 
    background-color: transparent;
    border: none;
  }

  #header{
    min-height: 100vh;
    width: 100%;
    background-image:linear-gradient(rgba(6, 20, 74, 0.4),rgba(6, 23, 89, 0.4)), url(../assets/blue.jpeg) ;
    background-position: center;
    background-size: cover;
    position: relative;
  }

  nav{
    display: flex;
    padding: 10px 210px 0px 30px;
    justify-content: space-between;
    align-items: center;
    right: 0;
    left: 0;
    top: 0;
    transition: 0.5s ease-in-out;
  }

  nav.sticky{
    position: fixed;
    display: flex;
    padding: 10px 210px 0px 30px;
    justify-content: space-between;
    align-items: center;
    right: 0;
    left: 0;
    top: 0;
    transition: 0.5s;
    background-color: #ffffffdb;
    border-bottom: 2px solid black;
    z-index: 1;
  }

  nav img{
    width: 150px;
    transition: width 0.5s ease-in-out;
  }
  nav.sticky img{
    width: 75px;
  }

  .nav-links{
    flex: 1;
    text-align: right;
  }

  .nav-links ul li{
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;
  }

  nav.sticky .nav-links ul li a{
    color: #000;
  }

  .nav-links ul li a{
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
  }

  nav.sticky .nav-links ul li::after{
    background: #000000;
  }

  .nav-links ul li::after{
    content: '';
    width: 0%;
    height: 3px;
    background: #ffffff;
    display: block;
    margin: auto;
    transition: 0.5s;
  }

  .nav-links ul li:hover::after{
      width: 100%;
  }

  .text-box{
    width: 100%;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .text-box h1{
    font-size: 80px;
    padding: 150px;
      
  }

  .hero-btn{
    display: inline-block;
    text-decoration: none;
    color: #fff;
    border: 3px solid #fff;
    padding: 20px 40px;
    font-size: 18px;
    background: transparent;
    position: relative;
    cursor: pointer;
    transition: 1s;
  }

  .hero-btn:hover{
    border: 3px solid #ffffff;
    background: #2461FF;
  }

  nav .fa{
    display: none;
  }

@media(max-width: 700px){
  .text-box h1{
    font-size: 30px;
  }
  .nav-links ul li{
    display: block;
  }
  .nav-links{
    position: absolute;
    background: #3646f4;
    height: 100vh;
    width: 200px;
    top: 0;
    right: 0;
    text-align: left;
    z-index: 2;
    transition: 1s;
  }
  nav .fa{
    display: block;
    color:#fff;
    margin: 10px;
    font-size: 22px;
    cursor: pointer;
  }
  .nav-links ul{
      padding: 30px;
  }
}
</style>