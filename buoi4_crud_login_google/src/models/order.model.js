// khoi tao thu vien
const mongoose = require("mongoose");
const Product = require("./product.model");
const Customer = require("./customer.model");
const productEm = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number,
});
const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    // No sql nên là ít khi xảy ra kiểu nhiều nhiều => bảng trung giang, thường trong mongoose => ko có bảng trung gian
    // vẫn xuất hiện id => dùng cách này cũng được nhé ae
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
      },
    ],
    name: String,
    totalPrice: {
      type: Number,
      default: 0,
    },
    orderDate: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: false }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
