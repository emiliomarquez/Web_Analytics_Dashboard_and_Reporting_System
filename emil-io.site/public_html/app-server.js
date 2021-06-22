// app.js file
'use strict';
const session = require('express-session');
var express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
// const session = require('sessid');
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://emilio:virtualNugget@cse135.yiyae.mongodb.net/hw3data';
let app = express();
let jsonwebtoken = require("jsonwebtoken");

app.set('json spaces', 4);

// importing routes
let staticRoute = require("./routes/api-routes-static.js");
let perfRoute = require("./routes/api-routes-perf.js");
let actRoute = require("./routes/api-routes-activity.js");
let userRoute = require("./routes/api-routes-user.js");


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({
    secret: "Emilio Marquez Session",
    resave: true,
    saveUninitialized: true
  }));



var db;
// mongodb://localhost:27017/
// mongodb://localhost/resthub
// Connect to Mongoose and set connection variable
mongoose.connect(uri, { useNewUrlParser: true}, (err, client) => {
    if (err) {
        console.log(`DB Connection Error: ${err.message}`);
    } else {
        
        console.log(`Connected To DB`);
    }

    // Add SessionID to each entry
    req.body.forEach(entry => {
        entry['sessionID'] = req.sessionID;
    });

});


app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      });
    } else {
      req.user = undefined;
      next();
    }
  });

  // following resource below helped me formulate code to allow access from reporting site below:
  // https://www.freecodecamp.org/news/access-control-allow-origin-header-explained/  
  app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "https://reporting.emil-io.site");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, DELETE, GET, POST"
    );
    
    // res.header('Access-Control-Allow-Origin', 'http://reporting.emil-io.site');
    // res.header('Access-Control-Allow-Headers', 'http://reporting.emil-io.site');
    // res.header('Access-Control-Allow-Methods', 'http://reporting.emil-io.site');
      
    next();
  });
  


var dba = mongoose.connection;

// Added check for DB connection
if(!dba)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

var port = 3005;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World 2021 with Express'));

app.use('/static', staticRoute);
app.use('/performance', perfRoute);
app.use('/activity', actRoute);
app.use('/users', userRoute);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

// ######################## old code below ########################
//var jsonServer = require('json-server');

// Returns an Express server
// var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
//server.use(jsonServer.defaults());

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

// Returns an Express router
//var router = jsonServer.router('db.json');

//server.use(router);

//server.listen(3005);