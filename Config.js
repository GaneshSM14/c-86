import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyClkYkZiRFWYKNKCUMraVz68KZ5yWX6Gcs",
    authDomain: "news-letter-b356f.firebaseapp.com",
    databaseURL: "https://news-letter-b356f-default-rtdb.firebaseio.com",
    projectId: "news-letter-b356f",
    storageBucket: "news-letter-b356f.appspot.com",
    messagingSenderId: "286615640494",
    appId: "1:286615640494:web:6aae90c70ebcb47bc1103f",
    measurementId: "G-XQHWX0C7SV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()