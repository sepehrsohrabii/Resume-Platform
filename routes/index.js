const express = require('express');

const homepageController = require('../controllers/homepageController');
const postController = require('../controllers/postController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.get('/', homepageController);
router.get('/post/:id', postController);
router.get('/about', aboutController);
router.get('/contact', contactController);

module.exports = router;
