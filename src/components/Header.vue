<template>
  
  <div id="header">
      <nav :class="{ sticky: isSticky }">
        <a href="/"><img src="../assets/HA.png" alt="Healthy Addiction"></a>
          <div class="nav-links" id="navLinks">
            <i class="fa fa-times" @click="HideMenu()"></i>
              <ul class="linkovi">
                <li><a href="/">{{ $t('header.home') }}</a></li>
                <li><a href="#" @click.prevent="$emit('scrollToAbout')">{{ $t('header.about') }}</a></li>
                <li><router-link to="/CalorieCalculator" @click.prevent="handleCalorieCalculatorClick">{{ $t('header.calorie-calculator') }}</router-link></li>
                <li><router-link to="/WaterTracker" @click.prevent="handleWaterTrackerClick">{{ $t('header.water-tracker') }}</router-link></li>
                <li><a href="#" @click.prevent="$emit('scrollToContact')">{{ $t('header.contact') }}</a></li>
                <li class="Login-popup" @click="openLoginPopup"><a href="#">{{ $t('header.login') }}</a></li>
                <!--Izbornik jezika-->
                <li class="locale-changer">
                  <select v-model="$i18n.locale" class="custom-select">
                    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
                  </select>
                    <ion-icon class="jezik" name="language-outline"></ion-icon>
                </li>
              </ul>
          </div>
          <i class="fa fa-bars" @click="ShowMenu()"></i>
      </nav>

      <div class="wrapper" :class="{ show: showLoginPopup }">
        <span class="icon-close" @click="closeLoginPopup"><ion-icon name="close" ></ion-icon></span>

          <div class="form-box login">
              <h2>Login</h2>
              <form action="#">
                  <div class="input-box">
                      <span class="icon"><ion-icon name="mail" ></ion-icon></span>
                      <input type="email" >
                      <label>Email</label>
                  </div>
                  <div class="input-box">
                      <span class="icon"><ion-icon name="lock-closed" ></ion-icon></span>
                      <input type="password">
                             
                      <label>Password</label>
                  </div>
                  <div class="remember-me">
                      <label><input type="checkbox">Remember Me</label>
                      <a href="#">Forgot password?</a>
                  </div>
                  <button type="submit" class="btn" @click.prevent="login">Login</button>
                  <div class="login-register">
                      <p>Don't have an account? <a href="#" class="register-link" @click="register">Register</a></p>
                  </div>
              </form>
          </div>

          <div class="form-box register">
            <h2>Registration</h2>
              <form action="#">
                  <div class="input-box">
                      <span class="icon"><ion-icon name="mail" ></ion-icon></span>
                      <input type="email" >
                             
                      <label>Email</label>
                  </div>
                  <div class="input-box">
                      <span class="icon"><ion-icon name="lock-closed" ></ion-icon></span>
                      <input type="password" >
                             
                      <label>Password</label>
                  </div>
                  <button type="submit" class="btn register-btn" @click.prevent="register">Register</button>
                  <div class="login-register">
                      <p>Already have an account? <a href="#" class="login-link">Login</a></p>
                  </div>
              </form>    
            </div>
        </div>
    </div>

    <div class="text-box">
        <h1><span class="auto-type"></span></h1>
        <router-link to="/EmojiPage" class="hero-btn" @click.prevent="showEmojiPage">
            {{ $t('header.click-for') }} <strong>{{ $t('header.success') }}</strong>
        </router-link>       
    </div>
    
</template>

<script>

import Typed from 'typed.js';

