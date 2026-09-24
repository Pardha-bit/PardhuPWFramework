

import {test,expect} from '@playwright/test'

let tokenUrl = 'https://restful-booker.herokuapp.com/auth';
let bookingUrl = 'https://restful-booker.herokuapp.com/booking'
//let createBookingUrl= 'https://restful-booker.herokuapp.com/booking'

let tokenData={
    username: "admin",
    password: "password123"
}

let accessToken: string
let bookingId: number

test.beforeEach('get token', async({request})=>{

    let tokenResponse = await request.post(tokenUrl,{
        data: tokenData

    });

    expect(tokenResponse.status()).toBe(200);
    let tokenJson= await tokenResponse.json();
    accessToken = tokenJson.token;
    //console.log(accessToken);

})

test('get booking id',async({request})=>{

    let bokingResonse =await request.get(bookingUrl,{
        headers:{
            Authorization: `Bearer ${accessToken}` 
        }
    });

    expect(bokingResonse.status()).toBe(200);
    //let bookingJson = await bokingResonse.json();
    //console.log(bookingJson);

})

test('Create booking',async({request})=>{

    let createBookingResponse = await request.post(bookingUrl,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        },
        data:{
                firstname: `Pardhu${Date.now()}`,
                lastname: 'Veda',
                totalprice: 111,
                depositpaid: true,
                    bookingdates:{
                        checkin: '2026-09-21',
                        checkout: '2026-09-22'

                    },
                additionalneeds: 'Breakfast'
                
        }
    });

    expect(createBookingResponse.status()).toBe(200);
    let cerateBookingJson = await createBookingResponse.json();
    console.log(cerateBookingJson);
    bookingId= cerateBookingJson.bookingid;
    console.log(bookingId);

})

test('get booking',async({request})=>{

    let response = await request.get(`https://restful-booker.herokuapp.com/booking/:${bookingId}`,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    })

    expect(response.status()).toBe(200)
    let bookingJson= await response.json();
    expect(bookingJson.lastname).toBe('Veda')

})