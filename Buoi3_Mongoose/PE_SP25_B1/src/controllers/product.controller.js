const Product = require("../models/product.model");
// đã làm việc với database => dạng bất đồng bộ (asycn/await) 
// Khi dufng ORM hoặc ODM => tối ưu câu lệnh database thành định dạng code 
// select * ... (bỏ đi) => thay bằng code
module.exports = {
    getAll: async (req, res) => {
        try {
          const products = await Product.find().populate("category");
        return res.json(products)
        } catch (error) {
          return res.status(500).json({
            message: "Internal server error"
          })
        }
      },
    
}