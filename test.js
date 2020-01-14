var express = require("express");
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Moogie187@$^",
    database: "employee_tracker_db"
  });
  
  connection.connect(function(err) {
    if (err) {
    //   console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });
    test();
  function test(){
    connection.query("SELECT * FROM employee;", function(err, data){
        var employees = [];
        for(i = 0; i < data.length; i++){
            var name = data[i].first_name + " " + data[i].last_name
            console.log(name)
            employees.push(name);
            return;
        }
        console.log(employees)
    });
  }