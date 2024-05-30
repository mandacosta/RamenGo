import { makeCreateOrderUseCase } from "@/usecases/facotories/make-create-order-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

const requestBodySchema = z.object({
    brothId: z.string(),
    proteinId: z.string()
})


export async function createOrder(req: FastifyRequest, reply: FastifyReply){
    try {
        const {data} = requestBodySchema.safeParse(req.body)

        if(!data || !req.body){
            return reply.status(400).send({error: 'both brothId and proteinId are required'})
        }

        const {brothId, proteinId} = data

        const useCase = makeCreateOrderUseCase()
        const order = await useCase.execute({brothId, proteinId})

        return reply.status(201).send(order)
    } catch (error) {
        throw error
    }
}