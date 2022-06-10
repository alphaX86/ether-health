var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var db = require.main.require("./models/db_controller");
var mysql = require("mysql");
var nodemailer = require("nodemailer");
var randomToken = require("random-token");
const { v4: uuidv4 } = require('uuid');
var contr = require.main.require("./models/eth-handle");
var sweetalert = require("sweetalert2");
const { check, validationResult } = require("express-validator");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", function (req, res) {
  res.render("signup.ejs");
});

router.post(
  "/",
  [
    check("username").notEmpty().withMessage("Username is required"),
    check("password").notEmpty().withMessage("Password is required"),
    check("email").notEmpty().isEmail().withMessage("Valid Email required"),
  ],
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    var email = req.body.email;
    var username = req.body.username;
    var uuid = uuidv4();

    db.signup(
      req.body.username,
      req.body.email,
      req.body.password,
      uuid,
    );

    contr.deployContract(uuid, req.body.username);

    db.verify(req.body.username, email);

     res.redirect('login');
  }
);
  
module.exports = router;
