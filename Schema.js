const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String },
    Dept: {
        type: String,
    },
    lat: { type: Number, },
    long: { type: Number, },
    city: { type: String, },
    id: { type: String }
},

    {
        collection: 'employees',
        versionKey: false
    })

const Model = mongoose.model('employees', Schema)
module.exports = { Model }