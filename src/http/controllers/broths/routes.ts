import { verifyApiKey } from "@/http/middlewares/verify-api-key";
import { FastifyInstance } from "fastify";
import { listBroths } from "./list-broths";

export async function brothsRoutes(app: FastifyInstance){
    app.addHook('onRequest', verifyApiKey)

    app.get('/', listBroths)
    
}