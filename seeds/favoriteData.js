const { Favorite } = require('../models'); // Adjust the path if necessary

// Example data for favorites
const favoriteData = [
  { user_id: 1, movie_id: 1 },
  { user_id: 1, movie_id: 2 },
  { user_id: 2, movie_id: 3 },
  // Add more favorites as needed
];

const seedFavorites = async () => {
  try {
    await Favorite.bulkCreate(favoriteData);
    console.log('Favorites seeded successfully.');
  } catch (err) {
    console.error('Error seeding favorites:', err);
  }
};

module.exports = seedFavorites;
