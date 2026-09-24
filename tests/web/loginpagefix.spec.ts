



import {test,expect} from '../../src/fixtures/pagefixtures'
import {CsvHelper} from '../../src/utils/CsvHelper'
import {ExcelHelper} from '../../src/utils/ExcelHelper'



test.beforeEach(async({loginPage})=>{

   
    await loginPage.goToLoginPage()
    
})

test('login page title test',async ({loginPage})=>{
 
    let titie = await loginPage.getLoginPageTitle()
    console.log('Login page title :',titie);
    expect(titie).toBe('Account Login')
})

test('forgot password link test', async({loginPage})=>{
  
    expect(await loginPage.isForgottenPasswordLinkExist()).toBeTruthy();
})

test('user is able to login',async({loginPage,homePage})=>{

   await loginPage.doLogin(process.env.USER_NAME,process.env.PASSWORD)
   expect.soft(await homePage.isLogOutLinkExist()).toBeTruthy()
   expect.soft(await homePage.homePageTitle()).toBe('My Account')

})

// read data from Csv

let readCsvData=CsvHelper.readCsv('src/testdata/logindata.csv')
for(let row of readCsvData){
test(`user is not able to login use Csv data - ${row.username} : ${row.password}`,async({loginPage,homePage})=>{

    await loginPage.doLogin(row.username,row.password)
    expect( loginPage.isLoginErrorExist()).toBeTruthy()
    

})
}

// read data from excel

let readExcelData= ExcelHelper.readExcel('src/testdata/logindata.xlsx','login')
for(let row of readExcelData){

    test(`user is unable to logi use excel dat - ${row.useranem} - ${row.password}`,async({loginPage,page})=>{

        await loginPage.doLogin(row.username,row.password)
        expect(await loginPage.isLoginErrorExist()).toBeTruthy()

    })

}


