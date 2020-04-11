const connection = require("../config/connection");
const inquirer = require("inquirer")

const express = require("express");
const app = express();

const employeesArr = [];

function roleQuestion(){
    connection.query("SELECT * FROM role", (err, res) => {
        if(err) throw err;
        inquirer.prompt({
            type: "list",
            message: "What is their role?",
            name: "role",
            choices: res.map(rol => rol)
        })
        .then(answers => {
        employeesArr.push(answers.role.id)
            managerQuestion();
        })
    })
}

function managerQuestion(){
    connection.query("SELECT * FROM managers", (err, res) => {
        if (err) throw err;
        inquirer.prompt({
            type: "list",
            message: "Who is there manager?",
            name: "managers",
            choices: res.map(mgr => mgr)
        })
        .then(answers => {
            connection.query("SELECT * FROM managers",  (err, res) => {
                if (err) throw err;
                res.forEach(mgr => {if(mgr.id === answers.id){
                    employeesArr.push(mgr.id);
                }})
                console.log(employeesArr);
            })
        } )
    })
}

class UpdateDB {
   addEmployee(){
    
    
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
        }
    ])
    .then(answers => {
        employeesArr.push(answers);
        roleQuestion();
    })
    

    }

    deleteEmployee(){

    }
    
    updateRole(){

    }

    updateManager(){

    }
}

module.exports = new UpdateDB();