export default {
  
    name: 'Header', 
    
    data() {
      return {
        isSticky: false,
        isLoginPopupVisible: false,
      };
    },
  
    
  mounted() {
    const wrapper = document.querySelector('.wrapper');
    const loginlink = document.querySelector('.login-link');
    const registerlink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.Login-popup');
    const iconClose = document.querySelector('.icon-close');
    
    this.initTyped(); 
  
    registerlink.addEventListener('click', () => {
      wrapper.classList.add('active');
    });
    
    loginlink.addEventListener('click', () => {
      wrapper.classList.remove('active');
    });
    
    btnPopup.addEventListener('click', () => {
      wrapper.classList.add('active-popup');
    });
    
    iconClose.addEventListener('click', () => {
      wrapper.classList.remove('active-popup');
    });
    
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    '$i18n.locale': 'initTyped'
  },
  methods: {

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
    openLoginPopup() {
      const wrapper = document.querySelector('.wrapper');
      wrapper.classList.add('active-popup');
      window.scrollTo({ top: 0, behavior: "smooth"});

      this.isLoginPopupVisible = true;

      document.body.style.overflow = 'hidden';
    },
    closeLoginPopup() {
      const wrapper = document.querySelector('.wrapper');
      wrapper.classList.remove('active-popup');
      
      this.isLoginPopupVisible = false;

      document.body.style.overflow = 'auto';
    },  
    initTyped() {
      if (this.typedInstance) {
        this.typedInstance.destroy(); // Destroy existing Typed instance if it exists
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
    
    handleCalorieCalculatorClick() {
      this.$emit('scrollToCalorieCalculator');
      this.$emit('dropdown');
    },
    handleWaterTrackerClick(){
      this.$emit('scrollToWaterTracker');
    },
    showEmojiPage() {
      this.$emit('scrollToEmojiPage');
    },
},
  };
</script>

<style> 

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

.nav-links .Login-popup{
    width: 40px;
    height: 25px;
    border: 2px solid #fff;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.5s;
}
nav.sticky .nav-links .Login-popup {
  border: 2px solid black;
}

.nav-links .Login-popup:hover{
    background: #2461FF;
}
nav.sticky .nav-links .Login-popup:hover{
    background: #ffffffe0;
}
.wrapper{
    position: relative;
    width: 480px;
    height: 500px;
    left: 33%;
    background: transparent;
    border: 2px solid rgba(255,255,255,.5);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    overflow: hidden;
    transition: transform .5s ease, height .2s ease;
    transform: scale(0);
}
.wrapper.active-popup{
    transform: scale(1);
}
.wrapper.active{
    height: 540px;
}

.wrapper .form-box{
    width: 100%;
    padding: 40px;
}
.wrapper .form-box.login{
    transition: transform .18 ease;
    transform: translateX(0);
}
.wrapper.active .form-box.login{
    transition: none;
    transform: translateX(-500px);
}
.wrapper .form-box.register{
    position: absolute;
    transition: none;
    transform: translateX(500px);
    padding: 40px;
    max-width: 400px;
}
.wrapper.active .form-box.register{
    transition: transform .18 ease;
    transform: translateX(0);
}
.wrapper .icon-close{
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background: #d9e0e0;
    font-size: 2em;
    color: #070707;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    cursor: pointer;
    z-index: 1;
}

.form-box h2{
    font-size: 2em;
    text-align: center;
    color: #fff;
}
.input-box{
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #ffffff;
    margin: 30px 0;
}
.input-box label{
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: #ffffff;
    font-weight: 500;
    pointer-events: none;
    transition: .5s;
}
.input-box input:focus~label,
.input-box input:valid~label{
    top: -5px;
}

.input-box input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: #ffffff;
    font-weight: 600;
    padding: 0 35px 0 5px;
}
.input-box .icon{
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: #ffffff;
    line-height: 57px;
}
.remember-me{
    font-size: .9em;
    color: #ffffff;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
}
.remember-me label input{
    accent-color: #ffffff;
    margin-right: 3px;
}
.remember-me a{
    color: #ffffff;
    text-decoration: none;
}
.remember-me a:hover{
    text-decoration: underline;
}
.btn{
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #010202;
    font-weight: 500;
}
.login-register{
    font-size: .9em;
    color: #ffffff;
    text-align: center;
    font-weight: 500;
    margin: 25px 0 10px;
}
.login-register p a{
    color:#ffffff;
    text-decoration: none;
    font-weight: 600;
}
.login-register p a:hover{
    text-decoration: underline;
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