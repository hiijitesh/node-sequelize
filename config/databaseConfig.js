const { Sequelize, DataTypes } = require("sequelize")

module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'node_sequelize',
    dilect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000 //this is idle time for data base in miliseconds
    }
}

