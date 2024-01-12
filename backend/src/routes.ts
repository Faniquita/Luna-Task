import { Router, Request, Response } from "express";
import prisma from "./imports/prisma/prisma";

import {CreateTarefasController} from './controller/tarefas/CreateTarefasController'
import {CreateStatusController} from './controller/status/CreateStatusController'
import {DeleteStatusController } from "./controller/status/DeleteStatusController"
import {DeleteTarefaController} from './controller/tarefas/DeleteTarefasController'
import {UpdateTarefaController} from './controller/tarefas/UpdateTarefasController'

const router = Router()

// --------------- MOSTRAR ---------------
router.get('/', (req:Request, res:Response) => {
  // Ao entrar na página, chamara todos as tarefas cadastradas
  async function main() {
    
    //Verificar tema da página ao entrar
    /*
      const ativoTema = await prisma.tema.findMany()
      if(ativoTema){}else{}
    */
    
    //Carregar registros na página ao entrar
    const allTasks = await prisma.tarefas.findMany({
      select:{
        tare_id: true,
        tare_titulo: true,
        tare_descricao: true,
        tare_data: true,
        tare_stat_nome: true
      }
    })
    //const allStatus = await prisma.status.findMany()
    //const tema = await prisma.tema.findMany() //Carregar Tema da Página
    return res.json({allTasks})
  }
  main().then(async () => {
      await prisma.$disconnect()
  }).catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
  })
})

router.get('/status', (req:Request, res:Response)=>{
  async function main() {
    const allStatus = await prisma.status.findMany()
    return res.json({allStatus})
  }
  main().then(async () => {
    await prisma.$disconnect()
  }).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
  
})


// --------------- CADASTRAR ---------------
router.post('/tarefas', new CreateTarefasController().handle)
router.post('/status', new CreateStatusController().handle)

// --------------- ATUALIZAR ---------------
router.patch('/tarefas', new UpdateTarefaController().handle)

// --------------- DELETAR ---------------
router.delete('/status', new DeleteStatusController().handle)
router.delete('/tarefas', new DeleteTarefaController().handle)





export{router};