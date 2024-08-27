const router = require('express').Router();
const { Genre } = require('../../models');

// Example route to get all genres
router.get('/', async (req, res) => {
  try {
    const genreData = await Genre.findAll();
    res.status(200).json(genreData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
