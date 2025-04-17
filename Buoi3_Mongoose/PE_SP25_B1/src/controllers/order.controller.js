const Order = require("../models/order.model");

module.exports = {
  getOrderByCustomerId: async (req, res) => {
    try {
      const customerId = req.params.customerId;
      const orders = await Order.find({ customerId: customerId }).populate(
        "products.productId"
      );
      const newOrder = orders.map((ord) => {
        return {
          _id: ord._id,
          orderDate: ord.orderDate,
          products: ord.products.map((pro) => {
            return {
              _id: pro.productId._id,
              name: pro.productId.name,
              price: pro.productId.price,
            };
          }),
        };
      });
      return res.json({
        newOrder,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
  getOrderById: async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const orders = await Order.findById(orderId)
        .populate("customerId","_id name email")
        .populate("products.productId");
      const newOrder = {
        _id: orders._id,
        customer: orders.customerId,
        products: orders.products.map((pro) => {
          return {
            _id: pro.productId._id,
            name: pro.productId.name,
            price: pro.productId.price,
            quantity: pro.quantity,
          };
        }),
        totalPrice: orders.totalPrice,
      };
      return res.json({
        newOrder,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
};
