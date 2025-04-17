// khoi tao thu vien
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
  },
  { timestamps: false ,versionKey: false }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
