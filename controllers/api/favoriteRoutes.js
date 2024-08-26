const router = require('express').Router();
const { Favorite } = require('../../models');

// Add Favorite 
// router.post('/', async (req, res) => {
//     Favorite.create({
//         title: req.body.title,
//         director: req.body.director,
//         year: req.body.year,
//         length: req.body.length,
//         mpaa_rating: req.body.mpaa_rating,
//         genre_id: req.body.genre_id,
//         plot: req.body.plot,
//         filename: req.body.filename
//     }) 
//     .then ((newMovie) => {
//         res.json(newMovie);
//     }) 
//     .catch((err) => {
//         res.status(400).json(err);
//     });
// });

// GET all favorites for a user
// router.get('/', async (req, res) => {
//     if (req.session.logged_in) {
//       try {
//         const favorites = await Favorite.findAll({ where: { id: req.session.user_id } });
//         res.status(200).render("favorites",{favorites,logged_in: req.session.logged_in});
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json({ message: 'Not logged in' });
//     }
//   });
  
  // POST a new favorite
  router.post('/', async (req, res) => {
    if (req.session.logged_in) {
      try {
        const newFavorite = await Favorite.create({
          ...req.body,
          user_id: req.session.user_id
        });
        res.status(200).json(newFavorite);
      } catch (err) {
        res.status(400).json(err);
      }
    } else {
      res.status(401).json({ message: 'Not logged in' });
    }
  });
  
  // DELETE a favorite
  router.delete('/:id', async (req, res) => {
    if (req.session.logged_in) {
      try {
        const result = await Favorite.destroy({
          where: { id: req.params.id, user_id: req.session.user_id }
        });
        if (result) {
          res.status(200).json({ message: 'Favorite removed' });
        } else {
          res.status(404).json({ message: 'Favorite not found' });
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json({ message: 'Not logged in' });
    }
  });
  
  module.exports = router;

module.exports = router;
