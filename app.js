const express = require("express");
const app = express();
const connection = require("./config/connection.js");
const inquirer = require("inquirer");
const cTable = require('console.table');

const UpdateDB = require("./updateDB/updateDB")

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


function start(){
    inquirer
    .prompt({
     type: "list",
     message: "What would you like to do?",
     name: "begin",
     choices: [
         "View ALL Employees",
         "View ALL Employees by Department",
         "View ALL Employees by Manager",
         "Add Employee",
         "Remove Employee",
         "Update Employee Role",
         "Update Employee Manager"
     ]   
    }).then(answer => {
    switch(answer.begin) {
        case "View ALL Employees":
            allEmployees();
            break;
        case "View ALL Employees by Department":
            department();
            break;
        case "View ALL Employees by Manager":
            manager();
            break;
        case "Add Employee":
            UpdateDB.addEmployee();
            break;
        case "Remove Employee":
            //deleteEmployee();
            break;
        case "Update Employee Role":
            //updateRole();
            break;
        case "Update Employee Manager":
            //updateManager();
            break;
    }
    })
}

function allEmployees(){
    connection.query("SELECT * FROM employee", (err, results) => {
        if (err) throw err;
        console.log(results);
    })
    
}

start();

// app.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
// });