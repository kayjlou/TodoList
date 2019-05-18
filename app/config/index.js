const Sequelize = require("sequelize");

module.exports = new Sequelize("mysql://root:Navigator13@localhost:3306/todo");

// var connection = mysql.createConnection({
//   port: 3306,
//   host: 'localhost',
//   user: 'root',
//   password: 'Navigator13',
//   database: 'todo_list'
// })
