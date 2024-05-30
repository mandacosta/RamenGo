import { verifyApiKey } from "@/http/middlewares/verify-api-key";
import { FastifyInstance } from "fastify";
import { listProteins } from "./list-proteins";

export async function proteinsRoutes(app: FastifyInstance){
    app.addHook('onRequest', verifyApiKey)

    app.get('/', listProteins)
    
}