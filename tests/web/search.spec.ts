import {test,expect} from '../../src/fixtures/pagefixtures'

test.beforeEach(async({loginPage})=>{
    
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USER_NAME,process.env.PASSWORD)
   

})

test('verify search results count', async({homePage,page,searchResultsPage})=>{

        await homePage.doSearch('macbook');
        let resultCount=await searchResultsPage.getProductImageCount();
        expect(resultCount).toBe(3)

})

test('verify product landing on product page',async({homePage,searchResultsPage,page})=>{

    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook');
    expect(await page.title()).toBe('MacBook');
    

})