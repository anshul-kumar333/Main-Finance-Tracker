const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        amount: Number,
        type: String, // income | expense | borrow | lend
        category: String,
        fromTo: String,
        date: Date,
        description: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);