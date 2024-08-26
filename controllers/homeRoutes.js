const router = require('express').Router();
const { Movie, User, Genre } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const movieData = await Movie.findAll();
    const genreData = await Genre.findAll();

    // Serialize data so the template can read it
    const movies = movieData.map((movie) => movie.get({ plain: true }));
    const genres = genreData.map((genre) => genre.get({ plain: true }));
    console.log(movies);
    // Pass serialized data and session flag into template
    res.render('homepage', {
      movies,
      genres,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/movie/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {});

    const movie = movieData.get({ plain: true });

    res.render('movie', {
      ...movie,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/favorite', async (req, res) => {
  res.render('favorites');
});

router.get('/genres/:id', async (req, res) => {
  // try {
  const movieData = Movie.findAll({
    where: {
      genre_id: req.params.id,
    },
  });
  const movies = movieData.map((movie) => movie.get({ plain: true }));
  res.render('genres', {
    movies,
  });
  // } catch(err){
  //   res.status(500).json(err)
  // }
});

module.exports = router;
