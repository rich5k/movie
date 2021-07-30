const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        name : {type: String},
        description: {type: String},
        image: {data: Buffer, contentType: String}
    },
    {timestamps: true},
)

module.exports = mongoose.model('movies',Movie)