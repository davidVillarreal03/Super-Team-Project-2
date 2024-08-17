const User = require('./User');
const Movie = require('./Movie');
const Genre = require('./Genre');
const Favorite = require('./Favorite');

// A Movie belongs to one Genre
Movie.belongsTo(Genre, {
  foreignKey: 'genre_id',
});

// A Genre has many Movies
Genre.hasMany(Movie, {
  foreignKey: 'genre_id',
});

// A User has many Favorites
User.hasMany(Favorite, {
  foreignKey: 'user_id',
});

// A Favorite belongs to one User and one Movie
Favorite.belongsTo(User, {
  foreignKey: 'user_id',
});
Favorite.belongsTo(Movie, {
  foreignKey: 'movie_id',
});

module.exports = {
  User,
  Movie,
  Genre,
  Favorite,
};