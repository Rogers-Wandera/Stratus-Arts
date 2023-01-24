const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "First name must be provided"],
        min: [3, "Name must contain atleast 3 characters"],
        max: [30, "Name can't exceed 30 characters"]
    },
    lastname: {
        type: String,
        required: [true, "Last name must be provided"],
        min: [3, "Name must contain atleast 3 characters"],
        max: [30, "Name can't exceed 30 characters"]
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Admin: Number,
        Editor: Number
    },
    email: {
        type: String,
        required: [true, "Email must be provided"],
        match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide valid email"
        ],
        unique: true
    },
    password: {
        type: String,
        min: [8, "Password must be atleast 8 characters long"],
        required: [true, "Password cannot be empty"],
    },
    gender: {
        type: String,
        required: [true, "Please provide gender"]
    },
    profile: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
    }
})

module.exports = mongoose.model("user", userSchema)