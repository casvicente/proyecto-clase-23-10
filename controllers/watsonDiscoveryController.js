const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
    version: '2019-04-30',
    authenticator: new IamAuthenticator({
        apikey: 'xe5UuBXfRxDRMXiT1U0m76T9ilX79M19WtxNkUKJz5cu',
    }),
    url: 'https://gateway.watsonplatform.net/discovery/api',
});




let query = async (req, res) => {
    if (req.body.text) {

        try {
            const queryParams = {
                environmentId: '4783a252-dd33-4b34-b25e-7f9d9d67abc7',
                collectionId: '3cb2039b-5a71-4219-9f9c-a1815402d6e3',
                naturalLanguageQuery: req.body.text
            };
            let responseDiscovery = await discovery.query(queryParams);
            console.log(responseDiscovery);
            res.send(responseDiscovery.result);
        } catch (error) {
            console.log(`Error: ${error}`);
            res.send(error)
        }
    }
    else {
        res.status(400).send({ error: true, message: 'Propiedad text no encontrada' });
    }
}

module.exports = {
    query
}