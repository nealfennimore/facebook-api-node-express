const {Facebook } = require('fb');
const {
    FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET,
    FACEBOOK_API_VERSION
} = process.env;

const FB = new Facebook({
    appId: FACEBOOK_APP_ID,
    appSecret: FACEBOOK_APP_SECRET,
    version: `v${FACEBOOK_API_VERSION}`
});

FB.napi('oauth/access_token', {
    /* eslint-disable camelcase */
    client_id:      FB.options('appId'),
    client_secret:  FB.options('appSecret'),
    grant_type:     'client_credentials'
    /* eslint-enable camelcase */
}, (err, resp)=>{
    if(err){ throw err; }

    console.log('Setting access token');
    FB.setAccessToken(resp.access_token);
});


module.exports = FB;