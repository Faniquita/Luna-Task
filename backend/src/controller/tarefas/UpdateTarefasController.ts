import {Request, Response, response} from 'express'
import {UpdateTarefaService} from '../../services/tarefas/UpdateTarefasService'

class UpdateTarefaController{
    async handle(req:Request, res:Response){

        const {tareId, titulo, descricao, status } = req.body

        const updateTarefasService =  new UpdateTarefaService()

        const tarefa = await updateTarefasService.execute({
            tareId, titulo, descricao, status
        })

        return res.json(tarefa)         
    }
   
}

export{UpdateTarefaController}