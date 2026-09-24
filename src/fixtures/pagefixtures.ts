

import {test as baseTest, expect} from '@playwright/test'
import {BasePage} from '../pages/BasePage'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import {SearchResultsPage} from '../pages/SearchResultsPage'
import { ProductPage } from '../pages/ProductPage'

type pageFixtures={

    basePage: BasePage,
    loginPage: LoginPage,
    homePage: HomePage,
    searchResultsPage: SearchResultsPage,
    productPage: ProductPage

};

export let test = baseTest.extend<pageFixtures>({

    basePage: async ({page},use)=>{
        let basePage=new BasePage(page)
        await use(basePage)

    },

     loginPage: async ({page},use)=>{
        let loginPage=new LoginPage(page)
        await use(loginPage)

    },

     homePage: async ({page},use)=>{
        let homaPage=new HomePage(page)
        await use(homaPage)

    },

    searchResultsPage: async({page},use)=>{
        let searchResultsPage= new SearchResultsPage(page)
        await use(searchResultsPage)

    },

    productPage: async({page},use)=>{

        let productPage= new ProductPage(page)
        await use(productPage)
    }

})

export {expect} from '@playwright/test'