const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    length: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mpaa_rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'genre',
        key: 'id',
      },
    },
    plot: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie',
  }
);

module.exports = Movie;