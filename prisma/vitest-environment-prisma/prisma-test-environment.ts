import { PrismaClient } from '@prisma/client';
import 'dotenv/config'
import { execSync } from 'node:child_process';
import { randomUUID } from "node:crypto";
import { Environment } from "vitest";

const prisma = new PrismaClient()

function generateDatabaseURL(schema: string) {
    if (!process.env.DATABASE_URL) {
      throw new Error('You have to provide a DATABASE URL')
    }
  
    const url = new URL(process.env.DATABASE_URL)
    url.searchParams.set('schema', schema)
  
    return url.toString()
  }

export default <Environment>{
    name: 'prisma',
    transformMode: 'ssr',
    async setup(){
        const schema = randomUUID()

        const dataBaseURL = generateDatabaseURL(schema)
        process.env.DATABASE_URL = dataBaseURL
        execSync('npx prisma migrate deploy')

        return {
            async teardown(){
                await prisma.$executeRawUnsafe(
                    `DROP schema IF EXISTS "${schema}" CASCADE`,
                  )
                await prisma.$disconnect()   
            }
        }
    }

}