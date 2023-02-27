const mailController = (req, res) => {
  res.render('mail/auth', {
    title: 'Hi there',
    description: 'Eiusmod ea officia irure et aute veniam.',
  });
};

module.exports = mailController;
