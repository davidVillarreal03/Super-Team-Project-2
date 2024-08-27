const router = require('express').Router();
const { Movie, User, Genre, Favorite } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const movieData = await Movie.findAll();
    const genreData = await Genre.findAll();

    // Serialize data so the template can read it
    const movies = movieData.map((movie) => movie.get({ plain: true }));
    const genres = genreData.map((genre) => genre.get({ plain: true }));
    
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

router.get('/api/favorite', async (req, res) => {
  if (req.session.logged_in) {
    try {
      const favorites = await Favorite.findAll({
        where: { id: req.session.user_id },
      });

      res
        .status(200)
        .render('favorites', { favorites, logged_in: req.session.logged_in });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(401).redirect('/login');
  }
});

router.get('/genres/:id', async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      where: {
        genre_id: req.params.id, // Use 'genre_id' to match movies with the specified genre
      },
    });

    // Serialize the movie data
    const movies = movieData.map((movie) => movie.get({ plain: true }));

    // Render the genre page with the movies
    res.render('genres', {
      movies,
      logged_in: req.session.logged_in, // Pass session info for conditional rendering
    });
  } catch (err) {
    // Handle errors by sending a 500 status code
    res.status(500).json(err);
  }
});
// router.get('/genres/:id', async (req, res) => {
//   try {
//     const genreData = await Genre.findByPk(req.params.id, {
//       include: [
//         {
//           model: Movie,
//           attributes: ['id', 'title', 'plot', 'filename'],
//         },
//       ],
//     });

//     const genre = genreData.get({ plain: true });

//     res.render('genres', {
//       ...genre,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/genres/:id', async (req, res) => {
//   // try {
//   const movieData = Movie.findAll({
//     where: {
//       id: req.params.id,
//     },
//   });
//   const movies = movieData.map((movie) => movie.get({ plain: true }));
//   res.render('genres', {
//     movies,
//     genres,
//   });
//   // } catch(err){
//   //   res.status(500).json(err)
//   // }
// });

module.exports = router;
