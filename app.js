// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
var logfmt = require("logfmt");
var express = require("express");

var app = express();

app.use( logfmt.requestLogger() );

// Set up a URL route
app.get("/", function ( req, res ) {
	res.send( "Running on port: " + port );
});

app.listen( port, function () {
	console.log( "Listening on port " + port );
});
