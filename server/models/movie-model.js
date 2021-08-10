const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        name : String,
        desc: String,
        image: String
    }
);

module.exports = new mongoose.model('movies',Movie)