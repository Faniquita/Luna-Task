import express, {Request, Response} from 'express'
const server = express()

import prisma from '../imports/prisma/prisma'

import { router } from '../routes'
import cors from 'cors'

server.use(express.json())
server.use(cors())

//Configuração de Rotas
server.use(router)




/*
    YARN DEV - Rodar o código
*/
server.listen(3002, () => {
    console.log(`Server in port 3002`)
})