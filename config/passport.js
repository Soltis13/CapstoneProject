JwtStrategy = require('passport-jwt').Strategy; //passport-jwt
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose'); //search for mongoose user
const User = mongoose.model('users'); //mongoose user
const keys = require('../config/keys'); //secret key location

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //predefined function
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {// recieving passport passed in from server
  passport.use(
    //pass in options and recieve payload (user info)
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};