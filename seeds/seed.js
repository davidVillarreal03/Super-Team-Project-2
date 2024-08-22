// seed.js
const sequelize = require('./config/connection');
const seedGenres = require('./seeds/genreData');
const seedMovies = require('./seeds/movieData');
const seedUsers = require('./seeds/userData');
const seedFavorites = require('./seeds/favoriteData');

const seedAll = async () => {
    // while in development set to "true" empties tables and repopulates with seed data each time
  await sequelize.sync({ force: true });

  await seedGenres();
  await seedMovies();
  await seedUsers();
  await seedFavorites();

  process.exit(0);
};

seedAll();
