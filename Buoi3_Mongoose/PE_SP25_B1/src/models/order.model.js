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
    // mặc ddinh _id mongoose tự tạo
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    // ref: 1 - n
    // nhìn đề ae thấy trng products các đối tượng trong đó có _id tự sinh thì tức là là cũng là 1 schema khác => Embedded data
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
