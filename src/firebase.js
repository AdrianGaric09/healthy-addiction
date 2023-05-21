import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2Zh4Lkx3XdGDr_CfN2l13F19hkEqyOwE",
    authDomain: "healthy-addiction-915e0.firebaseapp.com",
    projectId: "healthy-addiction-915e0",
    storageBucket: "healthy-addiction-915e0.appspot.com",
    messagingSenderId: "244957294389",
    appId: "1:244957294389:web:ef2d3c32073c5e937a667c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default{
    firebase,
  };