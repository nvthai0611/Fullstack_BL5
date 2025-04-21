// khoi tao thu vien 
// để ref được đến bảng categories thì phải import category.model vào để nó hiểu là đã có category rồi
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
}, {timestamps: false ,versionKey: false});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;