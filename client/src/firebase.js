import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCU2R4I2gGWeAa1ZOd4T_crDWiSCvBL8wU",
  authDomain: "shareviablog.firebaseapp.com",
  projectId: "shareviablog",
  storageBucket: "shareviablog.appspot.com",
  messagingSenderId: "975107583081",
  appId: "1:975107583081:web:9b6fa47595c21fe380c6f8"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;