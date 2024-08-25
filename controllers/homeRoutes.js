const router = require('express').Router();
const { Movie, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const movieData = await Movie.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });
     
    // Serialize data so the template can read it
     const movies = movieData.map((movie) => movie.get({ plain: true }));

     console.log(movies);
     // Pass serialized data and session flag into template
     res.render('homepage', { 
       movies, 
       logged_in: req.session.logged_in 
     });
   } catch (err) {
     res.status(500).json(err);
   }
 });

router.get('/movie/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
    });

    const movie = movieData.get({ plain: true });

    res.render('movie', {
      ...movie,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login'); // This will render login.handlebars
});

module.exports = router;
