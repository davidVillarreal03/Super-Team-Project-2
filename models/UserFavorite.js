const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserFavorite extends Model {}

UserFavorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
      onDelete: 'CASCADE', // If a user is deleted, their favorites should be too
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movie',
        key: 'id',
      },
      onDelete: 'CASCADE', // If a movie is deleted, it should be removed from favorites
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_favorite',
  },
);

module.exports = UserFavorite;
