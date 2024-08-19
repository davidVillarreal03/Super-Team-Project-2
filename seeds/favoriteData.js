const { Favorite } = require('../models');

const favoriteData = [
  {
    user_id: 1, // Assuming user ID 1 exists
    movie_id: 1, // Assuming movie ID 1 exists
  },
  {
    user_id: 2,
    movie_id: 2,
  },
  // Add more favorites as needed
];

const seedFavorites = () => Favorite.bulkCreate(favoriteData);

module.exports = seedFavorites;
