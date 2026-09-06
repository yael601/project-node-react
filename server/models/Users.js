const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    userName: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
    },
    address: {
        type: String

    },
    phone: {
        type: String,

    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Users', userSchema)