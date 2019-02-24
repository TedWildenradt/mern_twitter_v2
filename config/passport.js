const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = requrie('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new JwtStrategy(opitons, (jwt_payload, done) => {
    consolel.log(jwt_payload);
  }))
}