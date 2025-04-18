// khoi tao thu vien 
const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    
});

const Product = mongoose.model('Product', productsSchema);
module.exports = Product;