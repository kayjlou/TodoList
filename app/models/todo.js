const Sequelize = require("sequelize");
const connection = require("../config");

class Song extends Sequelize.Model {}
todo.init(
  {
    title: Sequelize.STRING,

    year: Sequelize.INTEGER
  },
  { sequelize: connection, modelName: "song" }
);

module.exports = todo;
