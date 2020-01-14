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
var employees = [];
var roles = [];

function getEmployees(){
    connection.query("SELECT * FROM employee;", function(err, data){
        for(i = 0; i < data.length; i++){
            var name = data[i].first_name + " " + data[i].last_name
            // console.log(name)
            employees.push(name);
        }
        console.log(employees)
        return(employees)
    });
}
function addEmployee() {
    var employee = new Promise(function (resolve, reject) {
        getEmployees();
        // var emp = [ 'Jeremy Pellow', 'Mark Witt' ];
        console.log(employees)
        resolve(inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "Please enter the employee's first name"
            },
            {
                type: "input",
                name: "lastName",
                message: "Please enter the employees's last name"
            },
            {
                type: "list",
                name: "role",
                message: "Please select the employees's role",
                choices: employees
            },
            {
                type: "list",
                name: "manager",
                message: "Please select the employees's manager",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            }
        ]))
    });
    employee.then(function(){
        console.log("IT WORKED!")
    })

}
addEmployee();

    
//role_id int(30)
//FOREIGN KEY(mananger_id) REFERENCES employee(id);
//FOREIGN KEY(role_id) REFERENCES roles(id)

