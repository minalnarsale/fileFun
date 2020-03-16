const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser({keepExtensions: true}));

const serverPort = 5000;

//defining routes
app.use('/', require('./routes'));

//starting server
app.listen(serverPort,() => {
    console.log('server started on port ' + serverPort);
});
