import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD2Zh4Lkx3XdGDr_CfN2l13F19hkEqyOwE",
    authDomain: "healthy-addiction-915e0.firebaseapp.com",
    projectId: "healthy-addiction-915e0",
    storageBucket: "healthy-addiction-915e0.appspot.com",
    messagingSenderId: "244957294389",
    appId: "1:244957294389:web:ef2d3c32073c5e937a667c"
  };

  // init firebase app
  const app = initializeApp(firebaseConfig);


  // init firestore
  const projectFirestore = getFirestore(app); // Use getFirestore to initialize Firestore

  export { 
    projectFirestore
  };