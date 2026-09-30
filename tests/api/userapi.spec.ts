


import {test, expect} from '../../src/api/apifixtures'

const TOKEN = process.env.API_TOKEN!;

let AUTH_HEADER = {
    Authorization: `Bearer ${TOKEN}`
};

let userId: number;

test.describe.serial('running e2e go rest crud apis tests', () => {


    //GET Test:
    test.skip('GET API - get all users', async ({ apiHelper }) => {
        let response = await apiHelper.get('/public/v2/users', AUTH_HEADER);
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });


    //POST :
    test.skip('POST API -- create a user', async ({ apiHelper }) => {
        //User JS Object:
        let userData = {
            name: 'manish',
            email: `pwautomation_${Date.now()}@open.com`,
            gender: 'male',
            status: 'active'
        };

        let response = await apiHelper.post('/public/v2/users', userData, AUTH_HEADER);
        expect((response).status).toBe(201);
        userId = response.body.id;
        console.log('created user id : ', userId);
    });

    //PUT :
    test.skip('PUT API -- update a user', async ({ apiHelper }) => {
        //User JS Object:
        let userData = {
            name: 'manish automation labs',
            status: 'inactive'
        };

        let response = await apiHelper.put(`/public/v2/users/${userId}`, userData, AUTH_HEADER);
        expect((response).status).toBe(200);
        expect(response.body.name).toBe(userData.name);
        expect(response.body.status).toBe(userData.status);

    });

    //DELETE :
    test.skip('DELETE API -- delete a user', async ({ apiHelper }) => {
        let response = await apiHelper.delete(`/public/v2/users/${userId}`, AUTH_HEADER);
        expect((response).status).toBe(204);
    });



})

// const TOKEN = process.env.API_TOKEN

// let AUTH_HEADER={
//     Authorization: `Bearer ${TOKEN}`
// }

// let userId: number;

// test.describe.serial('running e2e go rest apis',()=>{

//     test('get all users',async ({apiHelper})=>{

//         let response = await apiHelper.get('/public/v2/users',AUTH_HEADER)
//         expect(response.status).toBe(200)


//     })

// test('post call',async({apiHelper})=>{

//         let userData={
//             name: 'Pardhu',
//             email: `pardhu${Date.now()}@test.com`,
//             gender : 'male',
//             status: 'Active',
//         }

//         let response =await apiHelper.post('/public/v2/users',userData,AUTH_HEADER)

//         expect((response).status).toBe(201)
//         console.log(await response.body);
//         userId = await response.body.id
//         console.log('user id:',userId);

//     })

//     test('put call', async({apiHelper})=>{

//         let userData={
//             name: 'Pardhu123',
//             status: 'inctive',
//         }

//         // let response =await apiHelper.put(`/public/v2/users/${userId}`,userData,AUTH_HEADER)
//         // console.log(response.body);
//         // expect(response.status).toBe(200)
//         // expect(response.body.name).toBe(userData.name)
//          let response = await apiHelper.put(`/public/v2/users/${userId}`, userData, AUTH_HEADER);
//                 expect((response).status).toBe(200);
//                 expect(await response.body.name).toBe(userData.name);
//                 expect(await response.body.status).toBe(userData.status);

//     })

//     test('DELETE API -- delete a user', async ({ apiHelper }) => {
//         let response = await apiHelper.delete(`/public/v2/users/${userId}`, AUTH_HEADER);
//         expect((response).status).toBe(204);
//     });



// })





