const mongoose = require('mongoose')

const crudSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum : ["active", "inactive"],
        default: "inactive",
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
},{versionKey: false, timestamps: true})

const Crud = mongoose.model('Crud', crudSchema)

module.exports = Crud;
