const inquirer = require('inquirer');
const mysql = require('mysql');
const colors = require('colors');

const connection = mysql.createConnection({
	host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "sql_amazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connect as id " + connection.threadId);
    connection.end();
});