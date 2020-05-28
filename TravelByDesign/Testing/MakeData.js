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
var userDocs = {}; //stores data fetched from firebase
var userFetched = false;

function getUsers() {
    var query = database.ref("users").orderByKey();
    query.once("value")
      .then(function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
              //console.log("user key: " + childSnapshot.key);
              //console.log("user value: ");
              //console.log(childSnapshot.val());
              userDocs[childSnapshot.key] = childSnapshot.val();
          });
          userFetched = true;
          //console.log("userDocs after getUsers finish: ");
          //console.log(userDocs);
          //return userDocs;
      });
}

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
function writeNewPost(user, postTitle, postPicture, caption, postLocation) {
    if(userFetched == true) {
        var newPostKey = database.ref().child('posts').push().key;
        var postData = {
            postid: newPostKey,
            userid: user.userid,
            title: postTitle,
            description: caption,
            location: postLocation,
            picture: postPicture
        }
        var updates = {};
        updates['/posts/' + newPostKey] = postData;

        return database.ref().update(updates);
    }
    else {
      console.log("1");
    }
}

function getCommand() {
    getUsers();
    /*
    var user = {
        userid: "-M6g0qovjBa4gMAcHpFl",
        firstname: "Harry",
        lastname: "Tjahja",
        email: "harry@gmail.com",
        location: "Irvine",
        password: "12345"
    }
    */
    setTimeout(
      function() {
          console.log("timer complete, executing writeNewPost");
          writeNewPost(userDocs["-M6g3oCP_ZCZ4pkzKYK4"], "Trip to Bali", './bali.jpg', "my first trip to bali", "Bali, Indonesia");
      }
      , 1000);
    writeNewUser("Foo", "Bar", "foob@gmail.com", "New York", "12345");

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
//var users = getUsers();
//console.log("users: ");
//console.log(users);
