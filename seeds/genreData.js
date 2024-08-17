const { Genre } = require('../models');

const genreData = [
  { id: 1, genre_name: 'Action / Adventure' },
  { id: 2, genre_name: 'Comedy' },
  { id: 3, genre_name: 'Drama' },
  { id: 4, genre_name: 'Horror' },
  { id: 5, genre_name: 'Romance' },
  { id: 6, genre_name: 'Sci-fi' },
  // Add more genres with specified IDs as needed
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;