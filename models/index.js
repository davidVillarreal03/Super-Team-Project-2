const User = require('./User');
const Movie = require('./Movie');
const Favorite = require('./Favorite');

// A User has many Movies
User.belongsToMany(Movie, { 
  through: {
    model: Favorite,
    unique: false 
  },
  foreignKey: "user_id"
});

// A Movie belongs to many Users
Movie.belongsToMany(User, { 
  through: {
    model: Favorite,
    unique: false 
  },
  foreignKey: "movie_id" 
});

module.exports = {
  User,
  Movie,
  Favorite
};