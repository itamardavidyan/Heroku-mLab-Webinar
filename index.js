const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
// const mongoDBurl = "mongodb://<dbuser>:<dbpassword>@ds259742.mlab.com:59742/alerts";
const mongoDBurl = "mongodb://admin:myFirstWebinar1@ds259742.mlab.com:59742/alerts";

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/show', function(req, res) {
	console.log('/show');
	var name = req.body.name;
	// console.log(req.body);

	if (name === '' || name === undefined || name === null) return res.json({"msg":"enter your name!"});

	// enter mondodb code


	// <!-- 0 - comment when connect to mLab --!>
	const msg = 'Hello ' + name + '!!';
	return res.json({"msg":msg});

});

app.post('/add', function(req, res) {
	console.log('/add');

	// enter mondodb code

});

// <!-- 1 - simple connection to mongoDB --!>
// { <-- show event -->

	// MongoClient.connect(mongoDBurl, { useNewUrlParser: true }, function(err, db) {
	// 	if (err) throw err;
	// 	var dbo = db.db("alerts");
	// 	dbo.collection("messages").findOne({id:1}, function(err, result) {
	// 		if (err) throw err;
	// 		console.log(result);
	// 		return res.json({"msg":result.msg});
	// 	});
	// });

// }

// <!-- 2 - get the count of documents and return random msg --!> 
// { <-- show event -->

	// MongoClient.connect(mongoDBurl, { useNewUrlParser: true }, function(err, db) {
	// 	if (err) throw err;

	// 	const dbo = db.db("alerts");

	// 	dbo.collection("messages").countDocuments({}, function(err, numOfDocs){
	// 		if (err) throw err;
	// 		console.log(numOfDocs);
	// 		const ranMsgId = Math.floor(Math.random() * numOfDocs) + 1;
	// 		console.log(ranMsgId);

	// 		dbo.collection("messages").findOne({id:ranMsgId}, function(err, result) {
	// 			if (err) throw err;
	// 			return res.json({"msg":result.msg});
	// 		});
	// 	});
	// });

// }

// <!-- 3 - create new doc --!>
// { <-- add event -->

	// var name = req.body.name;

	// if (name === '' || name === undefined || name === null) return res.json({"msg":"enter your name!"});

	// MongoClient.connect(mongoDBurl, { useNewUrlParser: true }, function(err, db) {
	// 	if (err) throw err;

	// 	var dbo = db.db("alerts");

	// 	dbo.collection("messages").countDocuments({}, function(err, numOfDocs){
	// 		if (err) throw err;
	// 		numOfDocs++;
	// 		console.log(numOfDocs);
	// 		const newMsg = 'Hello ' + name +'!';

	// 		var myobj = { id: numOfDocs , msg: newMsg, counter:0 };

	// 		dbo.collection("messages").insertOne(myobj, function(err, resp) {
	// 			if (err) throw err;
	// 			return res.json({"msg":'the alert created successfully'});
	// 		});
	// 	});
	// });

// }


// <!-- 4 - update counter --!>
// { <-- show event -->
	
	// MongoClient.connect(mongoDBurl, { useNewUrlParser: true }, function(err, db) {
	// 	if (err) throw err;

	// 	const dbo = db.db("alerts");

	// 	dbo.collection("messages").countDocuments({}, function(err, numOfDocs){
	// 		if (err) throw err;
	// 		const ranMsgId = Math.floor(Math.random() * numOfDocs) + 1; // random number between 1 to numOfDocs

	// 		dbo.collection("messages").findOne({id:ranMsgId}, function(err, result) {
	// 			if (err) throw err;

	// 			var myquery = { id: ranMsgId };
	// 			var newvalues = { $inc: { counter: 1} };

	// 			dbo.collection("messages").updateOne(myquery, newvalues, function(err, unUseResult) {
	// 				if (err) throw err;
	// 				console.log(unUseResult);
	// 				return res.json({"msg":result.msg});
	// 			});
	// 		});
	// 	});
	// });

// }

const PORT = process.env.PORT || 3000; // enable when deploy to Heroku (commit to GitHub)
// const PORT = 8080; // enable when work localy
app.listen(PORT, function() {
	console.log("listen to PORT " + PORT);
});