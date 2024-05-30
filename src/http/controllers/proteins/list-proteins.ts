import { makeListProteinsUseCase } from "@/usecases/facotories/make-list-proteins-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listProteins(req: FastifyRequest, reply: FastifyReply){
    try {
        const useCase = makeListProteinsUseCase()
        const proteins = await useCase.execute()

        return reply.status(200).send(proteins)
    } catch (error) {
        throw error
    }
}