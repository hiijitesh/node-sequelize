const dbConfig = require("../config/databaseConfig");
const { Sequelize, DataTypes } = require("sequelize");

//create the instance Sequelize
const dataSchema = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

//Authenticate the databaseSchema in database
dataSchema
  .authenticate()
  .then(() => {
    console.log("Connected to the Database successfully");
  })
  .catch((err) => {
    console.log("Not connected" + err);
  });

//create the replica of db to post to the mysql
const db = {};

db.Sequelize = Sequelize;
db.dataSchema = dataSchema;

db.products = require("./productModel")(dataSchema, DataTypes);
db.reviews = require("./reviewModel")(dataSchema, DataTypes);

//sync the dataSchema to the our database
db.dataSchema
  .sync({ force: false })
  //force is false because it will not create database again n again
  //if database does not exist then it will create one
  .then(() => {
    console.log("Yes re-sync is done");
  });

module.exports = db;
