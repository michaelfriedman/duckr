import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDooG1m8VjmncZk2rxryi1BItDZPTN7R-w",
    authDomain: "michaels-mock-twitter-app.firebaseapp.com",
    databaseURL: "https://michaels-mock-twitter-app.firebaseio.com",
    storageBucket: "michaels-mock-twitter-app.appspot.com",
    messagingSenderId: "790267092728"
  };
  firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
