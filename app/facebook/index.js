const {Facebook } = require('fb');
const { FACEBOOK_ACCESS_TOKEN } = process.env;

const FB = new Facebook({
    version: 'v2.4'
});

FB.setAccessToken(FACEBOOK_ACCESS_TOKEN);

module.exports = FB;