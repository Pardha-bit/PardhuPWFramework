
import {test,expect} from '@playwright/test'
import {LoginPage} from '../../src/pages/LoginPage'
import { HomePage } from '../../src/pages/HomePage';

let loginpage: LoginPage;
let homaPage: HomePage

test.beforeEach(async({page})=>{

    loginpage = new LoginPage(page)
    await loginpage.goToLoginPage()
    homaPage=new HomePage(page)
})

test.skip('login page title test',async ()=>{
 
    let titie = await loginpage.getLoginPageTitle()
    console.log('Login page title :',titie);
    expect(titie).toBe('Account Login')
})

test.skip('forgot password link test', async()=>{
  
    expect(await loginpage.isForgottenPasswordLinkExist()).toBeTruthy();
})

test.skip('user is able to login',async({page})=>{

   await loginpage.doLogin('mia.anderson48@test.com','pw@123')
   expect.soft(await homaPage.isLogOutLinkExist()).toBeTruthy()
   expect.soft(await homaPage.homePageTitle()).toBe('My Account')

})