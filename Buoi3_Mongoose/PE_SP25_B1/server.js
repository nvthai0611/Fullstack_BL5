const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./config/db');
require('dotenv').config();
const apiRouter = require("./src/routers/api")
const app = express();
// middleware cho phép domain khác có thể gửi yêu cầu và nhận res
app.use(cors());

app.use(bodyParser.json()); // express.json()
app.use(bodyParser.urlencoded({ extended: true })); // express.urlencoded
app.use("/api", apiRouter)
connectDb();
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});