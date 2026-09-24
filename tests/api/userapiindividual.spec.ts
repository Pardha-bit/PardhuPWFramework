

import {test,expect} from '../../src/api/apifixtures'

const TOKEN =process.env.API_TOKEN;

let AUTH_HEADER={
    Authorization: `Bearer ${TOKEN}`
}

async function createUser(apiHelper : any) {

     let userData = {
            name: 'manish',
            email: `pwautomation_${Date.now()}@open.com`,
            gender: 'male',
            status: 'active'
    };

    let response = await apiHelper.post('/public/v2/users', userData, AUTH_HEADER);
    expect(response.status).toBe(201)
    return response.body;
    
}


test('Create a user test',async({apiHelper})=>{

    let userResponse =await createUser(apiHelper);

    let getResponse =await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);

    expect((getResponse).status).toBe(200);

    expect(getResponse.body.name).toBe(userResponse.name)


})

test('update user',async({apiHelper})=>{

    let updateUserResponse = await createUser(apiHelper)

    let getResponse =await apiHelper.get(`/public/v2/users/${updateUserResponse.id}`,AUTH_HEADER);
    expect((getResponse).status).toBe(200);
    expect(getResponse.body.name).toBe(updateUserResponse.name)

    let userData = {
            name: 'manish-update',
            status: 'inactive'
    };

    let putResponse = await apiHelper.put(`/public/v2/users/${updateUserResponse.id}`,userData,AUTH_HEADER)
    expect(putResponse.status).toBe(200);
    expect(putResponse.body.name).toBe(userData.name)
    expect(putResponse.body.status).toBe(userData.status)

    getResponse =await apiHelper.get(`/public/v2/users/${updateUserResponse.id}`,AUTH_HEADER);
    expect((getResponse).status).toBe(200);
    expect(getResponse.body.name).toBe(userData.name)
    expect(getResponse.body.status).toBe(userData.status)
})

test('delete user', async ({apiHelper})=>{

    let deleteUser = await createUser(apiHelper)

    let getResponse =await apiHelper.get(`/public/v2/users/${deleteUser.id}`,AUTH_HEADER);
    expect((getResponse).status).toBe(200);
    expect(getResponse.body.name).toBe(deleteUser.name)

    let deleteResponse = await apiHelper.delete(`/public/v2/users/${deleteUser.id}`,AUTH_HEADER)
    expect(deleteResponse.status).toBe(204)

    getResponse =await apiHelper.get(`/public/v2/users/${deleteUser.id}`,AUTH_HEADER);
    expect((getResponse).status).toBe(404);
    expect(getResponse.body.message).toBe('Resource not found')


})


