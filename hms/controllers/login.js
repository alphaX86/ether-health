var express = require ('express');
var home = require('./home');
var mysql =require('mysql');
var session = require ('express-session');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require.main.require ('./models/db_controller');
var contr = require.main.require ('./models/eth-handle');
var  sweetalert = require('sweetalert2');
var shortud = require("short-uuid");
const { check, validationResult } = require('express-validator');




router.get('/', function(req ,res){

    res.render('login.ejs');
});

var con = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'etx-hms'
});

router.use(session({

    secret: 'secret',
    resave : true ,
    saveUninitialized : true 

}));


router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());


router.post('/',[
    check('uuid').notEmpty().withMessage("UUID is required"),
    check('password').notEmpty().withMessage("Password is required")
    
], function(request , response){
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ errors: errors.array() });
      }

    var uuid = request.body.uuid;
    var t = contr.getContract(uuid);
    var username = t;
    var password = request.body.password;
    console.log(username);

    if (username && password){
        con.query('select * from users where username = ? and password = ?' , [username, password], function(error , results , fields){
            if (results.length > 0){
                
                request.session.loggedin = true ; 
                request.session.username = username;
                response.cookie('username' , username);
                if (results[0].username==username ){
                    sweetalert.fire('logged In!');
                    response.redirect('/home');
                }
               
            }else{
                response.send('Incorrect username / password');
            }
            response.end();
        });

    }else{
        response.send('please enter user name and password');
        response.end();
    }

});

module.exports = router;