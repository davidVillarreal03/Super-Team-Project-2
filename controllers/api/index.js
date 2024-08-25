const router = require('express').Router();

const favoriteRoutes = require('./favoriteRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;
