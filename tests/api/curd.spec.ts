

import {test,expect} from '../../src/api/apifixtures'

let TOKEN_HEADER: string;

test.skip('get token',async({apiHelper})=>{

    let data={
        username: "admin",
        password: "password123"
    }

    let response = await apiHelper.getToken('auth',data)
    TOKEN_HEADER= await response.body.token

    console.log('token :', TOKEN_HEADER);


})

let TOKEN_AUTH!: string 

let Auth_Header = {
    Authorization: `Bearer ${TOKEN_AUTH}`
}

test.skip('get booking', async({apiHelper})=>{
    let response= await apiHelper.get('booking',Auth_Header)
    expect(response.status).toBe(200)

})



