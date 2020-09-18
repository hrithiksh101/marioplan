import firebase from 'firebase/app' ;
import 'firebase/firestore' ;
import 'firebase/auth' ;


// Initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyDA5RXezNNPONd409WOHu4K3IRHLNA89Z4",
    authDomain: "hrithik-mario-plan.firebaseapp.com",
    databaseURL: "https://hrithik-mario-plan.firebaseio.com",
    projectId: "hrithik-mario-plan",
    storageBucket: "hrithik-mario-plan.appspot.com",
    messagingSenderId: "999611631447",
    appId: "1:999611631447:web:3f1ff1b19dfaf18216e012",
    measurementId: "G-DCJQDNTNPM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

  export default firebase ;