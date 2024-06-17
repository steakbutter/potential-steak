const express = require('express');
require('dotenv').config();
const inquirer = require('inquirer');
const { Pool } = require('pg');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

inquirer.prompt([
    {
        type: "list",
        name: "database",
        message: "What would you like to do?",
        choices: ["View All employees", "View All Roles", "View All Departments"]

    },
]).then((data) => {
    const employeeDataBase = data.database;
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  