import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB90n0JLpGiTCi1x23QvjGUw8duX11uYa8",
    authDomain: "qacinema-e0159.firebaseapp.com",
    databaseURL: "https://qacinema-e0159.firebaseio.com",
    projectId: "qacinema-e0159",
    storageBucket: "qacinema-e0159.appspot.com",
    messagingSenderId: "369456444338",
    appId: "1:369456444338:web:0db12e023883e393392aab"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;