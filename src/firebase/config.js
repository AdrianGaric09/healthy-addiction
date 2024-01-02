import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD2Zh4Lkx3XdGDr_CfN2l13F19hkEqyOwE",
    authDomain: "healthy-addiction-915e0.firebaseapp.com",
    projectId: "healthy-addiction-915e0",
    storageBucket: "healthy-addiction-915e0.appspot.com",
    messagingSenderId: "244957294389",
    appId: "1:244957294389:web:ef2d3c32073c5e937a667c"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const projectFirestore = getFirestore(app); 

  setPersistence(auth, browserSessionPersistence);

  export { 
    projectFirestore,
    auth
  };