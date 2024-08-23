const sequelize = require('../config/connection');
const Genre = require('./Genre');
const Movie = require('./Movie');
const User = require('./User');
const Favorite = require('./Favorite');

// Define associations
// A Movie belongs to one Genre
Movie.belongsTo(Genre, {
  foreignKey: 'genre_id',
  onDelete: 'CASCADE', // Optional: add cascade delete if needed
});

// A Genre has many Movies
Genre.hasMany(Movie, {
  foreignKey: 'genre_id',
});

// A User has many Favorites
User.hasMany(Favorite, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE', // Optional: add cascade delete if needed
});

// A Favorite belongs to one User and one Movie
Favorite.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE', // Optional: add cascade delete if needed
});
Favorite.belongsTo(Movie, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE', // Optional: add cascade delete if needed
});

// Sync all models
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

module.exports = { User, Movie, Genre, Favorite };
