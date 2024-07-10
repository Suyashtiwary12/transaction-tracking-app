const mongoose = require("mongoose");
const model = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model("transactionModel",model);