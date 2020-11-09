// import * as firebase from "firebase";

// This is how I solved this

import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBRuuAYKpNXht8zxe8kpMg0YuOwjIui6jE",
  authDomain: "react-redux-app-6015d.firebaseapp.com",
  databaseURL: "https://react-redux-app-6015d.firebaseio.com",
  projectId: "react-redux-app-6015d",
  storageBucket: "",
  messagingSenderId: "143045144824"
};

const firebaseApp = firebase.initializeApp(config);

export default firebase;
