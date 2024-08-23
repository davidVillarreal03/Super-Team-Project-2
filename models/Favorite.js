const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Favorite extends Model {}

Favorite.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user', // Adjust the model name to match your user model
        key: 'id',
      },
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'movie', // Adjust the model name to match your movie model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'favorite',
    timestamps: false,
  }
);

module.exports = Favorite;