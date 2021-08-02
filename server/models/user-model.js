const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name : String,
        email: String,
        password: String,
        picture: {data: Buffer, contentType: String}
    }
)

module.exports = new mongoose.model('users',User)