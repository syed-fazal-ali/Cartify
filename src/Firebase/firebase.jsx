import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDmdq-WFFVUp3FnElfkIBr3sglC4TotxQs",
    authDomain: "store-f46c0.firebaseapp.com",
    projectId: "store-f46c0",
    storageBucket: "store-f46c0.firebasestorage.app",
    messagingSenderId: "804668179056",
    appId: "1:804668179056:web:67d5cf7ea3b26751ecaab5",
    measurementId: "G-VKY5DLWPGE",
    databaseURL:'https://store-f46c0-default-rtdb.firebaseio.com/'
  };

  export const  app = initializeApp(firebaseConfig);