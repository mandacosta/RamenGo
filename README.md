# RamenGo 🍜

<p align="center">
  <img src="https://img.shields.io/badge/Enviroment-NodeJS-green"/> 
  <img src="https://img.shields.io/badge/Framework-fastify-orange"/> 
  <img src="https://img.shields.io/badge/Language-TypeScript-blue"/> 
  <img src="https://img.shields.io/badge/Test-Vitest-red"/> 
</p>

##  Deploy 🚀<br/>
baseURL: https://ramengo-4pba.onrender.com

## Current features :clipboard: <br/>
- `GET /broths` - list all available broths.
- `GET /proteins` - list all available proteins.
- `POST /order` - place an order.

Note: to use the end-points you must provide a "x-api-key" header with the following key: 
*ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf*

##  Getting Started on localhost <br/>
To get started with the API, clone this repository to your local machine and run the following <br/>
commands to start the application: <br/>

1. Clone this repository to your local machine.`https://github.com/mandacosta/RamenGo.git`
2. Next, navigate to the project directory and run the following command to restore the dependencies:
`npm install`
3. Configure a ".env" file according to the ".env.example" file already present in the repository. Choose a PORT. The default will be 3000.
4. Make sure docker is already setup on your machine and then run the following command to prepare PostgreSQL database:
`docker compose up`
6. Run `npm run seed` to load data to the database.
7. Finally, run the following command to start the API:
`npm run dev`
8. The application will start listening on http://localhost:3000 <br/><br/>

Note: We also have some scripts for running unity tests and e2e tests: `npm run test:unity` and `npm run test:e2e`
