const express = require('express');
const router = express.Router();
const helloWorldController = require('../controllers/helloWorldController')
const watsonVisualRecognitonController = require('../controllers/watsonVisualRecognitionController');
const watsonDiscoveryController = require('../controllers/watsonDiscoveryController');

router.get('/', helloWorldController.helloWorld);
router.post('/classify/image', watsonVisualRecognitonController.classifyImage);
router.post('/search/discovery', watsonDiscoveryController.query)
router.post('/test/webhook/assistant', (req, res) => {
    console.log(req.body);
    res.send({response: "Hola Webhook!"});
})
module.exports = router;