const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
    },
    message: {
        type: String,
    },
    date: {
        type: Date, 
        default: Date.now(),
    }
})

const User = mongoose.model("User", userSchema);

module.exports  = User