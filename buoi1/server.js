// b1: khai bao thu vien
const express = require("express");
// thu vien cors
// const cors = require("cors");
const app = express();
const PORT = 9999;
// mo cors 2 => mo cho phep fe gui xuong dinh dang json
// body-parser
// hau nhu tat ca cac thu vien cua express => deu la middleware
app.use(express.json());
// b2: khoi tao router (duong dan)
// mo cors khi co fe va be
// middleware
app.use((req, res, next) => {
  // next la ham cho phep req tiep tuc chay
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

// req 1 params
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json({
    userID: id,
  });
});
// query
app.get("/users", (req, res) => {
  const query = req.query;
  console.log(query);
  res.json({
    name: query.name,
    age: query.age,
  });
});
// post
// create a document => body
app.post("/users", (req, res) => {
  const body = req.body;
  const { id } = req.params;
  // tim user
  console.log(body, id);
  res.json({
    message: "POST request",
  });
});

app.put("/users/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;
  // tim user
  // thay thi update
  console.log(body, id);
  res.json({
    message: "PUT request",
  });
});

app.patch("/users/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;
  // tim user
  // thay thi update
  console.log(body, id);
  res.json({
    message: "PUT request",
  });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json({
    message: "DELETE request",
  });
});

// khoi tao server
app.listen(PORT, "localhost", () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
