import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  DATABASE_URL: z.string(),
  X_API_KEY: z.string(),
  API_SECRET: z.string(),
  PORT: z.coerce.number().default(3000),
})

const env_ = envSchema.safeParse(process.env)

if (env_.success === false) {
  console.error('Variáveis de ambiente inválidas 🛑', env_.error.format())
  throw new Error('🛑 Variáveis de ambiente inválidas')
}

export const env = env_.data
