const express = require("express");
const productController = require("../controllers/product.controller");
const orderController = require("../controllers/order.controller");
const router = express.Router();

router.get("/products", productController.getAll);
router.get("/orders/customer/:customerId", orderController.getOrderByCustomerId);
router.post("/products", productController.createOrder);
router.put("/products/:productId", productController.update);
router.delete("/products/:productId", productController.delete);

module.exports = router;
