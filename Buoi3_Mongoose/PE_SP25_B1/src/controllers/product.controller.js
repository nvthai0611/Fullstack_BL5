const Product = require("../models/product.model");

module.exports = {
  getAll: async (req, res) => {
    try {
      const products = await Product.find().populate({
        path: "category",
        select: "-_id",
      });
      return res.json({
        products: products,
        message: "Get data successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Chet server",
      });
    }
  },
};
