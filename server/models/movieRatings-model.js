const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieRating = new Schema(
    {
        movieId : String,
        rating: Number,
        review: String,
    }
);

module.exports = new mongoose.model('movieratings',MovieRating)