const Order = require("../models/order.model");
module.exports = {
    getOrderByCustomerId: async (req, res) => {
        try {
            const customerId = req.params.customerId;
            // search order by customerId
            const orders = await Order.find({ customerId: customerId }).populate("products.productId");
            // map
            const newOrder = orders.map((ord) => {
                return {
                    _id: ord._id,
                    orderDate: ord.orderDate,
                    products: ord.products.map((pro) => {
                        return {
                            _id: pro.productId._id,
                            name: pro.productId.name,
                            price: pro.productId.price,
                        }
                    })
                }
            })
            return res.json(newOrder);
        } catch (error) {
            return res.status(500).json({
                message: error.message

            })
        }
    },

    // tìm kiếm order theo _id , findbyId(orderId)
};