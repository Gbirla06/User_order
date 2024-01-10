const mongoose = require('mongoose');

const oderSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    sub_total:{
        type: Number,
        required: true,
    },
    phone_number : {
        type: Number,
        required: true,
    }
}, {timestamps: true});

const Order = mongoose.model('order',oderSchema);
module.exports = Order;