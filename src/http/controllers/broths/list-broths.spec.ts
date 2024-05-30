import { app } from '@/app'
import { execSync } from 'node:child_process'
import {afterAll, beforeAll, describe, expect, it} from 'vitest'
import request from 'supertest'
import { env } from '@/env'

describe('List Broths (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
        execSync('npm run seed')
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to list available broths', async () => {
        const response = await request(app.server)
        .get('/broths')
        .set('x-api-key', env.API_SECRET)

        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveLength(4)

    })

    it('should not be able to list available broths without x-api-key header', async () => {
        const response = await request(app.server)
        .get('/broths')

        expect(response.statusCode).toBe(403)
    })
})