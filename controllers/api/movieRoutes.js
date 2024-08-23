// const router = require('express').Router();
// const { Movie } = require('../../models');

// // Get all movies
// router.get('/', async (req, res) => {
//   try {
//     const movies = await Movie.findAll();
//     res.status(200).json(movies);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get movies by genre_id
// router.get('/genre/:genre_id', async (req, res) => {
//   try {
//     const { genre_id } = req.params;
//     const movies = await Movie.findAll({
//       where: { genre_id },
//     });

//     if (movies.length === 0) {
//       return res
//         .status(404)
//         .json({ message: 'No movies found for this genre' });
//     }

//     res.status(200).json(movies);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Add a new movie
// router.post('/', async (req, res) => {
//   try {
//     const newMovie = await Movie.create(req.body);
//     res.status(200).json(newMovie);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// module.exports = router;
