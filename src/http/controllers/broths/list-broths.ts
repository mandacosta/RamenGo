import { makeListBrothsUseCase } from "@/usecases/facotories/make-list-broths-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listBroths(req: FastifyRequest, reply: FastifyReply){
    try {
        const useCase = makeListBrothsUseCase()
        const broths = await useCase.execute()

        return reply.status(200).send(broths)
    } catch (error) {
        throw error
    }
}