import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCTe-LpbuTvS6NS6jSWmbhNDd7WC8jOivw",
    authDomain: "photofeed-jayjay.firebaseapp.com",
    databaseURL: "https://photofeed-jayjay.firebaseio.com",
    projectId: "photofeed-jayjay",
    storageBucket: "photofeed-jayjay.appspot.com",
    messagingSenderId: "306604128293",
    appId: "1:306604128293:web:2cb96975253d2c82dfe7cc",
    measurementId: "G-BS20EJY8RF"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  export const f = firebase;
  export const database = firebase.database;
  export const auth = firebase.auth;
  export const storage = firebase.storage;