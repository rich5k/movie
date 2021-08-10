const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name : String,
        email: String,
        password: String,
        image: String
    }
)

module.exports = new mongoose.model('users',User)