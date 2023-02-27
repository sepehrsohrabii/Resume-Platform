const passport = require('passport');
const User = require('../models/User');

const get = async (req, res) => {
  console.log('req.flash', req.flash());
  res.render('login', {
    flash: req.flash(),
  });
};
const post = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login?failed',
  failureFlash: true,
  session: true,
});
module.exports = {
  get,
  post,
};
