const express = require("express");
const app = express();
const fetch = require("node-fetch");
const bcrypt = require("bcrypt");
const jwt = require("jwt-simple");
const secret = "1234";
var mysql = require("mysql");
var connecty = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rwedkabha@123",
  database: "work_engima",
});
connecty.connect(function (err) {
  if (err) throw err;
  console.log(`\x1b[36mServer Connected to database  🔥`);
  
  var sqlCreateTable ="CREATE TABLE IF NOT EXISTS USERS (id VARCHAR(255) PRIMARY KEY, name VARCHAR(255) NOT NULL, email NVARCHAR(255) NOT NULL)";
  connecty.query(sqlCreateTable);
  console.log("created table")
});

exports.get_Users =  (req, res) => {

  connecty.query("SELECT * FROM USERS", function (err, result, fields) {
    if (err) throw err;
    if(result.length > 0) {
      console.log("Get User table");
      res.send({ users:result , message : "got find the users" })
    }
  });
};

exports.edit_User = async (req, res) => {
  const {oldid , update_id , update_name , update_email } = req.body;
  connecty.query("UPDATE USERS SET id = "+update_id+" name = "+update_name+" email ="+update_email+"  WHERE id = "+oldid+"", function (err, result, fields) {
    if (err) throw err;
      console.log("update User "+result);
      res.send({ users:result , message : "we goot update" })
  });
};

exports.add_User = async (req, res) => {
  console.log("now add Users");
};

exports.delete_User = async (req, res) => {
  console.log("now add Users");
};

