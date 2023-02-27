const logoutController = (req, res) => {
  req.logout((err) => {
    if (err) {
      // handle error
      res.render('login', {
        flash: req.flash('warning', err),
      });
    }
    res.redirect('/');
  });
};

module.exports = logoutController;
