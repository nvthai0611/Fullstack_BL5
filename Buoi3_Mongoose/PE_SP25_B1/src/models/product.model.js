// khoi tao thu vien
const mongoose = require("mongoose");
const Category = require("./category.model");
const productsSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: false, versionKey: false }
);

const Product = mongoose.model("Product", productsSchema);
module.exports = Product;
