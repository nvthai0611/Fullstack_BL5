// Dành cho mô hình mvc trong express => ejs ~ jsp trong java
// tách file => để dễ quản lý
// đẩy file ra để file khác có thể import chúng vào 
// reactjs => exports {}, exports default ten-file
const express = require("express");

const router = express.Router();
router.get("/", (req, res) => {
    res.json({
      message: "Server API",
    });
  });

module.exports = router;
