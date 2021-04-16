const mongoose = require('mongoose')

const {Schema} = mongoose

const schema = new Schema({
    "titre": String,
    "description": String,
    "adresse": String,
    "code_postal": Number,
    "ville": String,
    "prix": Number
})

module.exports = mongoose.model("Annonce", schema)
