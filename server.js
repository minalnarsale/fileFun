const express = require('express')
const bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser({keepExtensions: true, uploadDir: "uploads"}));
app.engine('jade', require('jade').__express);

var serverPort = 5000;

//defining routes
app.use('/', require('./routes'));

//starting server
app.listen(serverPort,() => {
    console.log("server started on port " + serverPort);
});
