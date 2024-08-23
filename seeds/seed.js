const fs = require('fs');
const path = require('path');
const sequelize = require('../config/connection');
const { Genre, Movie, User, Favorite } = require('../models');

const seedGenres = require('./genreData.json');
const seedMovies = require('./movieData.json');
const seedUsers = require('./userData.json');
const seedFavorites = require('./favoriteData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGenres();
  await seedMovies();
  await seedUsers();
  await seedFavorites();

  process.exit(0);
};

seedAll();
