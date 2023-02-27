const { validationResult } = require('express-validator');
const ejs = require('ejs');
const path = require('path');
const md5 = require('md5');
const User = require('../models/User');
const sendMail = require('../utils/sendMail');

const get = (req, res) => {
  console.log('req.flash', req.flash());
  res.render('forget', {
    flash: req.flash(),
    errors: [],
  });
};
const post = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render('forget', {
      flash: req.flash(),
      errors: errors.array(),
    });
  }

  const existanceUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!existanceUser) {
    req.flash('warning', 'This user does not exists.');
    res.render('forget', {
      flash: req.flash(),
      errors: [],
    });
    return;
  }
  const token = md5(req.body.email + new Date());
  await User.update(
    {
      token,
      token_used: 0,
    },
    {
      where: {
        email: req.body.email,
      },
    }
  );

  const html = await ejs.renderFile(
    path.join(__dirname, '../views/mail/auth.ejs'),
    {
      title: 'Forget password instructions',
      description: 'Please click on the link below.',
      link: `${process.env.URL}/reset?token=${token}`,
    }
  );

  await sendMail({
    to: req.body.email,
    subject: 'Forget Password Instructions',
    html,
  });
  req.flash('success', 'New instruction was sent to your mail box.');
  res.render('forget', {
    flash: req.flash(),
    errors: [],
  });
};

module.exports = {
  get,
  post,
};
