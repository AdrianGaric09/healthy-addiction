<template>
    <div>
    <div class="header">
        <nav :class="{ sticky: isSticky }">
            <a href="/"><img src="../assets/HA.png" alt="Healthy Addiction"></a>
            <div class="nav-links" id="navLinks">
                <ul class="linkovi">
                    <li><a href="/">HOME</a></li>
                    <li><a href="#" @click.prevent="$emit('scrollToAbout')">ABOUT</a></li>
                    <li><router-link to="/CalorieCalculator" @click.prevent="handleCalorieCalculatorClick">CALORIE CALCULATOR</router-link></li>
                    <li><a href="">WATER TRACKER</a></li>
                    <li><a href="#" @click.prevent="$emit('scrollToContact')">CONTACT</a></li>
                    <li class="Login-popup" @click="openLoginPopup"><a href="#">LOGIN</a></li>
                    <li><a href="">PROFILE</a></li>
                    <!--Izbornik jezika-->
                    <li class="lang-dropdown" @click="toggleDropdown">
                        <a href="#" class="dropdown-toggle">
                            <span> {{ selectedLang }}</span>
                            <ion-icon name="language-outline"></ion-icon>
                        </a>
                        <ul class="dropdown-menu" v-show="isDropdownVisible">
                            <li v-for="(lang, index) in languages" :key="index" @click="changeLanguage(lang)">
                            <a :class="{active: lang === selectedLang}">{{ lang }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="wrapper" :class="{ show: showLoginPopup }">
            <span class="icon-close" @click="closeLoginPopup"><ion-icon name="close" ></ion-icon></span>

            <div class="form-box login">
                <h2>Login</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail" ></ion-icon></span>
                        <input type="email" required>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed" ></ion-icon></span>
                        <input type="password" required>
                        <label>Password</label>
                    </div>
                    <div class="remember-me">
                        <label><input type="checkbox">Remember Me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" class="btn" @click="login">Login</button>
                    <div class="login-register">
                        <p>Don't have an account? <a href="#" class="register-link" @click="register">Register</a></p>
                    </div>
                </form>
            </div>

            <div class="form-box register">
                <h2>Registration</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="person" ></ion-icon></span>
                        <input type="text" required id="username">
                        <label>Username</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail" ></ion-icon></span>
                        <input type="email" required id="email">
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed" ></ion-icon></span>
                        <input type="password" required id="password">
                        <label>Password</label>
                    </div>
                    <div class="remember-me">
                        <label><input type="checkbox">I agree to the terms & conditions</label>
                    </div>
                    <button type="submit" class="btn register-btn" @click="register">Register</button>
                    <div class="login-register">
                        <p>Already have an account? <a href="#" class="login-link">Login</a></p>
                    </div>
                </form>    
            </div>
        </div>
    </div>

        <div class="text-box">
            <h1><span class="auto-type"></span></h1>
            <a href="" class="hero-btn">CLICK FOR <strong>SUCCESS</strong></a>
        </div>
    </div>
</template>

<style > 

.header{
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

/*css za lang dropdown*/ 
.lang-dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  display: none;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: #000;
  text-align: center;
}
.sticky .dropdown-menu,
.sticky .dropdown-menu li,
.sticky .dropdown-menu li:hover {
  background-color: #fff;
  color: #000;
}
.lang-dropdown:hover .dropdown-menu {
  display: block; 
}
.dropdown-menu li {
  padding: 5px 10px;
}
.dropdown-menu li:hover {
  background-color: #ffffff;
  cursor: pointer;
}
.lang-dropdown a.active {
  font-weight: bold;
}
.lang-dropdown .dropdown-menu li a {
  color: black;
}
.dropdown-toggle ion-icon {
  margin-left: 5px;
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
</style>

<script>

import Typed from 'typed.js';

export default {
  data() {
    return {
      // Dostupni jezici
      languages: ['English', 'Croatian'],
      // Izabrani jezici
      selectedLang: 'English',
      isSticky: false,
      isDropdownVisible: false,
      isLoginPopupVisible: false,
    };
  },
  mounted() {
    const wrapper = document.querySelector('.wrapper');
    const loginlink = document.querySelector('.login-link');
    const registerlink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.Login-popup');
    const iconClose = document.querySelector('.icon-close');
    const langDropdown = document.querySelector('.lang-dropdown');
    const dropdownMenu = langDropdown.querySelector('.dropdown-menu');
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
    langDropdown.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
    });

    langDropdown.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none';
    });
    
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
    changeLanguage(lang) {
      this.selectedLang = lang;
      this.isDropdownVisible = false;
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
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
      new Typed(".auto-type", {
        strings: ["Dream, Believe, Achieve", "Embrace the Journey", "Make Yourself Proud", "Strive for Greatness", "Unleash Your Potential", "Inspire, Empower, Succeed", "Find Your Purpose", "Rise, Conquer, Repeat", "Create Your Legacy", "Dream Big, Hustle Hard" ],
        typeSpeed: 90,
        backSpeed: 70,
        smartBackspace: true,
        backDelay: 2000,
        loop: true,

      });
    },  
    toggleTheDropdown() {
      // Emits an event to the parent component to toggle the dropdown
      this.$emit('dropdown');
    },
    handleCalorieCalculatorClick() {
      this.$emit('scrollToCalorieCalculator');
      this.$emit('dropdown');
    },
},
};
</script>
