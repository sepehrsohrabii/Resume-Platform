const homepageController = (req, res) => {
  res.status(200).send(`
  <div>
    <h1>Sepehr Sohrabi</h1>
    <img src="assets/img/profile.JPG">
  </div>
  `);
};

module.exports = homepageController;
