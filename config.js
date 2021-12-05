 import * as firebase from "firebase";
 var firebaseConfig = {
  apiKey: "AIzaSyBbzXKRCRW66YT_4hUBoUCAl-csAf3bAQI",
  authDomain: "project-60-2ee05.firebaseapp.com",
  databaseURL: "https://project-60-2ee05-default-rtdb.firebaseio.com",
  projectId: "project-60-2ee05",
  storageBucket: "project-60-2ee05.appspot.com",
  messagingSenderId: "951744628149",
  appId: "1:951744628149:web:bbdaa91258d35b65b885fc",
  measurementId: "G-GK29BZ2LGT"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase.database()
 

  