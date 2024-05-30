import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { brothsRoutes } from "./http/controllers/broths/routes";
import { proteinsRoutes } from "./http/controllers/proteins/routes";

export const app = fastify()

app.register(brothsRoutes, {
    prefix: '/broths'
})

app.register(proteinsRoutes, {
    prefix: '/proteins'
})

app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
      return reply
        .status(400)
        .send({ message: 'Validation error.', error: error.format() })
    }
  
    if (env.NODE_ENV !== 'production') {
      console.error(error)
    } else {

    }
  
    return reply.status(500).send({ error: 'Internal Server Error' })
  })