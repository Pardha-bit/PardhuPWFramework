

import {test,expect} from '@playwright/test'


let accessToken: string;

test.skip('get access token',async({request})=>{

    let accessURL='https://thinking-tester-contact-list.herokuapp.com/users/login'
    let data={
        email: 'pardhu789@gmail.com',
        password: 'Thrailu@1513'
    }

    let response = await request.post(accessURL,{
        data: data
    })

    expect(response.status()).toBe(200);
    let contactJson=await response.json();
    accessToken=contactJson.token;
    console.log(accessToken);
    return accessToken;

})

test.skip('add contct',async({request})=>{
    let contactUrl='https://thinking-tester-contact-list.herokuapp.com/contacts'

    let conatctData={

            "firstName": `Pardha${Date.now}`,
            "lastName": "Doe",
            "birthdate": "1970-01-01",
            "email": "jdoe@fake.com",
            "phone": "8005555555",
            "street1": "1 Main St.",
            "street2": "Apartment A",
            "city": "Anytown",
            "stateProvince": "KS",
            "postalCode": "12345",
            "country": "USA"
        
    }
    let response = await request.post(contactUrl,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        },
        data:{
            conatctData
        }
    });

    let test = await response.json()

    console.log(test);

    expect(response.status()).toBe(201)
})