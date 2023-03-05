const mongoose = require("mongoose");

const tempCartOrder = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User id must be defined"]
    },
    items: [
        {
            productName: {
                type: String,
                required: [true, "product name must be provided"]
            },
            productImage: {
                type: String,
                required: [true, "product image must be provided"]
            },
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: [true, "product id must be provided"]
            },
            productPrice: {
                type: String,
                required: [true, "product price must be provided"]
            },
            quantity: {
                type: String,
                required: [true, "product quantity must be provided"]
            },
            createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                required: [true, "createdBy must be provided"]
            }

        }
    ],
    orderTotal: {
        type: Number,
        required: [true, "Order total must be defined"]
    },
    totalQuantity: {
        type: Number,
        required: [true, "Quantity total must be defined"]
    },
    transactionRef: {
        type: String,
        required: [true, "Transaction ref must be provided"]
    },
    currency: {
        type: String,
        required: [true, "Currency should be provided"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("tempOrder", tempCartOrder);