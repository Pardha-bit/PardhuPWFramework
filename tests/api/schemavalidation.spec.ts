
import {test,expect} from '../../src/api/apifixtures'
import Ajv from 'ajv'
import fs from 'fs'

const TOKEN = process.env.API_TOKEN

let AUTH_HEADER ={

    Authorization:`Bearer ${TOKEN}`
}

let ajv= new Ajv()

// let userSchema={
  
//   "type": "object",
//   "properties": {
//     "id": {
//       "type": "number"
//     },
//     "name": {
//       "type": "string"
//     },
//     "email": {
//       "type": "string"
//     },
//     "gender": {
//       "type": "string"
//     },
//     "status": {
//       "type": "string"
//     }
//   },
//   "required": [
//     "id",
//     "name",
//     "email",
//     "gender",
//     "status"
//   ]
// }

test('get a User schema test',async({apiHelper})=>{

        let userData={
            name: "pardhu-update",
            email: `pwautomation_${Date.now()}@open.com`,
            gender: "male",
            status: "inactive"
        }

        let response = await apiHelper.post('/public/v2/users',userData,AUTH_HEADER)
        expect(response.status).toBe(201)
        let userId = await response.body.id
        console.log(userId);

        let getResponse = await apiHelper.get(`/public/v2/users/${userId}`,AUTH_HEADER)
        expect(getResponse.status).toBe(200)

        let validate = ajv.compile(JSON.parse(fs.readFileSync('./src/schema/userData.json','utf-8')))
        let isSchemaValid = validate(getResponse.body)
        if(!isSchemaValid){
            console.log('schema errors:',validate.errors);
        }

        expect(isSchemaValid).toBeTruthy()

})
