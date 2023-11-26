import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDz54TPT0UGiWXcQfyy_-B98mOQndOOY3o",
  authDomain: "fir-auth-db365.firebaseapp.com",
  projectId: "fir-auth-db365",
  storageBucket: "fir-auth-db365.appspot.com",
  messagingSenderId: "748829174785",
  appId: "1:748829174785:web:faf643985651ffb4c56400"
    
  };
  const appConfig = initializeApp(firebaseConfig);
  export default appConfig