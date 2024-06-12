const express = require('express');
require('dotenv').config();
const inquirer = require('inquirer');
const { Pool } = require('pg');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  