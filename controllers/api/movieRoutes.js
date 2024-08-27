const router = require('express').Router();
const { Movie } = require('../../models/');
const withAuth = require('../utils/auth');

// Route to get details of a specific movie by ID
router.get('/movies/:id', async (req, res) => {
  try {
    // Fetch the movie by primary key
    const movieData = await Movie.findByPk(req.params.id);

    // Check if movie exists
    if (!movieData) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Serialize movie data for use in the template
    const movie = movieData.get({ plain: true });

    // Render the movie detail page
    res.render('movie', {
      movies,
    });
  } catch (err) {
    // Handle any errors that occur during the fetch
    res.status(500).json(err);
  }
});

// Route to add a movie to favorites
// This requires user authentication
router.post('/favorite/:id', withAuth, async (req, res) => {
  try {
    // Logic to add movie to the user's favorites
    UserFavorite.create({
      user_id: req.session.user_id,
      movie_id: req.params.id,
    });

    res.status(200).json({ message: 'Movie added to favorites' });
  } catch (err) {
    // Handle any errors
    res.status(500).json(err);
  }
});

module.exports = router;
