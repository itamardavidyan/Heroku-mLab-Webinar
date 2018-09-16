const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var mongoDBurl = "mongodb://itamard:Google100!@ds229312.mlab.com:29312/forms";

app.get('/', function(req,res) {
	console.log("/");
	res.sendFile('index.html', {root: path.join(__dirname, './public')});
});

app.get('/index', function(req,res) {
	console.log("/index");
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/setTable', function(req, res) {
    console.log('/setTable');
    MongoClient.connect(mongoDBurl, function(err, db) {
		if (err) throw err;
		var dbo = db.db("forms");

		dbo.collection("forms").find({}).sort({form_id: 1}).toArray(function(err, result) {
			if (err) throw err;
			res.send(result);
			db.close();
		});
	});
});

app.post('/save', function(req, res) {
    console.log('/save');
    MongoClient.connect(mongoDBurl, function(err, db) {
		if (err) throw err;
		var dbo = db.db("forms");
		var lastID;

		dbo.collection('forms', function(err, collection) {
			collection
				.find()
				.sort({form_id: -1})
				.limit(1)
				.next()
				.then(
				function(doc) {
					lastID = doc.form_id;
					lastID++;

					var myobj = { form_id: lastID , form_name: req.body.formname, num_submissions:0, fields: JSON.parse(req.body.tabledata), submissions: JSON.parse(req.body.inputNames) };

					dbo.collection("forms").insertOne(myobj, function(err, res) {
						if (err) throw err;
						db.close();
					});
				},
				function(err) {
					console.log('Error:', err);
				}
			);
		});
	});
});

const PORT = process.env.PORT || 3000;
// const PORT = 8080;
app.listen(PORT, function() {
	console.log("listen to PORT 8080");
});