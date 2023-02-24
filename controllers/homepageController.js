const MainInfo = require('../models/MainInfo');

const homepageController = async (req, res) => {
  try {
    const mainInfo = await MainInfo.findAll();
    console.log(mainInfo);
    if (mainInfo.length === 0) {
      console.log('No mainInfo found');
      res.render('main', {
        FirstName: 'No mainInfo found',
        LastName: '',
      });
    } else {
      console.log(mainInfo instanceof Array); // true
      console.log(mainInfo[0].ProfilePic); // first name of the first user in the array
      res.render('main', {
        FirstName: mainInfo[0].firstName,
        LastName: mainInfo[0].lastName,
        ProfilePic: mainInfo[0].image,
      });
    }
  } catch (error) {
    console.log(error);
    res.render('error', {
      error: 'Error fetching me',
    });
  }
};

module.exports = homepageController;
