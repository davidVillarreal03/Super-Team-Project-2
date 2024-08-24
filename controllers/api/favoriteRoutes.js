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

module.exports = router;
