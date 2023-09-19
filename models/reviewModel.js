//defining review schema for review.js
module.exports = (dataSchema, DataTypes) => {
  const Review = dataSchema.define("review", {
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

  return Review;
};
