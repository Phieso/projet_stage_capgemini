'use strict';

let express = require('express');

require('dotenv').config({ path: './server/config/' + process.env.NODE_ENV.trim() + '/.env' })
console.log('Server environment : ' + process.env.NODE_ENV.trim());

let app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    jsonwebtoken = require("jsonwebtoken");

//Load models
let Test = require('./server/api/models/testModel'),
    User = require('./server/api/models/userModel'),
    bodyParser = require('body-parser');

// interceptor : verify the authorization   
app.use(function(req, res, next) {
     // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
 
     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true);

    //to fix the CORS OPTIONS
    if(req && req.method=="OPTIONS"){
        req.method=req.headers["access-control-request-method"];
    }
 

    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === process.env.AUTHORIZATION_VALUE.trim()) {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY.trim(), function(err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
console.log('try the connection');
if (process.env.NODE_ENV.trim() == 'local') {
    console.log('local connection');
    mongoose.connect('mongodb://' + process.env.DB_HOST.trim() + '/' + process.env.DB_DATABASE.trim());
} else {
    console.log('remote connection');
    mongoose.connect('mongodb://' + process.env.DB_USER.trim() + ':' + process.env.DB_PASSWORD.trim() + '@' + process.env.DB_HOST.trim() + '/' + process.env.DB_DATABASE.trim())
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing routes
let testRoutes = require('./server/api/routes/testRoutes');
testRoutes(app);
let userRoutes = require('./server/api/routes/userRoutes');
userRoutes(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' is not implemented' })
});

app.listen(port);
console.log('AFJ : RESTful API server started on: ' + port);