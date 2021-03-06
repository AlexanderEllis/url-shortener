var http = require('http');
var express = require('express');
var app = express();
var urlList = {};
var url;

app.get('/', function(req, res) {
	res.end("<h1>Enter a url following the link to receive a shortened URL</h1><p>Example: https://lit-brook-34966.herokuapp.com/http://www.google.com</p>");
});

app.get('/*', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	if (req.url.indexOf("http://www.") < 0) {
		url = req.url;
		url = url.slice(1,url.length);
		if (urlList[url] === undefined) {
			res.end("Incorrect URL");
			return;
		}
		else {
		res.redirect(urlList[url]);
		return;
		}
	}
	var result = {};
	var redirectID = Math.floor(Math.random() * 9999);
	url = req.url;
	url = url.slice(1,url.length);
	urlList[potato] = url;
	result.originalUrl = url;
	result.shortUrl = "https://lit-brook-34966.herokuapp.com/" + redirectID;
	result = JSON.stringify(result);
	res.end(result);
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Server listening at:" + port);
});