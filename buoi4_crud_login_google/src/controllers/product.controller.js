const { default: mongoose } = require("mongoose");
const Product = require("../models/product.model");
const Customer = require("../models/customer.model");
const Order = require("../models/order.model");
module.exports = {
  getAll: async (req, res) => {
    try {
      const products = await Product.find().populate("category");
      return res.json(products);
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  update: async (req, res) => {
    // update => id cura san pham can updaye
    // thong tin update
    try {
      const { productId } = req.params;
      // thong tin update
      const body = req.body;
      // findByIdAndUpdate
      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.json({
          message: "Vui long dien id dung",
        });
      }
      const product = await Product.findById(productId);
      if (!product) {
        return res.json({
          message: "Khong tim thay san pham",
        });
      }
      const updateProduct = await Product.findByIdAndUpdate(productId, body, {
        new: true,
      });
      return res.json({
        updateProduct,
      });
    } catch (error) {}
  },
  delete: async (req, res) => {
    try {
      const { productId } = req.params;
      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.json({
          message: "Vui long dien id dung",
        });
      }
      const product = await Product.findById(productId);
      if (!product) {
        return res.json({
          message: "Khong tim thay san pham",
        });
      }
      const deleteProduct = await Product.deleteOne({ _id: productId });
      return res.json({
        deleteProduct,
      });
    } catch (error) {}
  },
  createOrder: async (req, res) => {
    try {
      const {customerId, products} = req.body;
      const customer = await Customer.findById(customerId);
      if (!customer) {
        return res.json({
          message: "Khong tim thay khach hang",
        });
      }
      const newOrder = await Order.create({
        customerId: customerId,
        products: products,
      });
      const orderNew = await  Order.findById(newOrder._id).populate("products.productId");
      // tính total price thông qua reduce
      const totalPice = orderNew?.products?.reduce((total, item) => {
        return total + item.productId.price * item.quantity
      }, 0);
      const updateOrder = await Order.findByIdAndUpdate(newOrder._id, {
        totalPrice: totalPice
      }, {new: true});
        const updates = await Promise.all(products.map((item) =>
          Product.findOneAndUpdate(
            { _id: item.productId },
            { $inc: { stock: -item.quantity } },
            { new: true }
          )
        ));
      return res.json(updateOrder);
    } catch (error) {}
  },
};
