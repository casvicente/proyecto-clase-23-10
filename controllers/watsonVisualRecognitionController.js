const fs = require('fs');
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    authenticator: new IamAuthenticator({
        apikey: 'BkHpDWmITjSvlYSjSdU9pvl_y1fg5XxGLz8EIBC6e1GT'
    }),
    url: 'https://gateway.watsonplatform.net/visual-recognition/api',
});








let classifyImage = async (req, res) => {
        let files = req.files;
        console.log(files);
        res.send(files);
        /* 
        const classifyParams = {
            imagesFile: fs.createReadStream('./data/11.jpg'),
            owners: ['IBM'],
            threshold: 0.6,
          };
          
          visualRecognition.classify(classifyParams)
            .then(response => {
              const classifiedImages = response.result;
              console.log(JSON.stringify(classifiedImages, null, 2));
              res.send(response);
            })
            .catch(err => {
              console.log('error:', err);
            }); */
}


module.exports = {
    classifyImage,
}