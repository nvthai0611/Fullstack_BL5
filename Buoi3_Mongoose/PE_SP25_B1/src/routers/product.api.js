const express = require("express");
const productController = require("../controllers/product.controller");
const orderController = require("../controllers/order.controller");
const router = express.Router();

router.get("/products", productController.getAll);
router.get("/orders/customer/:customerId",orderController.getOrderByCustomerId)
router.get("/orders/:orderId",orderController.getOrderById)

module.exports = router;
