
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
            choices: ["View All Departments","Add Department", "View All Roles", "Add Role", "View All Employees", "Add Employee"]

        },
    ]).then(data => {
        switch (data.database) {
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
            case "Add Role":
                addRole()
                break    
            case "Add Employee":
                addEmployee()
                break    
        }

    })
}

const getAllEmployees = () => {
    pool.query('SELECT first_name, last_name, role.title FROM employee JOIN role ON employee.role_id=role.id', function (err, { rows }) {
        console.table(rows);
        menu();
    });
}


const getAllDepartments = () => {
    pool.query('SELECT * FROM department', function (err, { rows }) {
        console.table(rows);
        menu();
    })
}

const getAllRoles = () => {
    pool.query('SELECT title, salary, department.name FROM role JOIN department ON role.department_id=department.id', function (err, { rows }) {
        console.table(rows);
        menu();
    })
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter department name'
        }
    ]).then(data => {
        pool.query('INSERT INTO department (name) VALUES ($1)', [data.name], function (err, data) {
            console.log('New department added to the database');
            menu();
        })
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'Which department does the role belong to',
            choices: ['Sales', 'Legal', 'Engineering', 'Finance']
        }
    ]) .then(data => {
        pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [data.title, data.salary, data.department_id], function (err, data) {
            console.log(`Added role to the database.`);
            menu();
        })
    })
} 

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the employees first name?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the employees last name?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the employees role?',
            choices: ['Sales Lead', 'Sales Person', 'Legal Team Lead', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant']
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Who is the employees manager?',
            choices: ['Henry Chinaski', 'Kilgore Trout', 'Billy Pilgrim', 'Stuart Little', 'Holden Caulfield', 'Louie Szekely', 'Charles Bukowski', 'Tyler Durden']
        },
        
    ]).then(data => {
        pool.query('INSERT INTO employee (first_name, last_name, role, manager_id VALUES ($1, $2, $3, $4)', [data.first_name, data.last_name, data.role, data.manager_id], function (err, data){
            console.log('Added new employee to database.')
            menu();
        })
    })

}

menu();

