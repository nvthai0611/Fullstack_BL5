const express = require("express");
const router = express.Router();
const User = require("../models/customer.model");
const passport = require("passport");
router.get("/user/:userId", async (req, res) => {
    try {
        const {userId} = req.params;
       const user = await User.findById(userId).populate("manager");
       return res.json(user);
    } catch (error) {
        console.log(error);
        
    }
});
router.get("/google", passport.authenticate("google"));
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    if(req.user){
        // tao access token cho ng dung
        // phai luu accesstoken vao cookie => 
        // redirect ve client => ve fronent
        return res.json(req.user);
    }
})
module.exports = router;
