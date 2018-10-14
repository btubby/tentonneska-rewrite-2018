import firebase from "./firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCZ9_u-34Ndv81wXcTgZvK1eoLLvsLxmvw",
  authDomain: "btubz-39f1f.firebaseapp.com",
  databaseURL: "https://btubz-39f1f.firebaseio.com",
  projectId: "btubz-39f1f",
  storageBucket: "btubz-39f1f.appspot.com",
  messagingSenderId: "282715318866"
};
firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
