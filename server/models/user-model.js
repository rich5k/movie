const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name : {type: String},
        email: {type: String},
        password: {type: String},
        picture: {data: Buffer, contentType: String}
    },
    {timestamps: true},
)

module.exports = mongoose.model('users',User)