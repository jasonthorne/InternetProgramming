const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//+++++++++++++++REMEMBER: These exist on the SERVER side ++++++++++++

//
	exports.helloWorld1 = functions.https.onRequest((request, response) => {
		///functions.logger.info("Hello logs!", {structuredData: true});
		//response.send("Sup, sexy!");
		response.send(request.query.data); //adding 'data' request to be sent to back end (?data= dataToSend)
	});
	
	
	exports.doubleNumber = functions.https.onRequest((request, response) => {
		var myDbl = parseInt(request.query.data * 2); //add given '?data= ' from browser, and double it
		response.send("number is: " + myDbl); //send back doubled number
	});

