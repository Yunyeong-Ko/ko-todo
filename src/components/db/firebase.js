import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8g1rC4wkXMQqNYDL5AwnDsiOR_df_Zqw",
  authDomain: "idontknow-a1019.firebaseapp.com",
  projectId: "idontknow-a1019",
  storageBucket: "idontknow-a1019.appspot.com",
  messagingSenderId: "885413536168",
  appId: "1:885413536168:web:0ad997ba71587eb8b83d9d",
  measurementId: "G-EWWWRTVL59",
});

const DB = firebaseApp.firestore();

export default DB;
