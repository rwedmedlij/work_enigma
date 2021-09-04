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
});

exports.get_Users =  (req, res) => {
  connecty.query("SELECT * FROM USERS", function (err, result, fields) {
    if (err) throw err;
    if(result.length > 0) 
      res.send({ users:result , message : "got find the users" })
  });
};

exports.edit_User = async (req, res) => {
  const {idtoEdit ,name , email } = req.body;
  var sql = "UPDATE USERS SET name = '"+name+"' ,  email ='"+email+"'  WHERE id = '"+idtoEdit+"'";
  connecty.query(sql, function (err, result, fields) {
    if (err) throw err;
      res.send({ message : "we goot update" })
  });
};

exports.add_User = async (req, res) => {
  const {id,name,email} = req.body;
    var sql = "INSERT INTO USERS (id,name,email) VALUES ('"+id+"' , '"+name+"' , '"+email+"' )";
  connecty.query(sql, function (err, result, fields) {
    if (err) throw err;
      res.send( {message : "insert good" })
  });
};

exports.delete_User = async (req, res) => {
  const {id} = req.body;
  connecty.query("DELETE FROM USERS WHERE id = '"+id+"'", function (err, result, fields) {
    if (err) throw err;
         res.send( {message : "insert good" })
  });
};

