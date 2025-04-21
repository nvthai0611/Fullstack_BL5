
const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    phone: Number,
    // self reference => tham chiếu lại chính nó
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    }
}, {timestamps: false});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;