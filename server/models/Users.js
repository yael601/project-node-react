const mongoose = require('mongoose')
const productSchema = require('./productSchema')
const lastSerchSchema = require('./lastSerchSchema')

const userSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    passowrd:{
        type: mongoose.Schema.Types.Int32,
        required:true
    },
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        required:true
    },
    address: {
        type: String
    },
    manooy: {
        type: mongoose.Schema.Types.Boolean,
        default:false
    },
    numAshrai:{
        type: mongoose.Schema.Types.BigInt,
        required:true
    }, 
    idAshrai:{
        type: mongoose.Schema.Types.Int32,
        required:true
    },   
    dateAshrai:{
        type: mongoose.Schema.Types.Date,
        required:true
    },
    kodAshrai:{
        type: mongoose.Schema.Types.Int32,
        required:true
    },
    products:[productSchema]
    ,
    serchLast:[lastSerchSchema]
}, {
    timestamps: true
})
module.exports = mongoose.model('Users', userSchema)