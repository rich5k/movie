const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        name : {type: String, required: true},
        description: {type: String, required: true},
        image: {data: Buffer, contentType: String, required: true}
    },
    {timestamps: true},
)

module.exports = mongoose.model('movies',Movie)