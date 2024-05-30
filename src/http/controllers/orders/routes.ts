import { verifyApiKey } from "@/http/middlewares/verify-api-key";
import { FastifyInstance } from "fastify";
import { createOrder } from "./create-order";


export async function ordersRoutes(app: FastifyInstance){
    app.addHook('onRequest', verifyApiKey)

    app.post('/', createOrder)
    
}