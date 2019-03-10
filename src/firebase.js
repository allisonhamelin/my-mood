import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBnycpvSVWkh7F4PCQ76tNkEPmWJMksT4I",
    authDomain: "my-mood-7ee9d.firebaseapp.com",
    databaseURL: "https://my-mood-7ee9d.firebaseio.com",
    projectId: "my-mood-7ee9d",
    storageBucket: "my-mood-7ee9d.appspot.com",
    messagingSenderId: "637923581938"
};
firebase.initializeApp(config);

// Get a reference to the database service
export default firebase.database();
