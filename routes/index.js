const express = require('express');

const homepageController = require('../controllers/homepageController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.get('/', homepageController);
router.get('/about', aboutController);
router.get('/contact', contactController);

module.exports = router;
