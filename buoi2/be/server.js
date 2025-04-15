const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const clientRouter = require("./src/routers/client.api");
const serverRouter = require("./src/routers/server.api");
const app = express();
app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });
app.use(cors());
// http://localhost:3000/api/
app.use("/api", clientRouter);
app.use("/serser", serverRouter);

// ket noi database
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch(() => {
    console.log("Conected to MongoDB failed");
  });

// khoi tao server
app.listen(process.env.PORT || 9999, "localhost", () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT || 9999}`);
});
