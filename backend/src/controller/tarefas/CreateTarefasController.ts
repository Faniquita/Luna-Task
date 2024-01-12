import {Request, Response, response} from 'express'
import {CreateTarefasService} from '../../services/tarefas/CreateTarefasService'

class CreateTarefasController{
    async handle(req:Request, res:Response){
        // Dados vindo do Frontend        
        const {titulo, descricao, status} = req.body

        const createTarefaService =  new CreateTarefasService()
        const tarefa = await createTarefaService.execute({
            titulo, descricao, status
        })

        return res.json(tarefa) 
        
    }
   
}

export{CreateTarefasController}