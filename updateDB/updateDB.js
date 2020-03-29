const connection = require("../config/connection");
const inquirer = require("inquirer")

const express = require("express");
const app = express();

class UpdateDB {
    addEmployee(){
    connection.query("SELECT * FROM ")
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employees first name?",
            name: "first_name",
        },
        {
            type: "input",
            message: "What is the employees last name?",
            name: "last_name",
        },
        {
          type: "list",
          message: "What is their role?",
          name: "role",
          choices: [
             "Sales Lead",
             "Sales Person",
             "Lead Engineer",
             "Software Engineer",
             "Account Manager",
             "Accountant",
             "Legal Team Lead",
             "Lawyer" 
          ]  
        },
        {
            type: "list",
            message: "Who is there manager?",
            name: "managers",
            choices: function(){
                connection.query("SELECT FROM")
            }
        }
    ])
    }

    deleteEmployee(){

    }
    
    updateRole(){

    }

    updateManager(){

    }
}

module.exports = UpdateDB;