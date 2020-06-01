//var firebase = require("firebase/app");
import * as firebase from 'firebase';
// Add the Firebase products that you want to use
//require("firebase/auth");
//require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyC6cxgEMxsPhwBzLXwa89LDski-ScrMvnc",
    authDomain: "travelbydesign-ae055.firebaseapp.com",
    databaseURL: "https://travelbydesign-ae055.firebaseio.com",
    projectId: "travelbydesign-ae055",
    storageBucket: "travelbydesign-ae055.appspot.com",
    messagingSenderId: "11346220251",
    appId: "1:11346220251:web:edee5c15098a978334e8fe",
    measurementId: "G-ZN0F4JZTBE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

/* 
const app = Firebase.initializeApp(firebaseConfig);
const database = app.database();

export {database};
console.log("database setup complete");
 */