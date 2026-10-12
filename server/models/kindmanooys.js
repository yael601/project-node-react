const mongoose = require('mongoose')
const kindmanooySchema = new mongoose.Schema({
    time: {
        type:mongoose.Schema.Types.String,
        required: true,
    },
    mannoyCost: {
        type: mongoose.Schema.Types.Int32,
        required: true,
    }
    //     title: {
    //     type: mongoose.Schema.Types.String,
    //     required: true,
    // },
    // body: {
    //     type: String,
    //     required: true,
    // }
    //     title: {
    //     type: mongoose.Schema.Types.String,
    //     required: true,
    // },
    // body: {
    //     type: String,
    //     required: true,
    // }
    //     title: {
    //     type: mongoose.Schema.Types.String,
    //     required: true,
    // },
    // body: {
    //     type: String,
    //     required: true,
    // }
    //     title: {
    //     type: mongoose.Schema.Types.String,
    //     required: true,
    // },
    // body: {
    //     type: String,
    //     required: true,
    // }
    //     title: {
    //     type: mongoose.Schema.Types.String,
    //     required: true,
    // },
    // body: {
    //     type: String,
    //     required: true,
    // }
}, {
    timestamps: true
})
module.exports = mongoose.model('KindManooy', kindmanooySchema)