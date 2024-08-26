const router = require('express').Router();
const { Movie, User, Genre } = require('../models');
const withAuth = require('../utils/auth');

// Route to render the homepage with all movies and genres
router.get('/', async (req, res) => {
  try {
    // Fetch all genres
    const genreData = await Genre.findAll();
    // Fetch all movies
    const movieData = await Movie.findAll();

    // Serialize data for use in the template
    const movies = movieData.map((movie) => movie.get({ plain: true }));
    const genres = genreData.map((genre) => genre.get({ plain: true }));

    // Render the homepage with movies, genres, and session flag
    res.render('homepage', {
      movies,
      genres,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    // Handle any errors that occur during the fetch
    res.status(500).json(err);
  }
});

// Route to render a single movie's details
router.get('/movie/:id', async (req, res) => {
  try {
    // Fetch movie by primary key
    const movieData = await Movie.findByPk(req.params.id);

    // Check if movie exists
    if (!movieData) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Serialize movie data for use in the template
    const movie = movieData.get({ plain: true });

    // Render the movie detail page
    res.render('movie', {
      ...movie,
    });
  } catch (err) {
    // Handle any errors that occur during the fetch
    res.status(500).json(err);
  }
});

// Route to render the login page
router.get('/login', (req, res) => {
  res.render('login');
});

// Route to render the favorites page
router.get('/favorite', (req, res) => {
  res.render('favorites');
});

// Route to render movies by genre
router.get('/genres/:id', async (req, res) => {
  try {
    // Fetch movies by genre ID
    const movieData = await Movie.findAll({
      where: {
        genre_id: req.params.id,
      },
    });

    // Serialize data for use in the template
    const movies = movieData.map((movie) => movie.get({ plain: true }));

    // Render the genres page with movies
    res.render('genres', {
      movies,
    });
  } catch (err) {
    // Handle any errors that occur during the fetch
    res.status(500).json(err);
  }
});

module.exports = router;
