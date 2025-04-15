const express = require("express");
const usersController = require("../controllers/clients/v1/users.controller");
const authController = require("../controllers/clients/v1/auth.controller");
const authMiddleware = require("../middlewares/v1/auth.middleware");
const router = express.Router();

router.get("/auth",authMiddleware , authController.login);

router.get("/", usersController.getAllUsers);
router.get("/users/:id", usersController.findUserById);
router.post("/users/:id", usersController.create);
module.exports = router;

// router.get("/users", (req, res) => {
//   const query = req.query;
//   console.log(query);
//   res.json({
//     name: query.name,
//     age: query.age,
//   });
// });

// router.put("/users/:id", (req, res) => {
//   const body = req.body;
//   const { id } = req.params;
//   console.log(body, id);
//   res.json({
//     message: "PUT request",
//   });
// });
// router.patch("/users/:id", (req, res) => {
//   const body = req.body;
//   const { id } = req.params;
//   console.log(body, id);
//   res.json({
//     message: "PUT request",
//   });
// });
// router.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   res.json({
//     message: "DELETE request",
//   });
// });
