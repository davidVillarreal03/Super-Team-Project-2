const sequelize = require('./config/connection');
const { User, Movie } = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Movie.bulkCreate(movieData, {
    individualHooks: true,
    returning: true,
  });

  // for (const movie of movieData) {
  //   await Movie.create({
  //     ...movie,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  //}

  process.exit(0);
};

seedDatabase();





// const seedGenres = require('./seeds/genreData');
// const seedMovies = require('./seeds/movieData');
// const seedUsers = require('./seeds/userData');
// const seedFavorites = require('./seeds/favoriteData');

// const seedAll = async () => {
//     // while in development set to "true" empties tables and repopulates with seed data each time
//   await sequelize.sync({ force: true });

//   await seedGenres();
//   await seedMovies();
//   await seedUsers();
//   await seedFavorites();

//   process.exit(0);
// };

// seedAll();
