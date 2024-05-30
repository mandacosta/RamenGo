import { env } from '@/env'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function verifyApiKey(request: FastifyRequest, reply: FastifyReply) {
    if(request.headers['x-api-key'] !== env.API_SECRET){
        reply.status(403).send({ error: 'x-api-key header missing' })
    }
}