const mongoose = require("mongoose");

const VerifyEmailSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    emailToken: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("token", VerifyEmailSchema);