const MainInfo = require('../models/MainInfo');
const Post = require('../models/Post');

const homepageController = async (req, res) => {
  console.log('req.user', req.user);
  try {
    const mainInfo = await MainInfo.findAll();
    const posts = await Post.findAll();
    console.log(mainInfo);
    if (mainInfo.length === 0) {
      console.log('No mainInfo found');
      res.render('main', {
        FirstName: 'No mainInfo found',
        LastName: '',
      });
    } else {
      console.log(mainInfo instanceof Array); // true
      console.log(mainInfo[0].resume_link); // first name of the first user in the array
      res.render('main', {
        FirstName: mainInfo[0].firstName,
        LastName: mainInfo[0].lastName,
        JobTitle: mainInfo[0].jobTitle,
        ProfilePic: mainInfo[0].image,
        ResumeLink: mainInfo[0].resumeLink,
        Posts: posts,
        user: req.user,
        path: req.route.path,
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
