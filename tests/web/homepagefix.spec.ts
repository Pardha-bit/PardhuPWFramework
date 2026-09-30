

import {test,expect} from '../../src/fixtures/pagefixtures'

test.beforeEach(async({loginPage})=>{
    
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USER_NAME,process.env.PASSWORD)
   

})

test.skip('home page title test',async ({homePage})=>{
    let pageTitle=await homePage.homePageTitle();
    console.log(pageTitle);
    expect(pageTitle).toBe('My Account')
})

test.skip('validate home page', async({homePage})=>{

    expect(await homePage.isLogOutLinkExist()).toBeTruthy()

})

test('@regression get headers in home page test', async({homePage})=>{

    let headers =await homePage.getHeadersLink()
    console.log(headers);
    expect.soft(headers).toHaveLength(4)
    expect.soft(headers).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
   
    ])
})

