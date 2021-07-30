const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieRating = new Schema(
    {
        movieId : {type: mongoose.ObjectId},
        rating: {type: Number},
        review: {type: String},
    },
    {timestamps: true},
)

module.exports = mongoose.model('movieratings',MovieRating)