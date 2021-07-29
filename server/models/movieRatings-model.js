const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieRating = new Schema(
    {
        movieId : {type: Schema.ObjectId, required: true},
        rating: {type: Number, required: true},
        review: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('movieratings',MovieRating)