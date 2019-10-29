const express = require('express');
const router = express.Router();
const helloWorldController = require('../controllers/helloWorldController')
const watsonVisualRecognitonController = require('../controllers/watsonVisualRecognitionController');

router.get('/', helloWorldController.helloWorld);
router.post('/classify/image', watsonVisualRecognitonController.classifyImage);

module.exports = router;