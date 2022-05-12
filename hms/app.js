var express = require('express');
var session = require('express-session');
var cookie = require('cookie-parser');
var path = require('path');
var ejs = require('ejs');
var multer = require('multer');
var async = require('async');
var nodemailer = require('nodemailer');
var crypto = require('crypto');
var expressValidator = require('express-validator');
var sweetalert = require('sweetalert2');
var bodyParser = require('body-parser');
const http = require('http');
var db = require('./models/db_controller');
var signup = require('./controllers/signup');
var login = require('./controllers/login');
var home = require('./controllers/home');
var store = require('./controllers/store');
var doctors = require ('./controllers/doctors');
var landing = require ('./controllers/landing');
var logout = require ('./controllers/logout');
var doc_controller = require ('./controllers/doc_controller');
var appointment = require ('./controllers/appointment');

var app = express();


app.set('view engine', 'ejs');
const server = http.createServer(app);

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookie());
const PORT = process.env.PORT||3000
server.listen(PORT,()=>console.log(`server running on port ${PORT}`))

app.use('/signup', signup);
app.use('/login',login);
app.use('/home', home);
app.use('/store', store);
app.use('/landing',landing);
app.use('/logout',logout);
app.use('/doc_controller',doc_controller)
app.use('/doctors',doctors);
app.use('/appointment',appointment);
//app.use('/patients',patients);
