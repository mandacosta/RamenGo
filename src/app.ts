import fastify from "fastify";
import cors from "@fastify/cors";
import { ZodError } from "zod";
import { env } from "./env";
import { brothsRoutes } from "./http/controllers/broths/routes";
import { proteinsRoutes } from "./http/controllers/proteins/routes";
import { ordersRoutes } from "./http/controllers/orders/routes";

export const app = fastify()

app.register(cors, {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE']
});

app.register(brothsRoutes, {
    prefix: '/broths'
})

app.register(proteinsRoutes, {
    prefix: '/proteins'
})

app.register(ordersRoutes, {
    prefix: '/order'
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