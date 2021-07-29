const express = require('express');

const MovieRatingCtrl = require('../controllers/movieRating-ctrl');

const router = express.Router();

router.post('/movieRating',MovieRatingCtrl.createMovieRating);
router.put('/movieRating/:id', MovieRatingCtrl.updateMovieRating);
router.delete('/movieRating/:id',MovieRatingCtrl.deleteMovieRating);
router.get('/movieRating/:id', MovieRatingCtrl.getMovieRatingById);
router.get('/movieRatings', MovieRatingCtrl.getMovieRatings);

module.exports = router;