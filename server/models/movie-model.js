const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        name : String,
        desc: String,
        image: {data: Buffer, contentType: String}
    }
);

module.exports = new mongoose.model('movies',Movie)