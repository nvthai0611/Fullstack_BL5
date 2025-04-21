// khoi tao thu vien 
const mongoose = require('mongoose');
const Category = require("./category.model")
const productsSchema = new mongoose.Schema({
// mặc ddinh _id mongoose tự tạo 
    name: String,
    price: Number,
    stock: Number,
    // category có định dạng là ObjectId => ref đến bảng categories, 
    // => ref đến bảng 1 - 1 
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
}, {timestamps: false ,versionKey: false});

const Product = mongoose.model('Product', productsSchema);
module.exports = Product;