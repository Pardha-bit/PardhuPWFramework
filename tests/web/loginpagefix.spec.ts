



import {test,expect} from '../../src/fixtures/pagefixtures'
import {CsvHelper} from '../../src/utils/CsvHelper'
import {ExcelHelper} from '../../src/utils/ExcelHelper'


test('@smoke open url', async({loginPage})=>{

     await loginPage.goToLoginPage();
})

// test.beforeEach(async({loginPage})=>{

   
//     await loginPage.goToLoginPage()
    
// })

// test('@smoke login page title test',async ({loginPage})=>{
 
//     let titie = await loginPage.getLoginPageTitle()
//     console.log('Login page title :',titie);
//     expect(titie).toBe('Account Login')
// })

// test('@regression forgot password link test', async({loginPage})=>{
  
//     expect(await loginPage.isForgottenPasswordLinkExist()).toBeTruthy();
// })

// test('@regression user is able to login',async({loginPage,homePage})=>{

//    await loginPage.doLogin(process.env.USER_NAME,process.env.PASSWORD)
//    expect.soft(await homePage.isLogOutLinkExist()).toBeTruthy()
//    expect.soft(await homePage.homePageTitle()).toBe('My Account')

// })

// // read data from Csv

// let readCsvData=CsvHelper.readCsv('src/testdata/logindata.csv')
// for(let row of readCsvData){
// test(`@regression user is not able to login use Csv data - ${row.username} : ${row.password}`,async({loginPage,homePage})=>{

//     await loginPage.doLogin(row.username,row.password)
//     expect( loginPage.isLoginErrorExist()).toBeTruthy()
    

// })
// }

// // read data from excel

// let readExcelData= ExcelHelper.readExcel('src/testdata/logindata.xlsx','login')
// for(let row of readExcelData){

//     test(`@regression user is unable to logi use excel dat - ${row.useranem} - ${row.password}`,async({loginPage,page})=>{

//         await loginPage.doLogin(row.username,row.password)
//         expect(await loginPage.isLoginErrorExist()).toBeTruthy()

//     })

// }


