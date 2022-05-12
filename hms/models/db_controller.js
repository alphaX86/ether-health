var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hmsystem",
});

con.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("you are connected to database");
  }
});

module.exports.signup = function (username, email, password, callback) {
  var query =
    "INSERT INTO `users`(`username`,`email`,`password`) VALUES ('" +
    username +
    "','" +
    email +
    "','" +
    password + "')";
  con.query(query, callback);
};

module.exports.getuserid = function (email, callback) {
  var query = "select *from verify where email = '" + email + "' ";
  con.query(query, callback);
};

module.exports.verify = function (username, email, callback) {
  var query =
    "insert into `verify` (`username`,`email`) values ('" +
    username +
    "','" +
    email +
    "')";
  con.query(query, callback);
};

module.exports.add_doctor = function (
  first_name,
  last_name,
  email,
  dob,
  gender,
  address,
  phone,
  image,
  department,
  biography,
  callback
) {
  var query =
    "INSERT INTO `doctor`(`first_name`,`last_name`,`email`,`dob`,`gender`,`address`,`phone`,`image`,`department`,`biography`) values ('" +
    first_name +
    "','" +
    last_name +
    "','" +
    email +
    "','" +
    dob +
    "','" +
    gender +
    "','" +
    address +
    "','" +
    phone +
    "','" +
    image +
    "','" +
    department +
    "','" +
    biography +
    "')";
  con.query(query, callback);
  console.log(query);
};

module.exports.getAllDoc = function (callback) {
  var query = "select * from doctor";
  con.query(query, callback);
};

module.exports.getDocbyId = function (id, callback) {
  var query = "select * from doctor where id =" + id;
  con.query(query, callback);
};

module.exports.getEmpbyId = function (id, callback) {
  var query = "select * from employee where id =" + id;
  con.query(query, callback);
};

module.exports.editDoc = function (
  id,
  first_name,
  last_name,
  email,
  dob,
  gender,
  address,
  phone,
  image,
  department,
  biography,
  callback
) {
  var query =
    "update `doctor` set `first_name`='" +
    first_name +
    "', `last_name`='" +
    last_name +
    "', `email`='" +
    email +
    "', `dob`='" +
    dob +
    "',`gender`='" +
    gender +
    "',`address`='" +
    address +
    "',`phone`='" +
    phone +
    "',`image`='" +
    image +
    "',`department`='" +
    department +
    "',`biography`='" +
    biography +
    "' where id=" +
    id;
  con.query(query, callback);
  // console.log(query);
};



module.exports.deleteDoc = function (id, callback) {
  //console.log("i m here");
  var query = "delete from doctor where id=" + id;
  con.query(query, callback);
};



module.exports.deletemed = function (id, callback) {
  //console.log("i m here");
  var query = "delete from store where id=" + id;
  con.query(query, callback);
};


module.exports.add_appointment = function (
  p_name,
  department,
  d_name,
  date,
  time,
  email,
  phone,
  callback
) {
  var query =
    "insert into appointment (patient_name,department,doctor_name,date,time,email,phone) values ('" +
    p_name +
    "','" +
    department +
    "','" +
    d_name +
    "','" +
    date +
    "','" +
    time +
    "','" +
    email +
    "','" +
    phone +
    "')";
  con.query(query, callback);
};

module.exports.getallappointment = function (callback) {
  var query = "select * from appointment";
  con.query(query, callback);
};

module.exports.searchDoc = function (key, callback) {
  var query = 'SELECT  *from doctor where first_name like "%' + key + '%"';
  con.query(query, callback);
  console.log(query);
};

module.exports.searchmed = function (key, callback) {
  var query = 'SELECT  *from store where name like "%' + key + '%"';
  con.query(query, callback);
};

module.exports.getappointmentbyid = function (id, callback) {
  var query = "select * from appointment where id=" + id;
  console.log(query);
  con.query(query, callback);
};

module.exports.editappointment = function (
  id,
  p_name,
  department,
  d_name,
  date,
  time,
  email,
  phone,
  callback
) {
  var query =
    "update appointment set patient_name='" +
    p_name +
    "',department='" +
    department +
    "',doctor_name='" +
    d_name +
    "',date='" +
    date +
    "',time='" +
    time +
    "',email='" +
    email +
    "',phone='" +
    phone +
    "' where id=" +
    id;
  con.query(query, callback);
};

module.exports.deleteappointment = function (id, callback) {
  var query = "delete from appointment where id=" + id;
  con.query(query, callback);
};


module.exports.findOne = function (email, callback) {
  var query = "select *from users where email='" + email + "'";
  con.query(query, callback);
  console.log(query);
};


module.exports.setpassword = function (id, newpassword, callback) {
  var query =
    "update `users` set `password`='" + newpassword + "' where id=" + id;
  con.query(query, callback);
};


module.exports.addMed = function (
  name,
  p_date,
  expire,
  e_date,
  price,
  quantity,
  callback
) {
  var query =
    "Insert into `store` (name,p_date,expire,expire_end,price,quantity) values('" +
    name +
    "','" +
    p_date +
    "','" +
    expire +
    "','" +
    e_date +
    "','" +
    price +
    "','" +
    quantity +
    "')";
  console.log(query);
  con.query(query, callback);
};

module.exports.getMedbyId = function (id, callback) {
  var query = "select * from store where id=" + id;
  con.query(query, callback);
};

module.exports.editmed = function (
  id,
  name,
  p_date,
  expire,
  e_date,
  price,
  quantity,
  callback
) {
  var query =
    "update store set name='" +
    name +
    "', p_date='" +
    p_date +
    "',expire='" +
    expire +
    "' ,expire_end='" +
    e_date +
    "',price='" +
    price +
    "',quantity='" +
    quantity +
    "' where id=" +
    id;
  console.log(query);
  con.query(query, callback);
};

module.exports.getallmed = function (callback) {
  var query = "select *from store order by id desc";
  console.log(query);
  con.query(query, callback);
};


module.exports.getuserdetails = function (username, callback) {
  var query = "select * from users where username='" + username + "'";
  con.query(query, callback);
  console.log(query);
};

module.exports.edit_profile = function (
  id,
  username,
  email,
  password,
  callback
) {
  var query =
    "update users set username ='" +
    username +
    "', email = '" +
    email +
    "',password='" +
    password +
    "' where id=" +
    id;
  con.query(query, callback);
  console.log(query);
};

