const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./config/db');
require('dotenv').config();
const productRouter = require("./src/routers/product.api")
const userRouter = require("./src/routers/user.api")
const session = require('express-session');
const passport = require('passport');
const passportGoogle = require('./src/passport/passport.google');
const app = express();
// middleware cho phép domain khác có thể gửi yêu cầu và nhận res
app.use(cors());
// cau hinh session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    name: 'sessionId',
}))
// su dung passport 
app.use(passport.initialize());
app.use(passport.session());

passport.use("google",passportGoogle)
passport.serializeUser(function(user, done) {
    done(null, user.id); // luu userid vao session
})

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

app.use(bodyParser.json()); // express.json()
app.use(bodyParser.urlencoded({ extended: true })); // express.urlencoded
app.get("/hone", (req, res) => {
    res.json({
        message: "Hello world"
    })
})
app.use("/api", productRouter);
app.use("/", userRouter);
connectDb();
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});