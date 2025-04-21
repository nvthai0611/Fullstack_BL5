const user = {
    id: 1,
    name: "Nguyen Van A",
    email: "o2mX2@example.com"
}
const GoogleStrategy = require('passport-google-oauth20').Strategy;
module.exports = new GoogleStrategy({
    clientID: "",
    clientSecret: "",
    callbackURL: "",
    scope: ["profile", "email"],
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    // mn phai tu duy lam gi o day
    // phai co bang user
    // tao moi =., tra ve  done(null, user);
    // phai lay profile thon qua email => tao tai khoan 
    // tra ve user cho ng dung neu ma tao xong user
    return done(null, user);
  }
)