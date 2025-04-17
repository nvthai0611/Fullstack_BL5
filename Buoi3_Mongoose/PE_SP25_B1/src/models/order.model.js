// khoi tao thu vien
const mongoose = require("mongoose");
const Product = require("./product.model")
const Customer = require("./customer.model")
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
    products: [productEm],
    name: String,
    totalPrice: Number,
    orderDate: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: false }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
