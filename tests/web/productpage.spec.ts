

import {test,expect} from '../../src/fixtures/pagefixtures'

test.beforeEach(async({loginPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USER_NAME,process.env.PASSWORD)

})


test('@regression get prodcut data and price', async({homePage,productPage,searchResultsPage,page})=>{

    await  homePage.doSearch('macbook');
    await  searchResultsPage.selectProduct('Macbook');
    await productPage.getProductMetaData();
    

})

