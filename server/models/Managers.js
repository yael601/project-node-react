const mongoose = require('mongoose')
const postSchema = require('./kindmanooys')
const Users = require('./Users')
const mamagerSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.String,
        required: true,
        ref:Users
    },
    phone: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('Mamager', mamagerSchema)