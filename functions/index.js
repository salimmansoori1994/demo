const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
	 var x=30
  response.send("Hello from Firebase! "+x);
 });

 exports.helloayaz = functions.https.onRequest((request, response) => {
	 var a = 90;
  response.send("value is :"+a);
 });

 