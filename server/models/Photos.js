const mongoose = require('mongoose')
const photoSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})
module.exports = mongoose.model('Photo', photoSchema)