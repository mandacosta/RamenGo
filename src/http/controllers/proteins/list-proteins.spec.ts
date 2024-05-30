import { app } from '@/app'
import { execSync } from 'node:child_process'
import {afterAll, beforeAll, describe, expect, it} from 'vitest'
import request from 'supertest'
import { env } from '@/env'

describe('List Proteins (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
        execSync('npm run seed')
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to list available proteins', async () => {
        const response = await request(app.server)
        .get('/proteins')
        .set('x-api-key', env.API_SECRET)

        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveLength(3)

    })

    it('should not be able to list available proteins without x-api-key header', async () => {
        const response = await request(app.server)
        .get('/proteins')

        expect(response.statusCode).toBe(403)
    })
})