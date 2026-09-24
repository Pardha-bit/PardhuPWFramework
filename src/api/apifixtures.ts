

import { ApiHelper } from "../pages/ApiHelper";
import{test as baseTest,expect} from '@playwright/test'


type apiFixtures={

    apiHelper: ApiHelper

}

   export let test =baseTest.extend<apiFixtures>({
        apiHelper: async({request},use)=>{
            let apiHelper=new ApiHelper(request,process.env.API_BASE_URL!)
            await use(apiHelper)

        }
 })

 export {expect} from '@playwright/test'