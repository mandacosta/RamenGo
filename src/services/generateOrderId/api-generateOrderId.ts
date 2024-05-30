import { IGenerateOrderId } from "./interface-generateOrderId";
import axios from "axios";
import { env } from "@/env";

export class APIGenerateOrderId implements IGenerateOrderId{
    async generate(){
        const baseUrl = 'https://api.tech.redventures.com.br/orders/generate-id'
        const instance = axios.create({
            baseURL: baseUrl,
            headers: {
                'x-api-key': env.X_API_KEY
            }
        })

        const resp = await instance.post('/')
        .then((resp) => resp.data)
        .catch((err) => {
            console.error(err)
            return null
        })
        console.log("resp", resp)

        return resp
        
    }
    
}