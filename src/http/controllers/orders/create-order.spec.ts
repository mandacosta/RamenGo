import { app } from '@/app'
import { execSync } from 'node:child_process'
import {afterAll, beforeAll, describe, expect, it} from 'vitest'
import request from 'supertest'
import { env } from '@/env'
import { makeListProteinsUseCase } from '@/usecases/facotories/make-list-proteins-use-case'
import { makeListBrothsUseCase } from '@/usecases/facotories/make-list-broths-use-case'


describe('Create Order (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
        execSync('npm run seed')
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to place an order', async () => {
        const listProteinsUseCase = makeListProteinsUseCase()
        const listBrothsUseCase = makeListBrothsUseCase()

        const broths = await listBrothsUseCase.execute()
        const proteins = await listProteinsUseCase.execute()

        // Shio with Menma
        const response = await request(app.server)
        .post('/orders')
        .set('x-api-key', env.API_SECRET)
        .send({
            brothId: broths[2].id,
            proteinId: proteins[1].id
        })

        expect(response.statusCode).toBe(201)
        expect(response.body.description).toEqual("Shio with Menma")

    })

    it('should be able to place an order without x-api-key', async () => {
        const response = await request(app.server)
        .post('/orders')

        expect(response.statusCode).toBe(403)
    })

    it('should not be able to place an order without brothId and proteinId', async () => {
        const response = await request(app.server)
        .post('/orders')
        .set('x-api-key', env.API_SECRET)


        expect(response.statusCode).toBe(400)
    })

    
})