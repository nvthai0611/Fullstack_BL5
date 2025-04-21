// khoi tao thu vien 
// để ref được đến bảng categories thì phải import category.model vào để nó hiểu là đã có category rồi
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    // ví dụ về kiểu enum
    // gender: {
    //    enum: ['male', 'female'], // try catch , errors => message : lỗi trả về enum khi ng dùng nhập sai định dạng 
    // }
}, {timestamps: false ,versionKey: false});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;