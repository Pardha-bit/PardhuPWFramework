
import { APIRequestContext } from "@playwright/test";


export class ApiHelper{

    private readonly request: APIRequestContext;
    private readonly baseURL: string;
    

    constructor(request: APIRequestContext, baseURL: string){
        this.request=request;
        this.baseURL=baseURL;
        
    }

    async get(endpoint: string, headers? : Record<string,string>){
        let response = await this.request.get(`${this.baseURL}${endpoint}`,{
            headers: headers
        })

        console.log(await response.json(),response.status());
        
        return{
            status: response.status(),
            body: await response.json()
        }

    }

    async post(endpoint: string, data: object, headers?: Record<string,string>){

        let response =await this.request.post(`${this.baseURL}${endpoint}`,{
            headers: headers,
            data: data
        })

        return {
            status: response.status(),
            body: await response.json()
        }
  
    }

    async put(endpoint: string, data: object, headers?: Record<string,string>){
        let response =await this.request.put(`${this.baseURL}${endpoint}`,{
            headers: headers,
            data: data
        })

        return{
            status: response.status(),
            body: await response.json()
        }
    }

    async delete(endPoint: string, headers?: Record<string, string>) {
        let response = await this.request.delete(`${this.baseURL}${endPoint}`, {
            headers: headers
        });
        console.log(response.status());

        return {
            status: response.status(),
        }
    }

   
    


}