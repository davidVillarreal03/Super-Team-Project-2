const router = require('express').Router();
const { Movie } = require('../models');

router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll();
    const movies = movieData.map((movie) => movie.get({ plain: true }));
    res.render('homepage', { movies });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
