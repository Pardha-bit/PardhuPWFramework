
import {expect, test} from '@playwright/test'
import {HomePage} from '../../src/pages/HomePage'
import { LoginPage } from '../../src/pages/LoginPage';

let homePage: HomePage;
let loginPage: LoginPage;

test.beforeEach(async({page})=>{
    loginPage=new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.doLogin('mia.anderson48@test.com','pw@123')
    homePage=new HomePage(page)

})

test.skip('home page title test',async ()=>{
    let pageTitle=await homePage.homePageTitle();
    console.log(pageTitle);
    expect(pageTitle).toBe('My Account')
})

test.skip('validate home page', async()=>{

    expect(await homePage.isLogOutLinkExist()).toBeTruthy()

})

test.skip('get headers in home page test', async()=>{

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