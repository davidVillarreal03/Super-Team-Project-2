const router = require('express').Router();
const { Genre } = require('../../models');

// Get all genres
router.get('/', async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.status(200).json(genres);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single genre by ID
router.get('/:id', async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);

    if (!genre) {
      res.status(404).json({ message: 'No genre found with this id' });
      return;
    }

    res.status(200).json(genre);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a new genre (if applicable)
router.post('/', async (req, res) => {
  try {
    const newGenre = await Genre.create(req.body);
    res.status(200).json(newGenre);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
