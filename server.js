
require('dotenv').config();
const inquirer = require('inquirer');
const { Pool } = require('pg');



// Connect to database
const pool = new Pool(
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: 'localhost',
        database: process.env.DB_NAME
    },
    console.log('Connected to the employee_db database.')
)

pool.connect();

// Inquirer setup
const menu = () => {


inquirer.prompt([
    {
        type: "list",
        name: "database",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department"]

    },
]).then(data => {
    switch(data.database) {
        case "View All Employees":
            getAllEmployees()
            break
            
        case "View All Departments":
            getAllDepartments()
            break
          
        case "View All Roles":
            getAllRoles()
            break 
            
        case "Add Department":
            addDepartment()
            break    
    }
  
})  }
  
const getAllEmployees = () => {
    pool.query('SELECT first_name, last_name, role.title FROM employee JOIN role ON employee.role_id=role.id', function (err, {rows}) {
        console.table(rows);
        menu();
      });
}  


const getAllDepartments = () => {
    pool.query('SELECT * FROM department', function (err, {rows}){
        console.table(rows);
        menu();
    })
}

