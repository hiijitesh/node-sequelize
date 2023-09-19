const { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "node_sequelize",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000, //this is idle time for data base in miliseconds
  },
};
