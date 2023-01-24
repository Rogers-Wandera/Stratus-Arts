const mongoose = require("mongoose");

const magazineSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must be provided"]
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"]
    },
    category: {
        type: String,
        required: [true, "Category must be provided"]
    },
    description: {
        type: String
    },
    pdfFile: {
        type: Array,
        required: [true, "Magazine pdf is required"]
    },
    artProducts: {
        type: Array
    },
    featured: {
        type: Boolean,
        default: false
    },
    reviews: {
        type: Array
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User cannot be empty"]
    },
    rating: {
        type: Number,
        default: 4
    },
    discount: {
        type: Number
    }
},{ timestamps: true })

module.exports = mongoose.model("magazines", magazineSchema);