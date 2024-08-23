const router = require('express').Router();

const movieRoutes = require('./movieRoutes');
const genreRoutes = require('./genreRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
//router.use('/movies', movieRoutes);
router.use('/genre', genreRoutes);

module.exports = router;
