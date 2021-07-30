const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        name : String,
        description: String,
        image: {data: Buffer, contentType: String}
    },
    {timestamps: true},
)

module.exports = mongoose.model('movies',Movie)