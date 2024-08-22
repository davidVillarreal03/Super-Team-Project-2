const router = require('express').Router();
const { Movie, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/movie/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
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

module.exports = router;
