const { Sequelize, DataTypes } = require("sequelize");

//defining product schema for Product.js
module.exports = (dataSchema, DataTypes) => {
  const Product = dataSchema.define("product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    published: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Product;
};
