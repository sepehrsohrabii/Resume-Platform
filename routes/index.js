const express = require('express');

const { body } = require('express-validator');

const homepageController = require('../controllers/homepageController');
const postController = require('../controllers/postController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');
const dashboardController = require('../controllers/dashboardController');
const loginController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const signupController = require('../controllers/signupController');
const forgetController = require('../controllers/forgetController');
const resetController = require('../controllers/resetController');
const adminPostController = require('../controllers/adminPostController');
const { isLoggedIn, isNotLoggedIn } = require('../helpers/auth');
const mailController = require('../controllers/mailController');

const upload = require('../helpers/upload');
const resize = require('../helpers/resize');

const router = express.Router();

router.get('/', homepageController);
router.get('/post/:id', postController);
router.get('/about', aboutController);
router.get('/contact', contactController);
router.get('/dashboard', isLoggedIn, dashboardController);
router.get('/login', isNotLoggedIn, loginController.get);
router.post(
  '/login',
  isNotLoggedIn,
  body('email').isEmail().normalizeEmail().toLowerCase(),
  body('password').isLength({ min: 6 }),
  loginController.post
);
router.get('/signup', isNotLoggedIn, signupController.get);
router.post(
  '/signup',
  isNotLoggedIn,
  body('username').not().isEmpty(),
  body('email').isEmail().normalizeEmail().toLowerCase(),
  body('password').isLength({ min: 6 }),
  signupController.post
);

router.get('/forget', isNotLoggedIn, forgetController.get);
router.post(
  '/forget',
  isNotLoggedIn,
  body('email').isEmail().normalizeEmail().toLowerCase(),
  forgetController.post
);
router.get('/reset', resetController.get);
router.post(
  '/reset',
  isNotLoggedIn,
  body('password').isLength({ min: 6 }),
  resetController.post
);
router.get('/logout', logoutController);
router.get('/mail', mailController);

router.get('/dashboard/create', isLoggedIn, adminPostController.get);
router.post(
  '/dashboard/create',
  upload.single('image'),
  resize,
  adminPostController.post
);

module.exports = router;
