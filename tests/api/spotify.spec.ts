
import {test,expect} from '@playwright/test'

let AUTH_HEADERS={
    tokenUrl: 'https://accounts.spotify.com/api/token',
    grantType: process.env.OAUTH_GRANT_TYPE,
    clientId: process.env.OAUTH_CLIENT_ID,
    clienSecret: process.env.OAUTH_CLEIENT_SECRET

}

let accessToken: string;

test.beforeEach('get access token -post',async({request})=>{

    let tokenResponse =await request.post(AUTH_HEADERS.tokenUrl,{
        form:{
            grant_type: AUTH_HEADERS.grantType,
            client_id: AUTH_HEADERS.clientId,
            client_secret: AUTH_HEADERS.clienSecret
        }

    });

    expect(tokenResponse.status()).toBe(200)
    let jsonResponse= await tokenResponse.json()
    console.log('token response:',jsonResponse);
    accessToken =jsonResponse.access_token;
    console.log('accessToken :',accessToken);

})

