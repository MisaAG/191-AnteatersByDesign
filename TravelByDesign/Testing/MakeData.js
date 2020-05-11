//import {getDatabase} from './firebasesetup.mjs';
const firebase = require("firebase/app");
const readline = require("readline");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
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
var database = firebase.database();

console.log("database setup complete");

function writeNewUser(firstName, lastName, userEmail, userLocation, userPassword) {
  /*
    This Function Takes user information as parameters
    and writes it into the users document of our Firebase Database
  */
    var newUserKey = database.ref().child('users').push().key;
    var userData = {
      userid: newUserKey,
      firstname: firstName,
      lastname: lastName,
      email: userEmail,
      location: userLocation,
      password: userPassword
    }
    var updates = {};
    updates['/users/' + newUserKey] = userData;

    return database.ref().update(updates);
}

function getCommand() {
    //getDatabase();
    //while(true) {
        //write post not implemented yet
        //console.log("Input command to begin making data [writeuser, writepost], type quit to exit: ");
        //var userInput;
        //getInput();
        /*
        if (userInput == "writeuser") {
            userInput = window.prompt("Input user data here (format: [firstname,lastname,email,location,password])");
            userData = userInput.split(",");
            if (userData.length != 5) {
                console.log("ERROR: incorrect format for writeuser input!");
            }
            else {
              writeNewUser(userData[0], userData[0], userData[0], userData[0], userData[0]);
              console.log("user created!");
            }
        }
        if (userInput == "writepost") {
            console.log("writepost currently in development");
        }
        if (userInput == "quit") {
            return;
        }
        else {
            console.log("invalid command");
        }
        */
    //}
}
getCommand();
